import axios from "axios"
import { useEffect, useState } from "react";
import './App.css';

function App() {
  // const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState("")
  const [color, setColor] = useState("")

  const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];


  useEffect(() => {
    getQuote()
    getColor()
  }, [])
  
  const getQuote = async () => {
      try {
        const res = await axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        let quotes = res.data.quotes
        let rd = Math.floor(Math.random() * quotes.length)
        let randomQuote = quotes[rd]
        setQuote(randomQuote)
        
      } catch (error) {
        console.log(error)
      }
  }

  const getColor = () => {
    let rd = Math.floor(Math.random() * colors.length)
    setColor(colors[rd])
  }
  
  const onClick = () => {
    getColor()
    getQuote()
  }

  
  
  return (
    <div className="app" style={{backgroundColor: `${color}`}}>
      <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left" style={{color: `${color}`}}></i><span id="text" style={{color: `${color}`}}>{quote.quote}</span>
          </div>

          <div className='quote-author'>
            - <span id="author">{quote.author}</span>
          </div>
            
          <div className="quote-buttons" >
            <a href="" className="button" id="tumblr-quote" style={{backgroundColor: `${color}`}}><i className="fa fa-twitter"></i></a>
            <button className="button" id="new-quote" onClick={onClick} style={{backgroundColor: `${color}`}}>New quote</button>
          </div>
   
      </div>
    </div>
  );
}

export default App;
