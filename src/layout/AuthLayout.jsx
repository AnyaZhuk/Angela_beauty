import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-full items-center justify-center bg-salon-gray-light px-4 dark:bg-slate-950">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
