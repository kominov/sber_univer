import classNames from 'classnames';
import { WithProtection } from 'features/auth';
import { EditProfileForm } from '../../../features/editProfile';
import { Button } from '../../../shared/ui/Button';
import { ButtonBack } from '../../../shared/ui/ButtonBack';
import { Input } from '../../../shared/ui/Input';
import s from './ProfilePage.module.css';

export const ProfilePage = WithProtection(() => {
  return (
    <>
      <ButtonBack />
      <h1 className={s['form__title']}>Мои данные</h1>
      <EditProfileForm />
      <h2 className={s['form__title']}>Изменить пароль</h2>
      <form className={s['form']}>
        <div className={classNames(s['form__row'], s['form__row_min'])}>
          <label className={s['form__label']}>
            <Input name='password' type='password' placeholder='Пароль' />
          </label>
        </div>
        <Button type='submit' variant='ghost' className={s['maxContent']}>
					Сохранить
        </Button>
      </form>
    </>
  );
});
