import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchPricing } from '../api/salon.js';
import PageState from '../components/shared/PageState.jsx';

export default function PricingPage() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPricing()
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="salon-page">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold">{t('pricing.title')}</h1>
        <p className="mt-1 text-sm text-salon-gray">{t('pricing.subtitle')}</p>
      </header>

      <PageState loading={loading} error={error}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.id}
              className={`salon-card flex flex-col ${item.popular ? 'ring-2 ring-salon-accent' : ''}`}
            >
              {item.popular && (
                <span className="mb-2 w-fit rounded-full bg-salon-accent px-2.5 py-0.5 text-xs font-medium text-white">
                  Popular
                </span>
              )}
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="mt-2 flex-1 text-sm text-salon-gray">{item.description}</p>
              <p className="mt-4 text-2xl font-bold text-salon-primary">
                {item.price.toLocaleString('ru-RU')} ₽
              </p>
              <Link to="/booking" className="salon-btn-primary mt-4 w-full text-center">
                {t('pricing.choose')}
              </Link>
            </article>
          ))}
        </div>
      </PageState>
    </div>
  );
}
