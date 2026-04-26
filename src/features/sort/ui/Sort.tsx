import { memo, useCallback, type ChangeEvent } from 'react';
import { useSort } from '../hooks/useSort';

export const Sort = memo(() => {
  const { sort, setSort, sortParams } = useSort();
  const handleSortSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newSort = e.target.value as Sort;
      setSort(newSort);
    },
    [setSort]
  );
  return (
    <select value={sort} onChange={handleSortSelect}>
      {sortParams.map((p) => (
        <option key={p.title} value={p.value}>
          {p.title}
        </option>
      ))}
    </select>
  );
});

Sort.displayName = 'Sort';
