import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/HomePage";
import PageNotFound from "./pages/PageNotFound";
import SingleCharacterPage from "./pages/single-character/SingleCharacterPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/character/:id" component={SingleCharacterPage} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
