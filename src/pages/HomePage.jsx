import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchMasters, fetchServices } from '../api/salon.js';

export default function HomePage() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ clients: 1200, services: 0, masters: 0, years: 5 });

  useEffect(() => {
    Promise.all([fetchServices(), fetchMasters()])
      .then(([services, masters]) => {
        setStats((s) => ({ ...s, services: services.length, masters: masters.length }));
      })
      .catch(() => {});
  }, []);

  const features = [
    { title: t('home.featureCare'), text: t('home.featureCareText'), icon: '✦' },
    { title: t('home.featureMasters'), text: t('home.featureMastersText'), icon: '♡' },
    { title: t('home.featureComfort'), text: t('home.featureComfortText'), icon: '☼' },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-salon-primary via-salon-primary-dark to-rose-900 px-4 py-20 text-white sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,165,116,0.25),transparent_50%)]" />
        <div className="salon-page relative !py-0 text-center">
          <p className="font-display text-lg tracking-widest text-salon-accent-light uppercase">Beauty & Care</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t('home.heroTitle')}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-pink-100">{t('home.heroSubtitle')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/booking" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-salon-primary-dark">
              {t('home.ctaBooking')}
            </Link>
            <Link
              to="/services"
              className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t('home.ctaServices')}
            </Link>
          </div>
        </div>
      </section>

      <section className="salon-page">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { value: stats.clients, label: t('home.statsClients') },
            { value: stats.services || '—', label: t('home.statsServices') },
            { value: stats.years, label: t('home.statsYears') },
          ].map((item) => (
            <div key={item.label} className="salon-card text-center">
              <div className="text-3xl font-bold text-salon-primary">{item.value}</div>
              <div className="mt-1 text-sm text-salon-gray">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="salon-page">
        <h2 className="mb-6 text-center font-display text-3xl font-semibold">{t('home.featuresTitle')}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="salon-card text-center">
              <span className="text-2xl text-salon-accent" aria-hidden>{feature.icon}</span>
              <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-salon-gray">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
