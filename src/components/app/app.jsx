import styles from "./app.module.css";
import { data } from "../../utils/data";
import { useState, useEffect } from "react";
import funFetch from "../../functions/funFetch";
import AppHeader from '../AppHeader/AppHeader.jsx'
import AppMain from '../AppMain/AppMain.jsx'
import store from "../../store/store";

function App() {

  const [appState, setAppState] = useState([]);

  useEffect(() => {
    funFetch('ingredients', 'Get')
      .then((res) => {
        setAppState(res)
        store.dispatch({
          type: 'UPDATE_CARDS',
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
