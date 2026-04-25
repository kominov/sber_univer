import { CartItem } from 'features/cartItem';
import s from './CartList.module.css';

type CartListProps = {
	products: CartProduct[];
};
export const CartList = ({ products }: CartListProps) => {
  return (
    <div className={s['cart-list']}>
      {products.map((p) => (
        <CartItem product={p} key={p.id} />
      ))}
    </div>
  );
};
