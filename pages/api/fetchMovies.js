import { useState } from 'react'

async function fetchMovies(name,year) {
    

    try {
      
      const res = await fetch(`https://www.omdbapi.com/?apikey=fccd414a&s=${name}&y=${year}`);
      const data = await res.json();
     
      return data;
    } catch (error) {
      return [{ Title: "error" }];
    }
}




  
export default  fetchMovies 