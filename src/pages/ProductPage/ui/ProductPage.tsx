import { WithProtection } from 'app/router';
import { CartCounter } from 'features/cartCounter';
import { LikeButton } from 'features/likeButton';
import { useLocation } from 'react-router-dom';
import { useAddToCart } from 'shared/hooks/useAddToCart';
import { useGetProductQuery } from 'shared/store/api/productsApi';
import { cartSelectors } from 'shared/store/slices/cart';
import { useAppSelector } from 'shared/store/utils';
import { Button } from 'shared/ui/Button';
import { ButtonBack } from 'shared/ui/ButtonBack';
import { DeliveryInfo } from 'shared/ui/DeliveryInfo';
import { Price } from 'shared/ui/Price';
import { ProductSpecs } from 'shared/ui/ProductSpecs';
import { Rating } from 'shared/ui/Rating';
import { ReviewList } from 'widgets/ReviewList/ui/ReviewList';
import s from './ProductPage.module.css';

export const ProductPage = WithProtection(() => {
  const location = useLocation();
  const { pathname } = location;
  const productId = pathname.split('/').at(-1) || '';
  const { addProductToCart } = useAddToCart();

  const cartProducts = useAppSelector(cartSelectors.getCartProducts);

  const { data: product } = useGetProductQuery({ id: productId });

  if (!product) {
    return <></>;
  }

  const { id, name, images, description, price, discount } = product;

  const isProductInCart = !!cartProducts.find((p) => p.id === id);

  return (
    <>
      <ButtonBack /> 
      <h1 className={s['header-title']}>{name}</h1>
      <p className='acticul'>
				Артикул: <b>2388907</b>
      </p>
      <Rating rating={3} />
      <div className={s['product']}>
        <div className={s['product__img-wrapper']}>
          <img src={images} alt={description} />
        </div>
        <div className={s['product__desc']}>
          <Price price={price} discountPrice={discount} />

          {
            isProductInCart             
              ? <CartCounter productId={id} />
              : <Button onClick={()=> addProductToCart(({ ...product, count: 1 }))}>В корзину</Button>
          }

          <LikeButton product={product} />
          <DeliveryInfo />
        </div>
      </div>
      <ProductSpecs />
      <ReviewList product={product} />
    </>
  );
});
