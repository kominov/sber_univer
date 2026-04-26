import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import s from './CartAmount.module.css';

type CartAmountProps = {
	products: CartProduct[];
};
export const CartAmount = ({ products }: CartAmountProps) => {
  	const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const allPrice = products.reduce((acc, p) => p.price * p.count + acc, 0);
  const allDiscount = products.reduce(
    (acc, p) => p.discount * p.count + acc,
    0
  );

  const handleSubmitCart = useCallback(() => {
    const order = products.map((p) => ({ id: p.id, count: p.count }));
    console.log('Отправка заказа на сервер: ', JSON.stringify(order, null, 2));
  },[products]);

  const openConfirm = useCallback(() => setIsConfirmOpen(true), []);
  const closeConfirm = useCallback(() => setIsConfirmOpen(false), []);
  return (
    <div className={classNames(s['cart-amount'])}>
      <h1 className={classNames(s['cart-amount__title'])}>Ваша корзина</h1>
      <div className={classNames(s['cart-amount__table'])}>
        <div className={classNames(s['cart-amount__table-row'])}>
          <span className={classNames(s['cart-amount__table-title'])}>
            {`Товары (${products.length})`}
          </span>
          <span className={classNames(s['cart-amount__table-value'])}>
            {`${allPrice} ₽`}
          </span>
        </div>
        <div className={classNames(s['cart-amount__table-row'])}>
          <span className={classNames(s['cart-amount__table-title'])}>
            Скидка
          </span>
          <span
            className={classNames(
              s['cart-amount__table-value'],
              s['cart-amount__table-value-discount']
            )}>
            {`${allDiscount} ₽`}
          </span>
        </div>
      </div>
      <div className={classNames(s['cart-amount__total-cost'])}>
        <h2 className={classNames(s['cart-amount__total-cost-title'])}>
					Общая стоимость
        </h2>
        <span className={classNames(s['cart-amount__total-cost-value'])}>
          {`${allPrice - allDiscount} ₽`}
        </span>
      </div>
      <Button onClick={openConfirm}>
				Оформить заказ
      </Button> 
      
      <Modal isOpen={isConfirmOpen} onClose={closeConfirm} title='Подтвердите заказ'>
        <p style={{ margin: '0 0 24px', color: '#333', lineHeight: 1.5 }}>
          {`Вы оформляете заказ на ${products.length} товар(ов) на сумму ${
            allPrice - allDiscount
          } ₽. Продолжить?`}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <Button variant='ghost' onClick={closeConfirm}>
						Отмена
          </Button>
          <Button variant='primary' onClick={handleSubmitCart}>
						Подтвердить
          </Button>
        </div>
      </Modal>
    </div>
  );
};
