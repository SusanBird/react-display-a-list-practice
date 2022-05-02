import './App.css';
import CandiesList from './CandiesList.js';
import { candies } from './candies-data.js';
import DogList from './DogList.js';
import { dogs } from './dog-data.js';
import ChildList from './ChildList.js';
import { kids } from './child-data.js';
import VehicleList from './VehicleList.js';
import { vehicles } from './vehicles-data.js';


function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
      <DogList dogs={dogs} />
      <ChildList kids={kids} />
      <VehicleList vehicles={vehicles} />
    </div>
  );
}

export default App;

