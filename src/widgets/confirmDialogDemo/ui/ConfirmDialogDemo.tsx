import { useState } from 'react';
import { showConfirmDialog } from 'shared/ui/ConfirmDialog';

export function ConfirmDialogDemo() {
  const [items, setItems] = useState(['Элемент 1', 'Элемент 2', 'Элемент 3']);
  const [log, setLog] = useState<string[]>([]);

  const handleDelete = async (item: string) => {
    const confirmed = await showConfirmDialog({
      title: 'Удалить элемент?',
      description: `Вы уверены, что хотите удалить «${item}»? Это действие необратимо.`,
    });

    if (confirmed) {
      setItems((prev) => prev.filter((i) => i !== item));
      setLog((prev) => [...prev, `Удалён: ${item}`]);
    } else {
      setLog((prev) => [...prev, `Отменено удаление: ${item}`]);
    }
  };

  return (
    <div>
      <hr style={{ margin: '40px 0' }} />

      <h2>ConfirmDialog через Portal</h2>
      <p>Нажмите «Удалить» рядом с элементом — появится диалог подтверждения.</p>

      <div style={{ margin: '20px 0' }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              marginBottom: 8,
              border: '1px solid #e0e0e0',
              borderRadius: 6,
              background: '#fafafa',
            }}
          >
            <span>{item}</span>
            <button
              style={{
                padding: '6px 14px',
                cursor: 'pointer',
                border: 'none',
                borderRadius: 4,
                background: '#e53935',
                color: '#fff',
                fontSize: 13,
              }}
              onClick={() => handleDelete(item)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      {log.length > 0 && (
        <div style={{ marginTop: 20, padding: 15, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
          <h3>Лог действий:</h3>
          <div style={{ maxHeight: 150, overflowY: 'auto', background: '#fff', border: '1px solid #ddd', borderRadius: 4, padding: 8, fontSize: 13 }}>
            {log.map((msg, i) => (
              <div key={i} style={{ padding: '2px 0' }}>{msg}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
