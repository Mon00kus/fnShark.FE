import axios from "axios";
import { CompanySearch } from "./company";


interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(          
          `https://financialmodelingprep.com/api/v3/search-name?query=${query}&limit=10&exchange=NASDAQ&apikey=${'2bDLNutIiJ9w7Ea8nTgcLLAMV3hXRZDY'}`
        );                
        return data;
    }catch(error){
        if (axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            return error.message
        }else{
            console.log("unexpeted error: ", error);
            return "An unexpected error has ocurred";
        }
    }
}