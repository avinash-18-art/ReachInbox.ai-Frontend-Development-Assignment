import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/LoginPage'
import OneBox from './pages/OneBox'
import Profile from './pages/Profile' // Example page
import Settings from './pages/Settings' // Example page
import {isAuthenticated} from './services/auth'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path="/onebox" component={OneBox} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/settings" component={Settings} />
              <Redirect from="/" to="/login" />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default App
