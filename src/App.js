import './App.css';
import { DataProvider } from './context/dataContext';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <HomePage />
      </DataProvider>
     
    </div>
  );
}

export default App;
