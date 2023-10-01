import React from "react";

const NewsCards = ({ newsInfo }) => {
  console.log("newsInfo = ", newsInfo);

  if(!newsInfo) {
    return <h1> Search for news topic!</h1>
  }
  return (
    <>
      {newsInfo.map((news) => (
        <div className="news-card">
          <h3>{news?.title}</h3>
          <a href={news?.url}>Link</a>
          <br />
          <img className="news-image" src={news?.urlToImage} alt="" />
        </div>
      ))}
    </>
  );
};

export default NewsCards;
