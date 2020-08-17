import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

import Main from './pages/main/main';
import Repositories from './pages/repositories/repositories';
import Readme from './pages/readme/readme';

function App() {
  const [userName, setUserName] = useState('')
  const [repository, setRepository] = useState('')
  let history = useHistory()

  const getUsername = (text) => {
    // console.log(text)
    setUserName(text)
    history.push(`/${text}`)
  }

  const getRepository = (rep) => {
    // console.log(rep)
    setRepository(rep)
    history.push(`/${userName}/${rep}`)
  }

  return (
    <div className="container mx-auto p-4 w-full h-screen">
      <Switch>
        <Route exact path="/">
          <Main username={getUsername} />
        </Route>
        <Route exact path="/:userName">
          <Repositories username={userName} repository={getRepository} />
        </Route>
        <Route path="/:userName/:repositoryName">
          <Readme username={userName} repository={repository} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
