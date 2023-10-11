import ErrorNotFound from '@pages/ErrorNotFound';
import { Route, Routes } from 'react-router-dom';
import routesList from './routes';

const Router = () => (
	<Routes>
		{routesList.map(route => (
			<Route
				key={route.name.toLowerCase().split(' ').join('-')}
				path={route.path}
				element={route.element}
			/>
		))}

		<Route path='*' element={<ErrorNotFound />} />
	</Routes>
);

export default Router;
