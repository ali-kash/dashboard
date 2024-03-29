import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import { Login } from './pages/login/Login'

import { Topbar } from './components/global/Topbar'
import { Sidebar } from './components/global/Sidebar'
import { Footer } from './components/global/Footer'

import './styles/global.scss'

function App() {
	const [theme, colorMode] = useMode()

	const Layout = () => {
		return (
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<div className='app'>
						<main className='content'>
							<Topbar />
							<div className='container'>
								<div className='menuContainer'>
									<Sidebar />
								</div>
								<div className='contentContainer'>
									<Outlet />
								</div>
							</div>
							<Footer />
						</main>
					</div>
				</ThemeProvider>
			</ColorModeContext.Provider>
		)
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/users',
					element: <Users />,
				},
				{
					path: '/products',
					element: <Products />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
	])

	return <RouterProvider router={router} />
}

export default App
