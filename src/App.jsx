import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

// GLOBAL
import { Topbar } from './components/global/Topbar'
import { ProSidebar } from './components/global/ProSidebar'
import { Footer } from './components/global/Footer'

import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import Calendar from './scenes/calendar'
import Bar from './scenes/bar'
import Pie from './scenes/pie'
import Line from './scenes/line'
// import Login from './scenes/login'

import './styles/global.scss'

function App() {
	const [theme, colorMode] = useMode()
	const [isSidebar, setIsSidebar] = useState(true)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<ProSidebar isSidebar={isSidebar} />
					<main
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						<Topbar setIsSidebar={setIsSidebar} />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/team' element={<Team />} />
							<Route path='/contacts' element={<Contacts />} />
							<Route path='/invoices' element={<Invoices />} />
							<Route path='/form' element={<Form />} />
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/line' element={<Line />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
