import { useState } from "react";
import searchImage from "../assets/Images/Icons_and_logos/search.svg";
import listImage from "../assets/Images/Icons_and_logos/list.svg";

export default function Header() {
  const [inputValue, setinputValue] = useState("");

  const onChangesearchInputFunctionOfHeader = (typedValue: any) => {
    setinputValue(typedValue.target.value);
  };

  const onChangesearchButtonFunctionOfHeader = (searchTerm: any) => {
    console.log(searchTerm);
  };

  return (
    <>
      <nav className="navOfHeader">
        <div className="navMenuOfHeader">
          <img className="listImageMenuOfHeader" src={listImage} alt="list-image" />
        </div>
        <div className="logoOfHeader">
          <h3>Logo</h3>
        </div>
        <div className="searchOfHeader">
          <input
            className="searchInput"
            type="text"
            onChange={onChangesearchInputFunctionOfHeader}
          />
          <button
            className="searchButton"
            onClick={onChangesearchButtonFunctionOfHeader}
          >
            <img className="searchLogo" src={searchImage} alt="search-logo" />
          </button>
          <div className="searchResult">{inputValue}</div>
        </div>
      </nav>
    </>
  );
}
