import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TalentPage from '../pages/talent';
import Header from '../components/Header';
import { logo } from '../assets';
import { Jobs } from '../pages/jobs';
import { CandidateInfo } from '../pages/candidateInfo';

const Routes = () => {
	return (
		<Router basename={"/"}>
			<div>
				<Header 
					imgLogo={logo}
				/>
				<div className="mt-3">
					<Switch>
						<Route exact path="/" component={TalentPage} />
						<Route path="/jobs" component={Jobs} />
						<Route path="/candidate" component={CandidateInfo} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default Routes;