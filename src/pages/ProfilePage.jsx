import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchBookings } from '../api/salon.js';
import { useAuthStore } from '../stores/authStore.js';
import PageState from '../components/shared/PageState.jsx';

export default function ProfilePage() {
  const { t } = useTranslation();
  const user = useAuthStore((s) => s.user);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings()
      .then(setBookings)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="salon-page">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold">{t('profile.title')}</h1>
        <p className="mt-1 text-sm text-salon-gray">{user?.email}</p>
      </header>

      <section>
        <h2 className="mb-4 text-lg font-semibold">{t('profile.bookings')}</h2>
        <PageState
          loading={loading}
          error={error}
          empty={!loading && !bookings.length ? t('profile.noBookings') : null}
        >
          <div className="space-y-3">
            {bookings.map((booking) => (
              <article key={booking.id} className="salon-card">
                {booking.service}
              </article>
            ))}
          </div>
        </PageState>
      </section>
    </div>
  );
}
