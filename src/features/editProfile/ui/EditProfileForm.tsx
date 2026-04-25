import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import s from './EditProfileForm.module.css';

export const EditProfileForm = () => {
  return (
    <form className={s['form']}>
      <div className={s['form__row']}>
        <label className={s['form__label']}>
          <Input name='name' placeholder='Введите ваше имя' />
        </label>
        <label className={s['form__label']}>
          <Input name='about' placeholder='Описание профессии' />
        </label>
      </div>
      <div className={s['form__row']}>
        <label className={s['form__label']}>
          <Input name='avatar' type='url' placeholder='Введите ссылку на аватарку' />
        </label>
        <label className={s['form__label']}>
          <Input name='email' type='email' placeholder='email' />
        </label>
      </div>

      <Button type='submit' variant='ghost' className={s['maxContent']}>
				Сохранить
      </Button>
    </form>
  );
};
