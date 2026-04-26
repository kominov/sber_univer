import classNames from 'classnames';
import { CartCounter } from 'features/cartCounter';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TrashIcon from 'shared/assets/icons/trash.svg?react';
import { cartActions } from 'shared/store/slices/cart';
import { Price } from 'shared/ui/Price';
import s from './CartItem.module.css';

type CartItemProps = {
	product: CartProduct;
};
export const CartItem = memo(({ product }: CartItemProps) => {
  const dispatch = useDispatch();
  const { id, name, images, price, discount } = product;

  const handleDelete = useCallback(() => {
    dispatch(cartActions.deleteCartProduct(id));
  }, [dispatch, id]);

  return (
    <div className={classNames(s['cart-item'])}>
      <div className={classNames(s['cart-item__desc'])}>
        <img
          src={images}
          alt={name}
          className={classNames(s['cart-item__image'])}
        />

        <div className={s['cart-item__content']}>
          <div className={s['cart-item__top']}>
            <Link
              className={classNames(s['cart-item__title'])}
              to={`/products/${id}`}>
              <h2>{name}</h2>
            </Link>

            <div className={s['cart-item__actions']}>
              <CartCounter productId={id} />
              <Price price={price} discountPrice={discount} />
            </div>
            <button
              className={classNames(s['cart-item__bnt-trash'])}
              onClick={handleDelete}>
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

CartItem.displayName = 'CartItem';
