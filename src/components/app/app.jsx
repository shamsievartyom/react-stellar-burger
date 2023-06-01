import styles from "./App.module.css";
import { data } from "../../utils/data";
import { useState, useEffect } from "react";
import doFetch from "../../functions/doFetch";
import AppHeader from '../AppHeader/AppHeader.jsx'
import AppMain from '../AppMain/AppMain.jsx'
import store from "../../redux/store/store";
import { UPDATE_CARDS } from "../../redux/actions/BurgerIngredients";

function App() {

  useEffect(() => {
    doFetch('ingredients', 'Get')
      .then((res) => {
        store.dispatch({
          type: UPDATE_CARDS,
          payload: res
        });
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default App;
