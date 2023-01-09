import { createContext, useContext, useEffect, useState } from "react";

const serachProvider = createContext('')

function SearchProvider({children}){
  const [search, setSearch] = useState('')
  
  function searchMovie(movie){
    setSearch(movie)
  }
  
  return(
    <serachProvider.Provider value={{searchMovie, search}}>
      {children}
    </serachProvider.Provider>
  )
}

function useSearch(){
  const context = useContext(serachProvider)
  return context
}
export {useSearch, SearchProvider}