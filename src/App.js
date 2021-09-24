import './App.css';
import AgregarTarea from './containers/agregarTarea';
import Header from './components/header';
import List from './containers/List';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header titulo="React Avanzado clase 1" />
      <main className="container w-50">
        <List />
        <AgregarTarea />
      </main>
    </Provider>
  );
}

export default App;
