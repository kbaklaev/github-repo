import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { addRepositories, clearRepositories, addPage, fetchCompliteAction } from '../../redux/actions'

const Repositories = ({ username, repository }) => {
  const repositories = useSelector(state => state.repositories)
  const page = useSelector(state => state.fetchPage)
  const fetchComplite = useSelector(state => state.fetchComplite)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchComplite === false) {
      Axios.get(`https://api.github.com/users/${username}/repos?page=${page}`)
      .then(data => {
        dispatch(addRepositories(data.data))
        data.data.length === 30
          ? dispatch(addPage())
          : dispatch(fetchCompliteAction())
      })
      .catch((error) => {throw error})
    }
  }, [username, page, dispatch, fetchComplite])

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
          onClick={() => dispatch(clearRepositories())}
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