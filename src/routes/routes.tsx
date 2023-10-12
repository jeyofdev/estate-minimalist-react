import { IRoute } from '@interfaces/routing.interface';
import Buy from '@pages/buy/Buy';
import Home from '@pages/home/Home';
import RentOut from '@pages/rent-out/RentOut';
import Rent from '@pages/rent/Rent';

const routesList: IRoute[] = [
	{ path: '/', name: 'Home', element: <Home /> },
	{ path: '/home', name: 'Home', element: <Home /> },
	{ path: '/buy', name: 'Buy', element: <Buy /> },
	{ path: '/rent', name: 'Rent', element: <Rent /> },
	{ path: '/rent-out', name: 'Rent out', element: <RentOut /> },
];

export default routesList;
