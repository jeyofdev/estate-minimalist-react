import { IRoute } from '@interfaces/routing.interface';
import Buy from '@pages/buy/Buy';
import Home from '@pages/home/Home';
import Rent from '@pages/rent/Rent';

const routesList: IRoute[] = [
	{ path: '/', name: 'Home', element: <Home /> },
	{ path: '/home', name: 'Home', element: <Home /> },
	{ path: '/buy', name: 'Buy', element: <Buy /> },
	{ path: '/rent', name: 'Rent', element: <Rent /> },
];

export default routesList;
