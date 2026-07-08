import { useEffect, useState } from 'react';
import { fetchMasters } from '../api/salon.js';
import BookButton from '../components/shared/BookButton.jsx';
import VkLink from '../components/shared/VkLink.jsx';
import StickyBookBar from '../components/home/StickyBookBar.jsx';
import FeatureIcon from '../components/home/FeatureIcon.jsx';
import PageState from '../components/shared/PageState.jsx';
import {
  ADDRESS,
  CITY,
  FEATURED_REVIEWS,
  PHONE,
  PHONE_DISPLAY,
  PORTFOLIO_ITEMS,
  RATING,
  REVIEWS_COUNT,
  SERVICE_CATEGORIES,
  WHY_FEATURES,
  YANDEX_MAP_WIDGET,
  YANDEX_REVIEWS_URL,
  YANDEX_MAPS_URL,
} from '../constants/salon.js';

function formatPrice(value) {
  return value.toLocaleString('ru-RU');
}

export default function HomePage() {
  const [masters, setMasters] = useState([]);
  const [mastersLoading, setMastersLoading] = useState(true);

  useEffect(() => {
    fetchMasters()
      .then(setMasters)
      .catch(() => {})
      .finally(() => setMastersLoading(false));
  }, []);

  return (
    <div className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-salon-ink text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-salon-ink via-salon-ink/90 to-salon-primary/40" />
        <div className="salon-page relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-sm font-medium text-pink-200">
              {CITY} · {ADDRESS}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Салон красоты «Анжела» на ул. 8 Марта в Саратове
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-200 sm:text-lg">
              Маникюр, педикюр, стрижки, причёски, брови и эпиляция лица — честные цены среднего
              сегмента и запись онлайн за минуту.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm backdrop-blur-sm">
              <span className="text-salon-primary-light" aria-hidden>
                ★
              </span>
              <span>
                {RATING} на Яндекс Картах · {REVIEWS_COUNT}+ отзывов
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton className="salon-btn-primary px-6 text-sm font-semibold shadow-magenta">
                Записаться онлайн
              </BookButton>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-5">
              <VkLink showLabel iconClassName="h-7 w-7" />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-salon-primary/50 shadow-2xl shadow-magenta md:aspect-[3/4]">
              <img
                src="/images/salon-interior.jpg"
                alt="Интерьер салона красоты Анжела в Саратове — маникюрные кресла в фирменных цветах"
                className="h-full w-full object-cover"
                width={600}
                height={750}
              />
            </div>
            <div className="absolute -bottom-4 -left-2 rounded-xl border border-salon-primary/20 bg-white px-4 py-3 text-salon-ink shadow-lg md:-left-6">
              <p className="text-xs font-medium text-salon-gray">Маникюр</p>
              <p className="text-lg font-bold text-salon-primary">от 600 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="salon-page scroll-mt-20 bg-damask py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Услуги и цены от</h2>
          <p className="mt-3 text-sm text-salon-gray sm:text-base">
            Точная стоимость — при записи в онлайн-расписании. Полный прайс в системе бронирования.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((category) => (
            <article key={category.id} className="salon-card flex min-h-[24rem] flex-col sm:min-h-[26rem]">
              <h3 className="text-xl font-semibold text-salon-primary">{category.title}</h3>
              <ul className="mt-5 flex flex-1 flex-col gap-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-3 border-b border-salon-border pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium leading-snug">{item.name}</p>
                      {item.note && <p className="mt-0.5 text-xs text-salon-gray">{item.note}</p>}
                    </div>
                    <p className="shrink-0 text-sm font-bold text-salon-primary">
                      от {formatPrice(item.priceFrom)} ₽
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 mt-auto w-full">
                <BookButton className="salon-btn-primary w-full text-sm">Записаться</BookButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="scroll-mt-20 bg-salon-primary-light py-12 md:py-16">
        <div className="salon-page !py-0 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Онлайн-запись</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-salon-gray sm:text-base">
            Выберите услугу, мастера, дату и время — без звонков и долгих форм. Запись через YClients.
          </p>
          <ol className="mx-auto mt-8 grid max-w-2xl gap-3 text-left text-sm sm:grid-cols-3">
            {['Выберите услугу', 'Выберите мастера', 'Подтвердите время'].map((step, i) => (
              <li key={step} className="salon-card flex items-center gap-3 !p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-salon-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
          <BookButton className="salon-btn-primary mt-8 px-8 text-base font-semibold">
            Открыть расписание и записаться
          </BookButton>
        </div>
      </section>

      {/* Why us */}
      <section className="salon-page py-12 md:py-16">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Почему «Анжела»</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_FEATURES.map((item) => (
            <article key={item.id} className="salon-card">
              <div className="flex items-start gap-4">
                <FeatureIcon name={item.icon} badge={item.badge} />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-salon-gray">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Masters */}
      <section id="masters" className="scroll-mt-20 bg-white py-12 md:py-16">
        <div className="salon-page !py-0">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Наши мастера</h2>
            <p className="mt-3 text-sm text-salon-gray">
              Записывайтесь к конкретному специалисту — многие клиенты приходят «на мастера»
            </p>
          </div>
          <PageState loading={mastersLoading}>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:items-stretch md:overflow-visible">
              {masters.map((master) => (
                <article
                  key={master.id}
                  className="salon-card flex h-full w-64 shrink-0 snap-start flex-col md:w-auto"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-salon-primary-light text-2xl font-semibold text-salon-primary">
                    {master.name.charAt(0)}
                  </div>
                  <h3 className="mt-4 text-center text-lg font-semibold text-salon-ink">{master.name}</h3>
                  <p className="text-center text-sm font-medium text-salon-primary">{master.role}</p>
                  <p className="mt-2 text-center text-xs text-salon-gray">Опыт {master.experience} лет</p>
                  <div className="mt-3 flex min-h-[3.25rem] flex-wrap justify-center gap-1.5 content-start">
                    {master.specialties.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-salon-accent px-2.5 py-0.5 text-xs font-medium text-salon-accent-text"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 mt-auto w-full pt-0">
                    <BookButton className="salon-btn-ghost w-full text-xs">Записаться</BookButton>
                  </div>
                </article>
              ))}
            </div>
          </PageState>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="salon-page scroll-mt-20 py-12 md:py-16">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Отзывы клиентов</h2>
            <p className="mt-2 text-sm text-salon-gray">Реальные оценки на Яндекс Картах</p>
          </div>
          <div className="salon-card !py-3 !px-5 text-center">
            <p className="text-2xl font-bold text-salon-primary">
              <span className="text-salon-primary" aria-hidden>
                ★
              </span>{' '}
              {RATING}
            </p>
            <p className="text-xs text-salon-gray">{REVIEWS_COUNT} отзывов</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {FEATURED_REVIEWS.map((review) => (
            <blockquote key={review.name} className="salon-card">
              <div className="flex gap-0.5 text-salon-primary" aria-label="5 из 5">
                {'★★★★★'}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                «{review.text}»
              </p>
              <footer className="mt-4 text-sm">
                <cite className="not-italic font-semibold">{review.name}</cite>
                <span className="text-salon-gray"> · {review.service}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={YANDEX_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="salon-btn-ghost inline-flex text-sm"
          >
            Читать все отзывы на Яндекс Картах →
          </a>
        </div>
      </section>

      {/* Portfolio — До / После */}
      <section id="portfolio" className="scroll-mt-20 bg-white py-12 md:py-16">
        <div className="salon-page !py-0">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">До и после</h2>
            <p className="mt-3 text-sm text-salon-gray">
              Реальные работы наших мастеров — без фильтров и чрезмерной ретуши
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PORTFOLIO_ITEMS.map((item) => (
              <article key={item.id} className="salon-card overflow-hidden !p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-salon-ink/75 px-2.5 py-1 text-xs font-medium text-white">
                      До
                    </span>
                    <span className="rounded-full bg-salon-primary px-2.5 py-1 text-xs font-medium text-white">
                      После
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-salon-primary">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-semibold">{item.title}</h3>
                  </div>
                  <BookButton className="salon-btn-ghost shrink-0 px-3 text-xs">
                    Записаться
                  </BookButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="scroll-mt-20 bg-salon-gray-light py-12 md:py-16">
        <div className="salon-page !py-0">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Как нас найти</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="salon-card space-y-5">
              <div>
                <h3 className="text-sm font-medium text-salon-gray">Адрес</h3>
                <p className="mt-1 text-lg font-medium">{ADDRESS}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-salon-gray">Телефон</h3>
                <a href={`tel:${PHONE}`} className="mt-1 block text-lg font-medium text-salon-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-salon-gray">Соцсети</h3>
                <VkLink showLabel className="mt-2" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-salon-gray">Часы работы</h3>
                <p className="mt-1">Ежедневно, открыто до 20:00</p>
                <p className="mt-1 text-xs text-salon-gray">Уточняйте график по телефону или в YClients</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <BookButton className="salon-btn-primary">Записаться</BookButton>
                <a
                  href={YANDEX_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="salon-btn-ghost"
                >
                  Маршрут на карте
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-salon-border shadow-card dark:border-slate-700">
              <iframe
                title="Салон красоты Анжела на Яндекс Картах"
                src={YANDEX_MAP_WIDGET}
                className="h-72 w-full border-0 lg:h-full lg:min-h-[22rem]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <StickyBookBar />
    </div>
  );
}
