import { useState } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsArticle from '../IngredientsArticle/IngredientsArticle'

function BurgerIngredients() {
  const [currentTab, setCurrentTab] = useState('one')

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
      <div className={styles.article__container}>
        <IngredientsArticle title='Булки' type="bun" />
        <IngredientsArticle title='Соусы' type="sauce" />
        <IngredientsArticle title='Начинки' type="main" />
      </div>
    </section>
  )
}

export default BurgerIngredients