export const BOOKING_URL =
  'https://n909172.yclients.com/company/846626/personal/select-services?o=.';

export const YANDEX_MAPS_URL =
  'https://yandex.ru/maps/org/anzhela/99276929444/?ll=46.007594%2C51.521067&z=16';

export const YANDEX_REVIEWS_URL = 'https://yandex.ru/maps/org/anzhela/99276929444/reviews/';

export const YANDEX_MAP_WIDGET =
  'https://yandex.ru/map-widget/v1/?ll=46.007594%2C51.521067&z=16&ol=biz&oid=99276929444';

export const VK_URL = 'https://vk.com/anzhela_salon_krasoty';

export const PHONE = '+78452209794';
export const PHONE_DISPLAY = '+7 (8452) 20-97-94';

export const ADDRESS = 'ул. Дома 8 Марта, 3, Саратов';
export const CITY = 'Саратов';

export const RATING = 5.0;
export const REVIEWS_COUNT = 340;

export const SERVICE_CATEGORIES = [
  {
    id: 'hair',
    title: 'Волосы',
    items: [
      { name: 'Женские стрижки', priceFrom: 300 },
      { name: 'Мужские стрижки', priceFrom: 500 },
      { name: 'Причёски', priceFrom: 300 },
    ],
  },
  {
    id: 'nails',
    title: 'Ногти',
    items: [
      { name: 'Маникюр', priceFrom: 600 },
      { name: 'Педикюр', priceFrom: 1100 },
      { name: 'Маникюр мужской', priceFrom: 700 },
      { name: 'Педикюр мужской', priceFrom: 1200 },
    ],
  },
  {
    id: 'brows',
    title: 'Брови',
    items: [{ name: 'Брови', priceFrom: 350 }],
  },
  {
    id: 'epilation',
    title: 'Эпиляция',
    items: [{ name: 'Эпиляция лица', priceFrom: 200, note: 'только зоны лица' }],
  },
];

export const WHY_FEATURES = [
  {
    id: 'prices',
    title: 'Честные цены',
    text: 'Средний ценовой сегмент — платите за мастерство, а не за громкое имя.',
    icon: 'prices',
  },
  {
    id: 'masters',
    title: 'Опытные мастера',
    text: 'Каждый специалист в своём направлении — стрижки, ногти, брови, эпиляция.',
    icon: 'masters',
  },
  {
    id: 'booking',
    title: 'Удобная запись',
    text: 'Онлайн через YClients, по телефону или сообщение во ВКонтакте.',
    icon: 'booking',
  },
  {
    id: 'location',
    title: 'Центр города',
    text: `${ADDRESS} — легко добраться на машине и общественным транспортом.`,
    icon: 'location',
  },
  {
    id: 'men',
    title: 'Мужчинам тоже',
    text: 'Мужские стрижки, маникюр и педикюр — отдельные позиции в прайсе.',
    icon: 'men',
  },
  {
    id: 'goodplace',
    title: 'Хорошее место 2026',
    text: 'Салон отмечен наградой «Хорошее место» на Яндекс Картах.',
    icon: 'goodplace',
    badge: '/images/good-place.png',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 'portfolio-1',
    title: 'Окрашивание и выпрямление',
    category: 'Волосы',
    image: '/images/portfolio-1.png',
    alt: 'До и после: окрашивание и выпрямление волос в салоне Анжела, Саратов',
  },
  {
    id: 'portfolio-2',
    title: 'Холодный блонд',
    category: 'Волосы',
    image: '/images/portfolio-2.png',
    alt: 'До и после: холодный блонд, салон красоты Анжела, Саратов',
  },
];

export const FEATURED_REVIEWS = [
  {
    name: 'Елена',
    text: 'Маникюр и педикюр на высшем уровне — аккуратно, внимательно, приятная атмосфера. Цена и качество отлично сочетаются.',
    service: 'Маникюр',
  },
  {
    name: 'Анна',
    text: 'Мастера по всем направлениям профессионалы. Приемлемые цены, на входе встречают приветливые администраторы.',
    service: 'Салон',
  },
  {
    name: 'Марина',
    text: 'Делала маникюр у мастера Ульяны — очень внимательная, аккуратная, качество работы отличное. Обязательно вернусь.',
    service: 'Маникюр',
  },
];
