import axios from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";
import { Console } from "console";


interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(          
          `https://financialmodelingprep.com/api/v3/search-name?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );                        
        return data;
    }catch(error){
        if (axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            return error.message
        }else{
            console.log("unexpeted error: ", error);
            return "An unexpected error has ocurred";
        };
    };
}

export const getCompanyProfile = async (query: string) => {
    try {
      const data = await axios.get<CompanyProfile[]>(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    }catch(error: any){
        console.log("Error message from API:", error.message);
    };
};

export const getKeyMetrics = async (query: string) => {
    try {
      console.log(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
      const data = await axios.get<CompanyKeyMetrics[]>(        
        `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    }catch(error: any){
        console.log("Error message from API:", error.message);
    };
};