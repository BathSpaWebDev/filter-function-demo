import './App.css';
import { dropdownOptions, dadJokes } from './data';
import {useState} from 'react';

function App() {

  const [jokes, setJokes] = useState(dadJokes);

  const filterFunction = (e) => {
    console.log(e.target.value);
    const filteredJokes = dadJokes.filter((joke,i) => {
        return joke.funniness === e.target.value;
    })
    setJokes(filteredJokes);
  }

  return (
    <div className="App">
      {/* Create a dropdown input from a list of data */}
      {/* Create a filter button, that filters the data by one of the selections in the dropdown */}
      <div className="filter">
        <header>
          <label htmlFor="filter-dropdown">Filter by:</label>
          <select name="filter-dropdown" id="filter-dropdown" onChange={(e) => filterFunction(e) }> 
          {
            dropdownOptions.map((option, i) => {
              return <option key={`option-${i}`} value={option.id}>{option.text}</option>;
            })
          }
          </select>
        </header>
        <main>
          {
            jokes.map((item, i) => {
              console.log(item.genre)
              return (
                <div key={i} className="joke">
                  <h3>{item.joke}</h3>
                  <p>This joke in under the genre of {item.genre ?item.genre.name : ''}</p>
                  
                </div>
              )
            })
          }
        </main>
        
      </div>
    </div>
  );
}

export default App;
