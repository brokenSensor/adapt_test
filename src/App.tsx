import React from 'react'
import { useGetDataQuery } from './api/apiSlice'
import Card from './components/Card'
function App() {
	const { data } = useGetDataQuery()
	return (
		<div className='App'>
			{data && data.map((item, index) => <Card key={index} item={item} />)}
		</div>
	)
}

export default App
