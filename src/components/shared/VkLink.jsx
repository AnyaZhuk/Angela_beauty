import { VK_URL } from '../../constants/salon.js';

export function VkIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.08 14.27h-1.46c-.55 0-.72-.44-1.71-1.42-.86-.82-1.24-.93-1.46-.93-.3 0-.38.09-.38.5v1.3c0 .36-.12.58-1.08.58-1.59 0-3.36-.96-4.6-2.76-1.87-2.62-2.38-4.59-2.38-4.74 0-.21.09-.4.5-.4h1.46c.37 0 .51.17.65.57.72 2.08 1.93 3.9 2.43 3.9.19 0 .27-.09.27-.58V9.53c-.06-.95-.55-1.03-.55-1.41 0-.17.14-.34.37-.34h2.3c.31 0 .42.17.42.53v2.86c0 .31.14.42.23.42.19 0 .35-.12.69-.46 1.07-1.2 1.84-3.05 1.84-3.05.1-.21.27-.4.64-.4h1.46c.44 0 .53.23.44.53-.18.84-1.93 3.31-1.93 3.31-.15.25-.21.36 0 .65.15.21.66.64 1 1.04.62.74 1.1 1.36 1.23 1.79.14.42-.08.64-.5.64z" />
    </svg>
  );
}

export default function VkLink({ className = '', showLabel = false, iconClassName, labelClassName = '' }) {
  return (
    <a
      href={VK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg text-salon-primary transition-opacity hover:opacity-80 ${className}`}
      aria-label="ВКонтакте — салон Анжела"
    >
      <VkIcon className={iconClassName ?? 'h-6 w-6'} />
      {showLabel && <span className={`text-sm font-medium text-salon-primary ${labelClassName}`}>ВКонтакте</span>}
    </a>
  );
}
