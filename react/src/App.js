import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Events from "./components/Events";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Users</Link>
              </li>
              <li>
                <Link to="/events">Event</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        </div>

        <Header />
        <main>
          <div className="user-and-events">
            <Switch>
              <Route path="/">
                <Users />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
            </Switch>
            {/* <Users />*/}
            <Events />
          </div>

          {/* <DeleteUser /> */}
          {/* deleteEvent */}
          {/* findEvent */}
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

//https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb
