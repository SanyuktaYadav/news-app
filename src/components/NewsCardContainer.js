import { useEffect, useState } from "react";
import NewsCards from "./NewsCards";

const NewsCardContainer = ({ searchText }) => {
  const fetchData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?apiKey=30971b94d1424bb0819ded28883a569b&q=" +
        searchText || "cricket"
    );

    const json = await data.json();
    console.log(json);
    setNewsInfo(json.articles);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  console.log(searchText);

  const [newsInfo, setNewsInfo] = useState([]);

  return (
    <>
      <h1>{searchText}</h1>
      <div className="news-card-container">
        <NewsCards newsInfo={newsInfo} />
      </div>
    </>
  );
};

export default NewsCardContainer;
