import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; import './App.css';
import initializeAuthentication from './components/Login/Firebase/firebase.init';
import Login from './components/Login/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Todo from './components/Todo/Todo';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Todo></Todo>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
