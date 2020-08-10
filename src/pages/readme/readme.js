import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Markdown from 'markdown-to-jsx'

const Readme = ({ username, repository }) => {
  const [readme, setReadme] = useState('')

  useEffect(() => {
    Axios.get(`https://api.github.com/repos/${username}/${repository}/readme`)
      .then(data => setReadme(data.data.content))
      .catch(error => {throw error})
  }, [username, repository])

  return (
    <>
      <header>
        <h1 id="repository-name">
          {`${username} ${repository}`}
        </h1>
        <Link
          id="go-back"
          to="/"
        >
          Go Home
        </Link>&nbsp;
        <Link
          id="go-repository-list"
          to={`/${username}`}
        >
          Go Back
        </Link>
      </header>
      <div id="description">
        <Markdown>
          {atob(readme)}
        </Markdown>
      </div>
    </>
  )
}

export default Readme