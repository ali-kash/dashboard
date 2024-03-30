import { Box } from '@mui/material'
import Header from '../../components/Header'

const Dashboard = () => {
	return (
		<Box m='20px'>
			<Box display='flex' justifyContent='space-evenly' alignItems='center'>
				<Header title='DASHBOARD' subtitle='Welcom to your dashboard' />
			</Box>
		</Box>
	)
}

export default Dashboard
