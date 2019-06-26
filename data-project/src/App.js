import React from 'react';
import 'react-vis/dist/style.css';
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/'
import routes from './routes'
import './App.css';





function App() {
  return (
    <Provider store={store}>
        <Router>
          <AppNavbar />
          {routes.map((element, index) => <Route key={index} path={element.path} exact={element.exact} component={element.getComponent} />)}
        </Router>
        <AppFooter />
    </Provider>
  );
}



export default App;
