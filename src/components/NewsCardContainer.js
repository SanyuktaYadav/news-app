import { useEffect, useState } from "react";
import NewsCards from "./NewsCards";

const NewsCardContainer = ({ searchText }) => {
  const [newsInfo, setNewsInfo] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?apiKey=30971b94d1424bb0819ded28883a569b&q=" +
        searchText || "cricket"
    );

    const json = await data.json();
    // console.log(json);
    setNewsInfo(json.articles);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  return (
    <>
      <h1 className="news-card-headline">{searchText}</h1>
      <div className="news-card-container">
        <NewsCards newsInfo={newsInfo} />
      </div>
    </>
  )
};

export default NewsCardContainer;
