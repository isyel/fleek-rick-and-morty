import { Route, Router, Switch } from "react-router";

import "./App.css";
import Home from "./pages/home/HomePage";
import SingleCharacterPage from "./pages/single-character/SingleCharacterPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/character/:id" component={SingleCharacterPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
