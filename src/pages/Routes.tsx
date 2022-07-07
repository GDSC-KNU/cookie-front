import {
	BrowserRouter as Router,
	Routes as ReactRouterRoutes,
	Route,
} from 'react-router-dom';
import Home from './Home';
import Main from './Main';

const Routes = () => {
	return (
		<Router>
			<ReactRouterRoutes>
				<Route path="/" element={<Home />} />
				<Route path="/main" element={<Main />} />
			</ReactRouterRoutes>
		</Router>
	);
};

export default Routes;
