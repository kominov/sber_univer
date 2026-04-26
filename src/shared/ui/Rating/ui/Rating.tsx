import { memo, useCallback } from 'react';
import Star from 'shared/assets/icons/star.svg?react';

type TRating = {
	rating?: number
	isEdit?: boolean
	onChange?: (rating: number) => void
}
export const Rating = memo(({ rating = 0, isEdit = false, onChange }: TRating) => {
  const handleStarClick = useCallback(
    (i: number) => () => onChange?.(i),
    [onChange]
  );

  return (
    <div>
      {[...Array(5)].map((_e, i) => (
        <span key={i} style={{ cursor: isEdit ? 'pointer' : 'default' }}>
          <Star
            onClick={isEdit ? handleStarClick(i) : undefined}
            fill={i <= rating ? 'gold' : 'gray'}
          />
        </span>
      ))}
    </div> 
  );
});

Rating.displayName = 'Rating';
