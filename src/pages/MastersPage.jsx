import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchMasters } from '../api/salon.js';
import PageState from '../components/shared/PageState.jsx';

export default function MastersPage() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMasters()
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="salon-page">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold">{t('masters.title')}</h1>
        <p className="mt-1 text-sm text-salon-gray">{t('masters.subtitle')}</p>
      </header>

      <PageState loading={loading} error={error}>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="salon-card">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-salon-primary-light text-xl font-semibold text-salon-primary-dark dark:bg-pink-950 dark:text-pink-200">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-salon-primary">{item.role}</p>
                  <p className="mt-2 text-sm text-salon-gray">{item.bio}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-salon-accent-light px-2.5 py-0.5 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageState>
    </div>
  );
}
