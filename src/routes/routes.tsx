import { IRoute } from '@interfaces/routing.interface';
import Buy from '@pages/Buy';
import Home from '@pages/Home';
import Rent from '@pages/Rent';
import RentOut from '@pages/RentOut';

const routesList: IRoute[] = [
	{ path: '/', name: 'Home', element: <Home /> },
	{ path: '/home', name: 'Home', element: <Home /> },
	{ path: '/buy', name: 'Buy', element: <Buy /> },
	{ path: '/rent', name: 'Rent', element: <Rent /> },
	{ path: '/rent-out', name: 'Rent out', element: <RentOut /> },
];

export default routesList;
