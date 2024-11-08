import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {
  {/*
    The App.jsx component is 
    - responsible for loading the data, 
    - process and pass it to the Countries.jsx component for displaying.
    - sorting and filtering the data
    */}
  {/**
    Filter
    - Filter by continent. When this filter is active, the filter by subregion should be cleared
    - Filter by subregion. When this filter is active, the filter by continent should be cleared
    - Top 10. This will display only the top 10 countries either by population or area
    - Sort alphabetically
    */}
  {/** todo
    fix language
    */}
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState('idle');
  const isLoading = status === 'loading';
  const isError = status === 'error';

  async function fetchData(url) {
    let response, data;
    try{
      setStatus('loading');
      response = await fetch(url);
      data = await response.json();
      setCountries(data);
      setStatus('idle');
      console.log(countries);
    } catch (e) {
      setStatus('error');
      console.log(e.message);
    }
  }
  return (
    <>
      <h1>Countries of the World</h1>
      <div>
        <button onClick={() => fetchData("https://restcountries.com/v3.1/all")}>click</button>
        <h3>Filter & sort</h3>
        <div className='filtersContainer'>
          <div className='singleFilterContainer'>
            <div>
              <input type="checkbox" id="alpha" name="alpha" value="alpha" />
              <label for="alpha">Alpha</label>
            </div>
          </div>
          <div className='singleFilterContainer'>
          <label for="cars">Top 10</label>
            <div>
              <input type="checkbox" id="population" name="population" value="population" />
              <label for="population">by population</label>
            </div>
            <div>  
              <input type="checkbox" id="area" name="area" value="area" />
              <label for="area">by area</label>
            </div>
          </div>
          <div className='singleFilterContainer'>
            <label for="continent">By continent</label>
            <select name="continent" id="continent">
              <option value="all">All</option>
              <option value="antarctica">Antarctica</option>
              <option value="northAmerica">North America</option>
              <option value="rurope">Europe</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="oceania">Oceania</option>
              <option value="southAmerica">South America</option>
            </select>
          </div>
          <div className='singleFilterContainer'>
            <label for="subregion">By subregion</label>
            <select name="subregion" id="subregion">
              <option value="chooseRegion">Choose region</option>
              <option value="caribbean">Caribbean</option>
              <option value="northAmerica">Western Europe</option>
              {/* <option value="rurope">Western Africa</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="oceania">Oceania</option>
              <option value="southAmerica">South America</option> */}
            </select>
          </div>
        </div>
      </div>
      <Countries data={countries} />
    </>
  )
}

export default App
