import React from 'react';
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'
import AppLandingPage from './components/AppLandingPage'
import AppEsperimento from './components/AppEsperimento'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';

const routes = [
  {
    path: '/',
    exact: true,
    getComponent: () => <AppLandingPage/>
  },
  {
    path: '/esperimento',
    exact: false,
    getComponent: () => <AppEsperimento/>
  }
]



function App() {
  return (
    <div className="App">
      
      <Router>
        <AppNavbar/>
        { routes.map( (element, index) => <Route key={index} path={element.path} exact={element.exact} component={element.getComponent}/>)}
      </Router>

      <AppFooter/>
    </div>
  );
}



export default App;
