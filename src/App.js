import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/restaurantDetails/:id" component={RestaurantDetails} />
        </Container>
        {/* <Footer/> */}
      </div>
    </Router>

  );
}

export default App;
