import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Repositories = ({ username, repository }) => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    Axios.get(`https://api.github.com/users/${username}/repos`)
      .then(data => setRepositories(data.data))
      .catch((error) => {throw error})
  }, [username])

  return (
    <>
      <header>
        <h1 id="user-name">
          {username}
        </h1>
        <Link
          id="go-back"
          to="/"
        >
          Go Back
        </Link>
      </header>
      <div>
        <ul>
          {
            repositories.map(rep => (
              <li key={rep.id}>
                <Link
                  onClick={() => repository(rep.name)}
                  to={`/${username}/${rep.name}`}
                >
                  {rep.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Repositories