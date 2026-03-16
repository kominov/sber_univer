/* eslint-disable react-hooks/refs */
import { useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<{ previous: T | undefined; current: T }>({
    previous: undefined,
    current: value,
  });

  // Обновляем ref при изменении value
  if (ref.current.current !== value) {
    ref.current = {
      previous: ref.current.current,
      current: value, 
    }; 
  }

  return ref.current.previous;
}