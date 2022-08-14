import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Dashboard from './dashboard/pages/Dashboard';
import Expenses from './expenses/pages/Expenses';
import Settings from './settings/pages/Settings';
import './App.css';

export default function App() {
	return(
		<React.Fragment>
			<MainNavigation />
				<main>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/expenses' element={<Expenses />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</main>
		</React.Fragment>
	)
}
