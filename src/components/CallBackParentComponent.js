import React, { useState, useCallback } from 'react'
import CallBackCount from './CallBackCount'
import CallBackButton from './CallBackButton'
import CallBackTitle from './CallBackTitle'

function CallBackParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<CallBackTitle />
			<CallBackCount text="Age" count={age} />
			<CallBackButton handleClick={incrementAge}>Increment Age</CallBackButton>
			<CallBackCount text="Salary" count={salary} />
			<CallBackButton handleClick={incrementSalary}>Increment Salary</CallBackButton>
		</div>
	)
}

export default CallBackParentComponent