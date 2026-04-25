import classNames from 'classnames';
import s from './ProductSpecs.module.css';

export const ProductSpecs = () => {
  return (
    <div className={classNames(s['box'])}>
      <h2 className={classNames(s['title'])}>Описание</h2>
      <p className={classNames(s['subtitle'])}>Описание demo</p>
      <h2 className={classNames(s['title'])}>Характеристики</h2>
      <div className={classNames(s['grid'])}>
        <div className={classNames(s['naming'])}>Вес</div>
        <div className={classNames(s['description'])}>
					1 шт 120-200 грамм
        </div>
        <div className={classNames(s['naming'])}>Цена</div>
        <div className={classNames(s['description'])}>
					490 ₽ за 100 грамм
        </div>
        <div className={classNames(s['naming'])}>Польза</div>
        <div className={classNames(s['description'])}>
          <p>
						Большое содержание аминокислот и микроэлементов оказывает
						положительное воздействие на общий обмен веществ собаки.
          </p>
          <p>Способствуют укреплению десен и жевательных мышц.</p>
          <p>
						Развивают зубочелюстной аппарат, отвлекают собаку во время смены
						зубов.
          </p>
          <p>
						Имеет цельную волокнистую структуру, при разжевывание получается
						эффект зубной щетки, лучше всего очищает клыки собак.
          </p>
          <p>Следует учесть высокую калорийность продукта.</p>
        </div>
      </div>
    </div>
  );
};
