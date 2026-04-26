import { CartItem } from 'features/cartItem';
import { memo } from 'react';
import s from './CartList.module.css';

type CartListProps = {
	products: CartProduct[];
};
export const CartList = memo(({ products }: CartListProps) => {
  return (
    <div className={s['cart-list']}>
      {products.map((p) => (
        <CartItem product={p} key={p.id} />
      ))}
    </div>
  );
});

CartList.displayName = 'CartList';
