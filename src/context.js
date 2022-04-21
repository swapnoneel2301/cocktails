import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(false);
  const [cocktails,setCocktails] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const fetchCocktails = async()=>{
     setLoading(true);
     try{
       const resp = await fetch(`${url}${searchTerm}`);
       const data = await resp.json();
       if(data.drinks){
         setCocktails(data.drinks);
       }else{
        setCocktails([]);
       }
       setLoading(false);
     }catch(error){
       console.log(error);
       setLoading(false);
     }
  }
  useEffect(()=>{
     fetchCocktails();
  },[searchTerm]);
    
  return <AppContext.Provider value={{
    loading,
    cocktails,
    searchTerm,
    setSearchTerm
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
