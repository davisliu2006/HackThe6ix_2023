import './App.css';
import Home from './Components/Home'
import ContactsPage from './Components/ContactsPage';
import PaymentsPage from './Components/PaymentsPage';
import NavBar from '../src/Components/NavBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

  return (

    <Router>
      <div>
      <NavBar />
      <div>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/payments">
            <PaymentsPage/>
          </Route>
          <Route path = "/contacts">
            <ContactsPage/>
          </Route>
        </Switch>
      </div>
      {/* <Home/> */}
    </div>
    </Router>

  );
  }

  export default App;
