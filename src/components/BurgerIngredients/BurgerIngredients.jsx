import { useState, useRef } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsArticle from '../IngredientsArticle/IngredientsArticle'
import { element } from 'prop-types'

function BurgerIngredients() {
  const [currentTab, setCurrentTab] = useState('one')

  const containerRef = useRef(null);
  const elementRefFirst = useRef(null);
  const elementRefSecond = useRef(null);
  const elementRefThird = useRef(null);

  function handleScroll(evt) {
    const containerRect = containerRef.current.getBoundingClientRect();
    const elementRectFisrt = elementRefFirst.current.getBoundingClientRect();
    const elementRectSecond = elementRefSecond.current.getBoundingClientRect();
    const elementRectThird = elementRefThird.current.getBoundingClientRect();

    if (elementRectFisrt.top <= containerRect.top) {
      setCurrentTab('one')
    }
    if (elementRectSecond.top <= containerRect.top) {
      setCurrentTab('two')
    }
    if (elementRectThird.top <= containerRect.top) {
      setCurrentTab('three')
    }
  }

  return (
    <section className={`pt-10 ${styles.section}`}>
      <h1 className={`text text_type_main-large`}>Собери бургер</h1>
      <ul className={`mt-5 ${styles.tab__list}`}>
        <li>
          <Tab value="one" active={currentTab === 'one'} onClick={setCurrentTab}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="two" active={currentTab === 'two'} onClick={setCurrentTab}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="three" active={currentTab === 'three'} onClick={setCurrentTab}>
            Начинки
          </Tab>
        </li>
      </ul>
      <div className={styles.article__container} ref={containerRef} onScroll={handleScroll}>
        <IngredientsArticle ref={elementRefFirst} title='Булки' type="bun" />
        <IngredientsArticle ref={elementRefSecond} title='Соусы' type="sauce" />
        <IngredientsArticle ref={elementRefThird} title='Начинки' type="main" />
      </div>
    </section >
  )
}

export default BurgerIngredients