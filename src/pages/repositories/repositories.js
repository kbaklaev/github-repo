import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useDispatch, useStore, useSelector } from 'react-redux'

const Repositories = ({ username, repository }) => {
  const store = useStore()
  const repositories = useSelector(state => state)
  const [fetchPage, setFetchPage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get(`https://api.github.com/users/${username}/repos?page=${fetchPage}`)
      .then(data => {
        dispatch({ type: 'ADD_REPOSITORIES', payload: data.data })
        console.log(store.getState())
        if (data.data.length === 30) setFetchPage(fetchPage + 1)
      })
      .catch((error) => {throw error})
  }, [username, fetchPage, dispatch, store])

  return (
    <div className="flex flex-col h-full overflow-hidden">
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
      <div className="p-4 w-auto overflow-y-auto">
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
    </div>
  )
}

export default Repositories