import { useState } from "react";
import NewsCardContainer from "./NewsCardContainer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <input
        type="text"
        value={searchText}
        className="border"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <NewsCardContainer searchText={searchText} />;
    </>
  );
};

export default Body;
