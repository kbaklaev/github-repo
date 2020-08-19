import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Markdown from 'markdown-to-jsx'

const Readme = ({ username, repository }) => {
  const [readme, setReadme] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    Axios.get(`https://api.github.com/repos/${username}/${repository}/readme`)
      .then(data => setReadme(data.data.content))
      .catch(error => {
        error.response.status === 404
          ? setError(true)
          : console.log(error)
      })
  }, [username, repository])

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="flex items-center border-b border-teal-500 py-2">
        <h1
          id="repository-name"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        >
          {`${username} - ${repository}`}
        </h1>
        <Link
          id="go-back"
          to="/"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Go Home
        </Link>&nbsp;
        <Link
          id="go-repository-list"
          to={`/${username}`}
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Go Back
        </Link>
      </header>
      <div
        id="description"
        className="w-auto p-4 overflow-y-auto"
      >
        {
          error && (
            <div className="font-bold text-center text-gray-700">
              Readme file is empty or does not exist
            </div>
          )
        }
        {
          readme && (
            <Markdown className="p-4 bg-teal-100 rounded">
              {atob(readme)}
            </Markdown>
          )
        }
      </div>
    </div>
  )
}

export default Readme