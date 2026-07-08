import { BOOKING_URL } from '../../constants/salon.js';

export default function BookButton({ className = 'salon-btn-primary', children = 'Записаться онлайн', ...props }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
