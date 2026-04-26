import { memo } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from 'shared/ui/Logo/assets/logo.svg?react';
import s from './Logo.module.css';

export const Logo = memo(() => {
  return (
    <Link to='/' aria-label='Логотип компании'>
      <LogoIcon className={s['logo__pic']} />
    </Link>
  );
});

Logo.displayName = 'Logo';
