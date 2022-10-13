import styles from "./App.module.css";
import CardsControl from "./Component/CardsControl/CardsControl";
import CardsInfo from "./Component/CardsInfo/CardsInfo";

function App() {
  return (
    <div className={styles.container}>
      <CardsInfo />
      <CardsControl />
    </div>
  );
}

export default App;
