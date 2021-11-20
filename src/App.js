import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNav from "./partials/MainNav";
import ClothingSection from "./partials/ClothingSection";
import Error from "./partials/Error";
import store from './store';
import { Provider } from 'react-redux';
import { nameCompany as userState, Company } from './partials/CompanyName'
import CompanyInfo from './partials/CompanyInfo'
import ContextCompany from './partials/UseContentNameCompany'

function App() {
	const [nameCompany, setUser] = useState(userState);

	return (
		<Provider store={store}>
				<div className="App">
					<Company.Provider value={{ nameCompany, updateState: setUser }}>
						<CompanyInfo />
				</Company.Provider>
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
				<Company.Provider value={{ nameCompany, updateState: setUser }}>
					<ContextCompany />
				</Company.Provider>
			</div>
		</Provider>
	);
}

export default App;
