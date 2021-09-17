import React from 'react'
import { useGetDataQuery } from './api/apiSlice'
import Card from './components/Card'
import { response } from './entities.json'
function App() {
	let { data, isError, isLoading } = useGetDataQuery()
	if (!isLoading && isError) data = response
	return (
		<div className='App'>
			{data && data.map((item, index) => <Card key={index} item={item} />)}
		</div>
	)
}

export default App
