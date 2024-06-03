
import React, { SyntheticEvent }  from "react";
import "./Card.css"
import { CompanySearch } from "../../company";
import AddPortFolio from "../Portfolio/AddPortFolio/AddPortFolio";

interface Props  {
  /* companyName: string;
  ticker : string;
  price: number; */
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void; 
}

const card: React.FC<Props> = ({
   id, 
   searchResult,
   onPortfolioCreate /* companyName, ticker, price */
  }: Props): JSX.Element => {
      return (
        <div className="card">
          <img alt="company logo"/>
          <div className="details">
            <h2>{searchResult.name}({searchResult.symbol})</h2>
              <p>${searchResult.currency}</p>
          </div>
          <p className='info'>
               {searchResult.exchangeShortName} - {searchResult.stockExchange}
          </p>
          <AddPortFolio
              onPortFolioCreate={onPortfolioCreate}
              symbol={searchResult.symbol}
          />
        </div>        
      );
      /*<div className='flex flex-text-box'>
          { <img src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imag"/>
            <div className='details'>
                <h2>{companyName}({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className='info'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus enim illum libero, atque ut? Eaque tenetur nemo exercitationem quae repellendus ex, incidunt amet reprehenderit voluptate voluptatem quis, tempora quidem.
            </p> 
      </div> }*/         
  }

export default card;