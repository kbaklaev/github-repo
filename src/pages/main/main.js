import React, { useState } from "react";

const Main = ({ username }) => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    username(inputValue);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      username(inputValue);
    }
  };

  return (
    <>
      <form className="w-full">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            id="input-field"
            type="text"
            placeholder="enter the username"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            value={inputValue}
            onChange={(e) => changeInputValue(e)}
            onKeyDown={(e) => onKeyDown(e)}
          />
          <button
            id="search-button"
            type="button"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            onClick={handleClick}
          >
            Get Repositories
          </button>
        </div>
      </form>
    </>
  );
};

export default Main;
