import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react';


const Newsapp = () => {

  const [search , setSearch]= useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "6ebf3cff513d42daa9f128057c9a2286"

  const getData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  }

  useEffect(()=>{
    getData()
  },[])

  const handleInput=(e)=>{
    console.log(e.target.value);  
    setSearch(e.target.value);
  }

  const userInput =(event)=>{
    setSearch(event.target.value)
  }

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>trending</a>
        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Update Trendy News</p>
      </div>
      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertaiment">Enteraiment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>
      <div>
        {newsData? <Card data={newsData}/> : null}
        
      </div>
    </div>
  )
}

export default Newsapp
