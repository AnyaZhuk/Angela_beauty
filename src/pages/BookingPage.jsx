import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchBookingSlots } from '../api/salon.js';
import PageState from '../components/shared/PageState.jsx';

const DAY_LABELS = {
  mon: 'Пн',
  tue: 'Вт',
  wed: 'Ср',
  thu: 'Чт',
  fri: 'Пт',
  sat: 'Сб',
  sun: 'Вс',
};

export default function BookingPage() {
  const { t } = useTranslation();
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookingSlots()
      .then(setSlots)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="salon-page">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold">{t('booking.title')}</h1>
        <p className="mt-1 text-sm text-salon-gray">{t('booking.subtitle')}</p>
      </header>

      <PageState loading={loading} error={error} empty={!loading && !slots.length ? t('booking.empty') : null}>
        <div className="grid gap-4 sm:grid-cols-2">
          {slots.map((slot) => (
            <article key={slot.id} className="salon-card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold">{slot.service}</h2>
                  <p className="text-sm text-salon-gray">{slot.master}</p>
                </div>
                <span className="rounded-full bg-salon-primary-light px-2.5 py-0.5 text-xs font-medium text-salon-primary-dark dark:bg-pink-950 dark:text-pink-200">
                  {DAY_LABELS[slot.day]} {slot.time}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="text-salon-gray">{t('booking.duration')}</dt>
                  <dd className="font-medium">{slot.duration} мин</dd>
                </div>
                <div>
                  <dt className="text-salon-gray">{t('booking.spots')}</dt>
                  <dd className="font-medium">{slot.spotsLeft}</dd>
                </div>
              </dl>
              <button type="button" className="salon-btn-primary mt-4 w-full">
                {t('booking.book')}
              </button>
            </article>
          ))}
        </div>
      </PageState>
    </div>
  );
}
