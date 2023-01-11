import React, { Component } from 'react'

class ClassExample extends Component {
	constructor (props) {
		super(props)
		this.state = {
			name: 'Abid',
			age: 17
		}
	}

	componentDidMount () {
		console.log('ini did mount')
	}

	componentDidUpdate () {
		console.log('ini did update')
	}

	render () {
		console.log('ini render')
		return <>
			<h2>Aku Class Component</h2>
			<ul>
				<li>namaku: {this.state.name}</li>
				<li>umurku: {this.state.age}</li>
			</ul>
			<button onClick={() => this.setState({ name: 'Bambang' }) }>
				Ubah Nama
			</button>
			<button onClick={() => this.setState({ age: 31 }) }>
				Ubah Umur
			</button>
		</>
	}
}

export default ClassExample