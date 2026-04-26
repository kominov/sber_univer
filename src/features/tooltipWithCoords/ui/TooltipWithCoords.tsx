import { useRef, useState, type ReactNode } from 'react';
import { Tooltip, TooltipPosition } from 'shared/ui/Tooltip';

interface TooltipWithCoordsProps {
  text: string;
  position?: TooltipPosition;
  children: ReactNode;
}

export function TooltipWithCoords({ text, position, children }: TooltipWithCoordsProps) {
  const [coords, setCoords] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  const show = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    }
  };

  const hide = () => setCoords(null);

  return (
    <span
      ref={ref}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <Tooltip text={text} position={position} coords={coords}>
        {children}
      </Tooltip>
    </span>
  );
}
