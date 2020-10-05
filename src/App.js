import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VolunteerRegister from './Components/VolunteerRegister/VolunteerRegister';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import EventList from './Components/EventList/EventList';
import Admin from './Components/Admin/Admin';

export const EventContext = createContext();
export const UserContext = createContext();
export const MatchedItem = createContext();

function App() {
  const [event, setEvent] = useState('');
  const [loggedInUser, setLoggedInUser] = useState({});
  const [matchedItem, setMatchItem] = useState({});
  return (
    <EventContext.Provider value={[event, setEvent]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <MatchedItem.Provider value={[matchedItem, setMatchItem]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/volunteerRegistration">
              <VolunteerRegister></VolunteerRegister>
            </PrivateRoute>

            <PrivateRoute path="/eventList">
              <EventList></EventList>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
          </Switch>
        </Router>
        </MatchedItem.Provider>
      </UserContext.Provider>
    </EventContext.Provider>
  );
}

export default App;
