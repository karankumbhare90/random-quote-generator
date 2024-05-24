import React, { useState } from 'react'
import reload from '../Assets/reload.png'
import twitter from '../Assets/twitter.png'
import './RandomQuote.css'
import { MdRefresh } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const RandomQuote = () => {
    let quotes = [];

    
    const [quote, setQuote] = useState({
        text : "Difficulties increase the nearer we got to the real",
        author : "Karan Kumbhare"
    })

    const loadQuote = async () => {
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitterPost = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuote();
  return (
    <div className='container'>
        <div className="quote">"{quote.text}"</div>
        <div className="line"></div>
            <div className="bottom">
                <div className="icons">
                    <MdRefresh
                        className='refresh'
                        onClick={()=>{random()}}
                    />
                    <FaXTwitter
                        className='twitter'
                        onClick={()=>{twitterPost()}}
                    />
                </div>
                <div className="author">
                    ~ {quote.author.split(',')[0]}
                </div>
            </div>
    </div>
  )
}

export default RandomQuote
