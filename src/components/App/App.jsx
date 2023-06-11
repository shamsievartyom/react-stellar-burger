import styles from "./App.module.css";
import { data } from "../../utils/data";
import { useState, useEffect } from "react";
import AppHeader from '../AppHeader/AppHeader.jsx'
import AppMain from '../AppMain/AppMain.jsx'
import { useDispatch } from "react-redux";
import { getIngredientsThunk } from "../../redux/thunks/App";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default App;
