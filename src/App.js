import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/test" >About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact/test">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/about/:name" exact={true} component={About} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/contact/:name/:firstname" exact={true} component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
