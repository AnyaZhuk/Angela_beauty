import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchServices } from '../api/salon.js';
import PageState from '../components/shared/PageState.jsx';

export default function ServicesPage() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices()
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="salon-page">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold">{t('services.title')}</h1>
        <p className="mt-1 text-sm text-salon-gray">{t('services.subtitle')}</p>
      </header>

      <PageState loading={loading} error={error}>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="salon-card border-l-4" style={{ borderLeftColor: item.color }}>
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <span className="shrink-0 text-sm font-medium text-salon-primary">
                  {t('services.from')} {item.priceFrom.toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <p className="mt-2 text-sm text-salon-gray">{item.description}</p>
              <p className="mt-3 text-xs text-salon-gray">{item.duration} мин</p>
            </article>
          ))}
        </div>
      </PageState>
    </div>
  );
}
