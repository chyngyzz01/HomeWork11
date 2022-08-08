import { useEffect, useRef } from 'react'
import './App.css'
function App() {
	const refColor = useRef()
	useEffect(() => {
		const timeout = setInterval(() => {
			if (refColor.current.style.backgroundColor === 'green') {
				return (refColor.current.style.backgroundColor = 'blue')
			} else if (refColor.current.style.backgroundColor === 'blue') {
				return (refColor.current.style.backgroundColor = 'red')
			}
			return (refColor.current.style.backgroundColor = 'green')
		}, 1000)
		return () => clearInterval(timeout)
	}, [])
	return (
		<div
			style={{
				width: '200px',
				height: '200px',
				margin: '0 auto',
				borderRadius: '50%',
				marginTop: '50px',
			}}
			ref={refColor}
		></div>
	)
}
export default App
