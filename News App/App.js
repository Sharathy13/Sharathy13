
import './App.css';
import { useEffect, useState } from 'react'
import News from './News';

function App() {

  let [articles, setArticles] = useState([]);

  let [category, setCategory] = useState("india")


  //api call
  useEffect(() => { 
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=04a9a928f42849bb80bf275ad0fdfb46`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="App">
      <header className='header'>
        <h1>Today's Talk</h1>
        <input type='text' onChange={(event) => {
          if (event.target.value !== "") {
            setCategory(event.target.value)
          }
          else {
            setCategory("india")

          }
        }} placeholder='search-box'></input>
      </header>
      <section className='news-articles'>
        {

          articles.length != 0 ?
            articles.map((article) => {
              return (
                <News article={article} />  //passing the articles as a prop
              )
            })
            :
            <h3>No News Found for searched text</h3>
        }
      </section>

    </div>
  )
}

export default App;
