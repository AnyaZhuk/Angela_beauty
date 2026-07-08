import { Link } from 'react-router-dom';

const LOGO_SRC = '/images/logo.png';

export default function AppLogo({ compact = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5 text-salon-ink dark:text-white">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-salon-primary bg-white p-1 shadow-sm">
        <img
          src={LOGO_SRC}
          alt=""
          className="h-full w-full rounded-full object-contain"
          width={40}
          height={40}
        />
      </span>
      {!compact && (
        <span className="max-w-[11rem] text-sm font-semibold leading-tight sm:max-w-none sm:text-base">
          Салон красоты «Анжела»
        </span>
      )}
    </Link>
  );
}
