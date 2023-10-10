import { IRoute } from '@interfaces/routing.interface';
import Buy from '@pages/Buy';
import Home from '@pages/Home';
import Rent from '@pages/Rent';
import RentOut from '@pages/RentOut';

export const routes: IRoute[] = [
	{ path: '/', name: 'Home', element: <Home /> },
	{ path: '/', name: 'Buy', element: <Buy /> },
	{ path: '/', name: 'Rent', element: <Rent /> },
	{ path: '/', name: 'Rent out', element: <RentOut /> },
];

export default routes;
