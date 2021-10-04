import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
        <Hero></Hero>
        <Services></Services>
        </Route>
        <Route path='/service'>
        <Services></Services>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
