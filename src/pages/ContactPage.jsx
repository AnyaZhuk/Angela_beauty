import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="salon-page">
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold">{t('contact.title')}</h1>
        <p className="mt-1 text-sm text-salon-gray">{t('contact.subtitle')}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="salon-card space-y-4">
          <div>
            <h2 className="text-sm font-medium text-salon-gray">{t('contact.address')}</h2>
            <p className="mt-1 text-lg">{t('contact.addressValue')}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-salon-gray">{t('contact.phone')}</h2>
            <a href="tel:+78452123456" className="mt-1 block text-lg text-salon-primary hover:underline">
              +7 (8452) 12-34-56
            </a>
          </div>
          <div>
            <h2 className="text-sm font-medium text-salon-gray">{t('contact.hours')}</h2>
            <p className="mt-1 text-lg">{t('contact.hoursValue')}</p>
          </div>
          <Link to="/booking" className="salon-btn-primary inline-flex">
            {t('nav.bookNow')}
          </Link>
        </div>

        <div className="salon-card flex min-h-[16rem] items-center justify-center bg-gradient-to-br from-salon-primary-light to-salon-accent-light dark:from-pink-950 dark:to-amber-950">
          <p className="text-center text-sm text-salon-gray dark:text-slate-300">
            Карта будет подключена на следующем этапе
          </p>
        </div>
      </div>
    </div>
  );
}
