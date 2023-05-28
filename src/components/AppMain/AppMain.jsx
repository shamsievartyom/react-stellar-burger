import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx'
import styles from './AppMain.module.css'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function AppMain() {
    return (
        <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
}

export default AppMain