import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Events from "./components/Event";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="user-and-events">
          <Users />
          <Events />
        </div>

        {/* <DeleteUser /> */}
        {/* deleteEvent */}
        {/* findEvent */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
