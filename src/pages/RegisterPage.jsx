import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../stores/authStore.js';

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const register = useAuthStore((s) => s.register);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email });
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="salon-card space-y-4">
      <h1 className="text-center font-display text-2xl font-bold">{t('auth.registerTitle')}</h1>
      <label className="block text-sm">
        <span className="text-salon-gray">{t('auth.name')}</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-salon-border px-3 py-2 dark:border-slate-600 dark:bg-slate-900"
        />
      </label>
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
        {t('auth.submitRegister')}
      </button>
      <p className="text-center text-sm text-salon-gray">
        {t('auth.hasAccount')}{' '}
        <Link to="/login" className="text-salon-primary hover:underline">
          {t('nav.login')}
        </Link>
      </p>
    </form>
  );
}
