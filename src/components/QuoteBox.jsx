import React from "react";
import Button from "./Button";

const QuoteBox = ({ quoteRandom, colorRandom, getRandomAll }) => {
  let { author, quote } = quoteRandom;
  const objColStyle = {
    color: colorRandom,
  };

  return (
    <article style={objColStyle}>
      <div className="card">
        <div className="quote">
          <i className="bx bxs-quote-left quotation"></i>
          <blockquote className="mar">{quote}</blockquote>
        </div>
        <div>
          <cite className="cite">{author}</cite>
        </div>
        <div>
          <Button colorRandom={colorRandom} getRandomAll={getRandomAll} />
        </div>
      </div>
    </article>
  );
};

export default QuoteBox;
