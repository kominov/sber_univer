import { WithProtection } from 'features/auth';
import { Sort } from 'features/sort';
import { CardList } from 'widgets/CardList';
import { WithQuery } from '../../../shared/store/HOCs/WithQuery';
import { useProducts } from '../../../shared/store/hooks/useProducts';
import { LoadMore } from '../../../shared/ui/LoadMore';

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
