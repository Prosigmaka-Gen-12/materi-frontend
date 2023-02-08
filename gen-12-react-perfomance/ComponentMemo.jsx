import { memo } from 'react'

function ComponentMemo () {
	return <h1>Memoized Component Example</h1>
}

export default memo(ComponentMemo)