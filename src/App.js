import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/layout/navbar.component';
import Dashboard from './components/dashboard/dashboard.component';
import ProjectDetails from './components/projects/project-details.component';
import SignIn from './components/auth/sign-in.component';
import SignUp from './components/auth/sign-up.component';
import CreateProject from './components/projects/create-project.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
      </Switch>
    </div>
  );
}

export default App;