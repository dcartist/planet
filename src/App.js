import React, {useState}from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import GlobalStyle from './GlobalStyles';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Beginner from './Pages/Beginner';
import Intermediate from './Pages/Intermediate'
import Contact from './Pages/Contact'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <div>
      {/* <GlobalStyle /> */}
      {/* <Navbar toggle={toggle} /> */}
      test
      {/* <DropDown isOpen={isOpen} toggle={toggle} /> */}
              {/* <Route path="/" exact component={Home}/> */}
        {/* <Route path="/about" exact component={About}/> */}
        {/* <Route path="/beginner" exact component={Beginner}/> */}
        {/* <Route path="/intermediate" exact component={Intermediate}/> */}
        {/* <Route path="/contact" exact component={Contact}/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
