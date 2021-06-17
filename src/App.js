import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './component/Users';
import Home from './component/Home';
import About from './component/About';
import ErrorBoundary from './component/ErrorBoundary';
import ClickConter from './component/ClickCounter';
import HoverConuter from './component/HoverCounter';
import FormComponent from './component/form';

function App() {
    return (
        <Router>
            <div className="App">
                <ClickConter />
                <HoverConuter />
                <nav>
                    <ul>
                        <li>
                            <Link to="/Users">Users</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
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
                    <Route path="/form">
                        <FormComponent />
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
