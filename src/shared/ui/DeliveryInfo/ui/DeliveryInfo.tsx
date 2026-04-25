import classNames from 'classnames';
import truckSVG from '../../../assets/icons/truck.svg?url';
import qualitySVG from '../../../assets/icons/quality.svg?url';
import s from './DeliveryInfo.module.css';

export const DeliveryInfo = () => {
  return (
    <>
      <div className={classNames(s['delivery'])}>
        <img src={truckSVG} alt='truck' />
        <div className={classNames(s['right'])}>
          <h3 className={classNames(s['name'])}>
						Доставка по всему Миру!
          </h3>
          <p className={classNames(s['text'])}>
						Доставка курьером — <span className='bold'> от 399 ₽</span>
          </p>
          <p className={classNames(s['text'])}>
						Доставка в пункт выдачи —
            <span className={classNames(s['bold'])}>
              {' '}
							от 199 ₽
            </span>
          </p>
        </div>
      </div>
      <div className={classNames(s['delivery'])}>
        <img src={qualitySVG} alt='quality' />
        <div className={classNames(s['right'])}>
          <h3 className={classNames(s['name'])}>
						Гарантия качества
          </h3>
          <p className={classNames(s['text'])}>
						Если Вам не понравилось качество нашей продукции, мы вернем
						деньги, либо сделаем все возможное, чтобы удовлетворить ваши
						нужды.
          </p>
        </div>
      </div>
    </>
  );
};
