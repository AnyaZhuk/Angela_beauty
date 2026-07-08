import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../stores/authStore.js';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: email.split('@')[0], email });
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="salon-card space-y-4">
      <h1 className="text-center font-display text-2xl font-bold">{t('auth.loginTitle')}</h1>
      <label className="block text-sm">
        <span className="text-salon-gray">{t('auth.email')}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-salon-border px-3 py-2 dark:border-slate-600 dark:bg-slate-900"
        />
      </label>
      <label className="block text-sm">
        <span className="text-salon-gray">{t('auth.password')}</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-salon-border px-3 py-2 dark:border-slate-600 dark:bg-slate-900"
        />
      </label>
      <button type="submit" className="salon-btn-primary w-full">
        {t('auth.submitLogin')}
      </button>
      <p className="text-center text-sm text-salon-gray">
        {t('auth.noAccount')}{' '}
        <Link to="/register" className="text-salon-primary hover:underline">
          {t('nav.register')}
        </Link>
      </p>
    </form>
  );
}
