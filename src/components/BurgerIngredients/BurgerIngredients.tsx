import { useState, useRef, FC } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsArticle from '../IngredientsArticle/IngredientsArticle'
import { element } from 'prop-types'

const BurgerIngredients: FC = () => {
  const [currentTab, setCurrentTab] = useState('one')

  const containerRef = useRef<HTMLDivElement>(null);
  const elementRefFirst = useRef<HTMLElement>(null);
  const elementRefSecond = useRef<HTMLElement>(null);
  const elementRefThird = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const containerRect = containerRef.current!.getBoundingClientRect();
    const elementRectFisrt = elementRefFirst.current!.getBoundingClientRect();
    const elementRectSecond = elementRefSecond.current!.getBoundingClientRect();
    const elementRectThird = elementRefThird.current!.getBoundingClientRect();

    if (elementRectFisrt.top <= containerRect.top) {
      setCurrentTab('one')
    }
    if (elementRectSecond.top <= containerRect.top + 1) {
      setCurrentTab('two')
    }
    if (elementRectThird.top <= containerRect.top + 1) {
      setCurrentTab('three')
    }
  }

  const handleClick = (value: string) => {
    if (value === "one") containerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    else if (value === "two") elementRefSecond.current?.scrollIntoView({ behavior: 'smooth' });
    else if (value === "three") elementRefThird.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={`pt-10 ${styles.section}`}>
      <h1 className={`text text_type_main-large`}>Собери бургер</h1>
      <ul className={`mt-5 ${styles.tab__list}`}>
        <li>
          <Tab value="one" active={currentTab === 'one'} onClick={handleClick}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="two" active={currentTab === 'two'} onClick={handleClick}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="three" active={currentTab === 'three'} onClick={handleClick}>
            Начинки
          </Tab>
        </li>
      </ul>
      <div className={styles.article__container} ref={containerRef} onScroll={handleScroll} data-testid='BurgerIngredients_article__container'>
        <IngredientsArticle ref={elementRefFirst} title='Булки' type="bun" />
        <IngredientsArticle ref={elementRefSecond} title='Соусы' type="sauce" />
        <IngredientsArticle ref={elementRefThird} title='Начинки' type="main" />
      </div>
    </section >
  )
}

export default BurgerIngredients