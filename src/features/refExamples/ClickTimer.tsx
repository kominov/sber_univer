import { useCallback, useRef } from 'react';

interface ClickData {
  startTime: number | null;
  clickCount: number;
}

export function ClickTimer() {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = useCallback(() => {
    const currentTime = Date.now();
    const clickData = clickDataRef.current;

    if (clickData.startTime === null) {
      clickData.startTime = currentTime;

      console.log('Первый клик зафиксирован!');
    } else {
      const timeDiff = currentTime - clickData.startTime;
      clickData.clickCount += 1;
      
      console.log(`Разница во времени: ${timeDiff}мс`);
      console.log(`Общее количество кликов: ${clickData.clickCount}`);
    }
  },[]);

  return (
    <div>
      <h2>ClickTimer Component</h2>
      <button onClick={handleClick}>
        Нажми меня
      </button>
      <p>Нажмите на кнопку несколько раз. Проверьте консоль для просмотра результатов.</p>
    </div>
  );
}