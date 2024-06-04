import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { CompanySearch } from './company';
import { searchCompanies } from './Api';
import ListPortfolio from './components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onPortfolioCreate = (e: any /* SyntheticEvent */) => {
    e.preventDefault();
    const exists = portfolioValues.find((value)=> value===e.target[0].value)
    if (exists) return;
    /* console.log(e); */
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value)=>{
      return value !== e.target[0].value;
    })
    setPortfolioValues(removed);
  };
  
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result==="string"){
      setServerError(result);      
    }else if (Array.isArray(result.data)){
      setSearchResult(result.data);            
    }
    /* console.log(searchResult); */
  };

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Search 
          onSearchSubmit={onSearchSubmit} 
          search={search} 
          handleSearchChange={handleSearchChange}
       />
      <ListPortfolio 
          portfolioValues={portfolioValues} 
          onPortfolioDelete={onPortfolioDelete}/>
      <CardList 
          searchResults={searchResult} 
          onPortfolioCreate={onPortfolioCreate}
       />
      {serverError && <h1>{ serverError }</h1>}
      {/* <CardList /> */}
    </div>
  );
}

export default App;