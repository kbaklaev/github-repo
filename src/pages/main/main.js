import React, { useState } from 'react'

const Main = ({ username }) => {
  const [inputValue, setInputValue] = useState('')

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    username(inputValue)
  }

  return (
    <>
      <form>
        <input
          id="input-field"
          type="text"
          placeholder="enter the username"
          value={inputValue}
          onChange={e => changeInputValue(e)}
        />
        <button
          id="search-button"
          type="button"
          onClick={handleClick}
        >
          Get Repositories
        </button>
      </form>
    </>
  )
}

export default Main
