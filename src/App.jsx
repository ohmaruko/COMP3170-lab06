import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [status, setStatus] = useState('idle');
  const isLoading = status === 'loading';
  const isError = status === 'error';

  const [sortAlpha, setSortAlpha] = useState(false);
  const [sortTop10Population, setSortTop10Population] = useState(false);
  const [sortTop10Area, setSortTop10Area] = useState(false);
  const [filterContinent, setFilterContinent] = useState('all');
  const [filterSubregion, setFilterSubregion] = useState('Choose region');

  const subregions = ['Choose region', 'Caribbean', 'Western Europe', 'Western Africa', 'Central Europe', 'Eastern Asia', 'Polynesia', 
    'Northern Africa', 'Southern Europe', 'South-Eastern Asia', 'Eastern Africa', 'Southern Africa', 'North America',
    'Middle Africa', 'Micronesia', 'Southeast Europe', 'Western Asia', 'Northern Europe', 'Melanesia', 'Central Asia',
    'Southern Asia', 'South America', 'Australia and New Zealand', 'Central America', 'Eastern Europe'
  ]
  const continents = ['all', 'Antarctica', 'North America', 'Europe', 'Africa', 'Asia', 'Oceania', 'South America']

  // fetching data
  const fetchData = async () => {
    let response, data;
    const API_URL = "https://restcountries.com/v3.1/all";
    try{
      setStatus('loading');
      response = await fetch(API_URL);
      data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setStatus('idle');
      console.log(countries);
    } catch (e) {
      setStatus('error');
      console.log(e.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  // sorting and filtering
  useEffect(() => {
    let filteredData =  [...countries];
    if (filterContinent !== 'all') {
      filteredData = filteredData.filter(country => country.continents?.[0]?.toLowerCase() === filterContinent.toLowerCase());
    }
    if(filterSubregion !== 'Choose region') {
      filteredData = filteredData.filter(country => country.subregion?.toLowerCase() === filterSubregion.toLowerCase());
    }
    
    if(sortTop10Population) {
      filteredData = filteredData.sort((a, b) => b.population - a.population).slice(0, 10);
    }
    if(sortTop10Area) {
      filteredData = filteredData.sort((a, b) => b.area - a.area).slice(0, 10);
    }
    if(sortAlpha) {
      filteredData = filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }
    setFilteredCountries(filteredData);
  }, [filterContinent, filterSubregion, sortTop10Population, sortTop10Area, sortAlpha])

  return (
    <>
      <h1>Countries of the World</h1>
      <div>
        <h3>Filter & sort</h3>
        <div className='filtersContainer'>
          <div className='singleFilterContainer'>
            <div>
              <input type="checkbox" id="alpha" name="alpha" value="alpha" checked={sortAlpha} 
                onChange={() => setSortAlpha(!sortAlpha)}
                />
              <label for="alpha">Alpha</label>
            </div>
          </div>
          <div className='singleFilterContainer'>
          <label for="cars">Top 10</label>
            <div>
              <input type="checkbox" id="population" name="population" value="population" checked={sortTop10Population} 
                onChange={() => {
                  setSortTop10Population(!sortTop10Population);
                  setSortTop10Area(false);
                }}
                />
              <label for="population">by population</label>
            </div>
            <div>  
              <input type="checkbox" id="area" name="area" value="area" checked={sortTop10Area} 
                onChange={() => {
                  setSortTop10Area(!sortTop10Area);
                  setSortTop10Population(false);
                }}
                />
              <label for="area">by area</label>
            </div>
          </div>
          <div className='singleFilterContainer'>
            <label for="continent">By continent</label>
            <select name="continent" id="continent" value={filterContinent} 
              onChange={(e) => {
                setFilterContinent(e.target.value);
                setFilterSubregion('Choose region');
              }}
              >
              {
                continents.map( (continent, index) => {
                  return(
                    <option key={index} value={continent}>{continent}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='singleFilterContainer'>
            <label for="subregion">By subregion</label>
            <select name="subregion" id="subregion" value={filterSubregion} 
              onChange={(e) => {
                setFilterSubregion(e.target.value);
                setFilterContinent('all');
              }}>
              {
                subregions.map( (subregion, index) => {
                  return(
                    <option key={index} value={subregion}>{subregion}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
      {isLoading && <p>Loading . 🏃. 🏃. 🏃</p>}
      {isError && <p>Error while loading data 😔 😔 😔</p>}
      <Countries data={filteredCountries} />
    </>
  )
}

export default App
