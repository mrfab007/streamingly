import LoginPage from './components/LoginPage/index';
import Dashboard from './components/Dashboard/Dashboard/index';

export const routes = [
	{
		path: '/Login',
		name: 'LoginPage',
		component: LoginPage
	},
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	}
];
