import { WithProtection } from 'app/router';
import { LoadMore } from 'features/loadMore';
import { Sort } from 'features/sort';
import { WithQuery } from 'shared/store/HOCs/WithQuery';
import { useProducts } from 'shared/store/hooks/useProducts';
import { CardList } from 'widgets/CardList';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
  const { products, isLoading, isError, error } = useProducts();

  return (
    <>
    	<Sort />
      <CardListWithQuery
        title='Лакомства'
        isLoading={isLoading}
        isError={isError}
        products={products}
        error={error}
      />
      <LoadMore />
    </>
  );
});
