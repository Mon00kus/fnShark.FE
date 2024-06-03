import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Search from './components/Serarch/Search';
import CardList from './components/CardList/CardList';
import { CompanySearch } from './company';
import { searchCompanies } from './Api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }
  
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
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
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