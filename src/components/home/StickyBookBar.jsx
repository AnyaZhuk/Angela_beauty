import BookButton from '../shared/BookButton.jsx';
import { PHONE, PHONE_DISPLAY } from '../../constants/salon.js';

export default function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-salon-border bg-white/95 p-3 backdrop-blur-md safe-bottom md:hidden dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`tel:${PHONE}`}
          className="salon-btn-ghost flex-1 text-sm"
          aria-label={`Позвонить ${PHONE_DISPLAY}`}
        >
          Позвонить
        </a>
        <BookButton className="salon-btn-primary flex-[1.4] text-sm font-semibold">
          Записаться
        </BookButton>
      </div>
    </div>
  );
}
