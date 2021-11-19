import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNav from "./partials/MainNav";
import ClothingSection from "./partials/ClothingSection";
import Error from "./partials/Error";

function App() {
	return (
		<div className="App">
			<Router>
				<MainNav />
				<Switch>
					<Route path="/error">
						<Error />
					</Route>
					<Route path="/:item">
						<ClothingSection />
					</Route>
					<Route path="/"><p className='select-section'>Please select section...</p></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
