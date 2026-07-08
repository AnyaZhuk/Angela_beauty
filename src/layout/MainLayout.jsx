import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppLogo from '../components/shared/AppLogo.jsx';
import BookButton from '../components/shared/BookButton.jsx';
import VkLink from '../components/shared/VkLink.jsx';
import { useAuthStore } from '../stores/authStore.js';
import { ADDRESS, PHONE, PHONE_DISPLAY } from '../constants/salon.js';

const navItems = [
  { href: '/#services', key: 'services' },
  { href: '/#masters', key: 'masters' },
  { href: '/#reviews', key: 'reviews' },
  { href: '/#contacts', key: 'contact' },
];

export default function MainLayout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-40 border-b border-salon-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <AppLogo />
          <nav className="hidden items-center gap-1 text-sm lg:flex">
            {navItems.map(({ href, key }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-1.5 text-gray-600 transition-colors hover:bg-gray-100"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden text-sm font-semibold text-salon-primary hover:underline sm:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <VkLink className="hidden sm:inline-flex" />
            <BookButton className="salon-btn-primary hidden px-3 text-xs sm:inline-flex">
              {t('nav.bookNow')}
            </BookButton>
            {user && (
              <>
                <NavLink to="/profile" className="salon-btn-ghost hidden px-2 text-xs md:inline-flex">
                  {user.name || t('nav.profile')}
                </NavLink>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="salon-btn-ghost hidden px-2 text-xs md:inline-flex"
                >
                  {t('nav.logout')}
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 bg-salon-gray-light">
        <Outlet />
      </main>
      <footer className="border-t border-salon-border bg-white py-8">
        <div className="salon-page !py-0">
          <div className="grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-lg font-semibold">{t('app.name')}</p>
              <p className="mt-2 text-salon-gray">{ADDRESS}</p>
              <a href={`tel:${PHONE}`} className="mt-1 block font-medium text-salon-primary hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/#services" className="text-salon-gray hover:text-salon-primary">
                Услуги
              </a>
              <a href="/#masters" className="text-salon-gray hover:text-salon-primary">
                Мастера
              </a>
              <a href="/#reviews" className="text-salon-gray hover:text-salon-primary">
                Отзывы
              </a>
              <a href="/#contacts" className="text-salon-gray hover:text-salon-primary">
                Контакты
              </a>
            </div>
            <div className="flex flex-col items-start gap-3">
              <VkLink showLabel />
              <BookButton className="salon-btn-primary text-xs">{t('nav.bookNow')}</BookButton>
            </div>
          </div>
          <p className="mt-8 border-t border-salon-border pt-6 text-center text-xs text-salon-gray">
            © {new Date().getFullYear()} {t('app.name')} · {t('app.tagline')}
          </p>
        </div>
      </footer>
    </div>
  );
}
