import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { TooltipPosition } from './TooltipPosition.ts';

interface Coords {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  children: ReactNode;
  coords: Coords | null;
}

const gap = 8;

const positionStyles: Record<TooltipPosition, React.CSSProperties> = {
  [TooltipPosition.Top]: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: gap,
  },
  [TooltipPosition.Bottom]: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: gap,
  },
  [TooltipPosition.Left]: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: gap,
  },
  [TooltipPosition.Right]: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: gap,
  },
};

export function Tooltip({ text, position = TooltipPosition.Top, children, coords }: TooltipProps) {
  const tooltipRoot = document.getElementById('tooltip-root');

  if (!coords || !tooltipRoot) return <>{children}</>;

  return (
    <>
      {children}
      {createPortal(
        <div
          style={{
            position: 'fixed',
            top: coords.top,
            left: coords.left,
            width: coords.width,
            height: coords.height,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              ...positionStyles[position],
              position: 'absolute',
              background: '#333',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: 4,
              fontSize: 13,
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {text}
          </div>
        </div>,
        tooltipRoot,
      )}
    </>
  );
}
