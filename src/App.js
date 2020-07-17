// import React from 'react';
// import './App.css';
// import Nav from './components/Nav';
// import Home from './components/Home'

// function App() {
//   return (
//     <div className="App">
//       <Nav/>
//       <Home />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
// import Shop from './components/Shop';
import Research from './components/Research';
import Home from './components/Home';
import CV from './components/CV';
import Teaching from './components/Teaching'
import Dog from './components/Dog'


function App() {
  return (
    <Router>
      {/* <Container style={{ position: 'relative', padding: 0 }} maxWidth="lg"> */}
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cv" exact component={CV} />
          <Route
            path="/papers"
            component={Research}
          />
          <Route
            path="/teaching"
            component={Teaching}
          />
          <Route
            path="/dog"
            component={Dog}
          />
        </Switch>
        {/* <footer style={{"textAlign":"center", "color":"grey", "paddingBottom":"20px"}}>
          Daniel Drucker, 2020
            <br/>
          <a href="mailto:drucker@texas.edu">drucker@utexas.edu</a>

        </footer> */}
      {/* </Container> */}
    </Router>
  );
}
export default App;
