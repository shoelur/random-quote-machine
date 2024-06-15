import React, { useState } from 'react'
import './RandomQuote.css'

export const RandomQuote = () => {

let quotes = [];

async function loadQuotes() {
  const response = await fetch("https://type.fit/api/quotes");
  quotes = await response.json();
}

const random = () => {
  const select = quotes[Math.floor(Math.random() * quotes.length)];
  setQuote(select);
}

  const [quote,setQuote] = useState({
    text: "Success didn't spoil me, I've always been insufferable.",
    author: "Fran Lebowitz"
  });

  loadQuotes();

  return (
    <div id='quote-box'>
        <div id='text'>{quote.text}</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div id="author">{quote.author.split(', ')[0]}</div>
            <div className="buttonDiv">
              <a id="new-quote" onClick={()=>{random()}}>New Quote</a>
              <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Share</a>
            </div>
          </div>
        </div>
    </div>
  )
}
