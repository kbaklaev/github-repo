import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Repositories = ({ username, repository }) => {
  const [repositories, setRepositories] = useState([])

  // TODO fetch with pages
  // const [fetchComplite, setFetchComplite] = useState(false)

  // const fetchRepositories = useCallback(async (page) => {
  //   await Axios.get(`https://api.github.com/users/${username}/repos?page=${page}`)
  //     .then(data => setRepositories([ ...repositories, ...data.data ]))
  //     .catch((error) => {throw error})
  // }, [repositories])

  // useEffect(() => {
  //   let page = 0
  //   fetchRepositories(page += 1)
  //   // while (fetchComplite === false) {
  //   //   console.log('run while')
  //   //   if (repositories.length === 0 || ) {

  //   //   }
  //   //   // repositories.length || repositories.length === 24
  //   //   //   ? console.log('run fetch') //fetchRepositories(page += 1)
  //   //   //   : setFetchComplite(true)
  //   // }
  // }, [fetchRepositories, username])

  useEffect(() => {
    Axios.get(`https://api.github.com/users/${username}/repos`)
      .then(data => setRepositories(data.data))
      .catch((error) => {throw error})
  }, [username])

  return (
    <>
      <header className="flex items-center border-b border-teal-500 py-2">
        <h1
          id="user-name"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        >
          {username}
        </h1>
        <Link
          id="go-back"
          to="/"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Go Back
        </Link>
      </header>
      <div className="p-4">
        {
          !!repositories.length && (
            <ul className="list-disc list-inside bg-teal-100 rounded p-4">
              {
                repositories.map(rep => (
                  <li key={rep.id}>
                    <Link
                      className="text-gray-500 hover:text-gray-900"
                      onClick={() => repository(rep.name)}
                      to={`/${username}/${rep.name}`}
                    >
                      {rep.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </>
  )
}

export default Repositories