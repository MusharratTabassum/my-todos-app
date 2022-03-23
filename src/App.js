import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; import './App.css';
import Home from './components/Home/Home';
import initializeAuthentication from './components/Login/Firebase/firebase.init';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Registration from './components/Login/Registration/Registration';
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
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/mytodos">  <Todo></Todo></PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
