import styles from './styles/App.module.css'
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className={styles.App}>
      <TodoApp/>
    </div>
  );
}

export default App;
