import Typography from '@mui/material/Typography';
import { GlobalPropsType } from '../types/global-props.type';

export type LayoutPropsType = Pick<GlobalPropsType, 'children'>;

const Layout = ({ children }: LayoutPropsType) => (
	<>
		<Typography>Header</Typography>
		{children}
	</>
);

export default Layout;
