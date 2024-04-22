import styles from './App.module.css';
import { DarkModeProvider } from './context/DarkModeContext';
import { Table } from './feature/Table';
import DarkModeToggle from './ui/DarkModeToggle/DarkModeToggle';

function App() {
  return (
    <DarkModeProvider>
      <div className={styles.app}>
        <div className={styles.header}>
          <h1>Logo!</h1>
          <DarkModeToggle />
        </div>
        <div className={styles.wrapper}>
          <Table />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
