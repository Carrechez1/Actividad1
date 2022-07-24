import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./json/quotes.json";
import color from "./utils/color";

function App() {
  const getRandomEl = (arr) => {
    const iRandom = Math.floor(Math.random() * arr.length);
    return arr[iRandom];
  };

  let randomQuote = getRandomEl(quotes);
  let randomColor = getRandomEl(color);
  const [quoteRandom, setQuoteRandom] = useState(randomQuote);
  const [colorRandom, setColorRandom] = useState(randomColor);
  const objBgStyle = {
    backgroundColor: colorRandom,
  };
  const getRandomAll = () => {
    randomQuote = getRandomEl(quotes);
    randomColor = getRandomEl(color);
    setQuoteRandom(randomQuote);
    setColorRandom(randomColor);
  };
  return (
    <div style={objBgStyle} className="App">
      <QuoteBox
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        getRandomAll={getRandomAll}
      />
    </div>
  );
}

export default App;
