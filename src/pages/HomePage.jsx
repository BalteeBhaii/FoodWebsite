import React, { useEffect } from 'react'
import Header from "./../components/Header";
import CardList from "./../components/CardList";
import useFetchRecipes from '../hooks/useFetchRecipes';
import Loading from '../components/Loading';

const  HomePage = () => {
  const [fetchRecipes, {data, loading, error}] = useFetchRecipes()
  useEffect(() => {
    fetchRecipes()
  },[])
  
  const handleSearch = (searchTerm ) => {
    if(searchTerm){
      fetchRecipes(searchTerm)
    }
  }

  return (
    <>
        <Header handleSearch={handleSearch}/>
        { loading && <Loading/>  }
        { data && <CardList recipes={data}/>}
        { error && <p>{error}</p>}
     </>

  ) 
}

export default HomePage