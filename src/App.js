
import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProDetail from './pages/ProDetail';
import Shop from './pages/Shop';
import Header from './components/Header/Header';
import {Provider} from 'react-redux';
import store from './Redux/store.jsx';
import Footer from './components/FullBanner/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
     <BrowserRouter>
     <Header/>
     <Switch>
    
       <Route path='/'  exact component={Home}/>
       <Route path='/about'  exact component={About}/>
       <Route path='/shop'  exact component={Shop}/>
       <Route path='/contact'  exact component={Contact}/>
       <Route path='/cart'  exact component={Cart}/>
       <Route path='/product/:pid'  exact component={ProDetail}/>

     </Switch>
   <Footer/>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
