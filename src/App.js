import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';
import AuthProvider from './Context/AuthProvider';
import About from './components/About/About';
import PrivetRouter from './components/PrivetRouter/PrivetRouter';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import ServiceDetiles from './components/ServiceDetiles/ServiceDetiles';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path ='/about'>
        <About></About>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <PrivetRouter exact path="/service">
        <Services></Services>
      </PrivetRouter>
      <Route exact path="/regester">
        <Regester></Regester>
      </Route>
      <Route exact path="/contact">
        <Contact></Contact>
      </Route>
      <Route exact path="/service/:serviceId">
        <ServiceDetiles></ServiceDetiles>
      </Route>

      <Route exact path="*">
        <NotFound></NotFound>
      </Route>
      
      </Switch>
      <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
