import './App.css';
import FormNotes from './Components/FormNotes';
import ListNotes from './Components/ListNottes';
import { Provider } from "react-redux";
import store from "./store.js"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Timestamped Notes App</h1>
        <FormNotes />
        <hr />
        <ListNotes />
      </div>
    </Provider>
  );
}

export default App;
