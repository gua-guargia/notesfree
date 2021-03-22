import './App.css';
import Homepage from "./components/homepage";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MeetingPage from "./components/meetingPage";
import ReviewPage from "./components/reviewPage";
import KeywordPage from "./components/keywordPage";
import SummaryPage from "./components/summaryPage";
import PieChartPage from "./components/pieChartPage";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/meeting">Start Meeting</Link>
                        </li>
                        <li>
                            <Link to="/review">Review</Link>
                        </li>
                        <li>
                            <Link to="/keyword">Keyword</Link>
                        </li>
                        <li>
                            <Link to="/summary">Summary</Link>
                        </li>
                        <li>
                            <Link to="/pieChart">Pie Chart</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/meeting" component={MeetingPage}/>
                    <Route path="/review" component={ReviewPage}/>
                    <Route path="/keyword" component={KeywordPage}/>
                    <Route path="/summary" component={SummaryPage}/>
                    <Route path="/pieChart" component={PieChartPage}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
