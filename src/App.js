import './App.css';
import CandiesList from './CandiesList.js';
import { candies } from './candies-data.js';


function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
    </div>
  );
}

export default App;

