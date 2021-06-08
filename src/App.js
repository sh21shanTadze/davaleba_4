import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Users from './component/Users';
import ErrorBoundary from './component/ErrorBoundary';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About name="Shavleg" />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <ErrorBoundary>
                            <Home />
                        </ErrorBoundary>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
