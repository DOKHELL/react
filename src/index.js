import React from 'react';
import ReactDOM from 'react-dom';


function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит</p>
	}
	return <p>Вода не закипит</p>
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.hundleChange = this.hundleChange.bind(this);
		this.state = {temperature: ''}

	}
	hundleChange(e) {
		this.setState({temperature: e.target.value})
	}
	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>Введите температуру воды в Цельсиях</legend>
				<input onChange={this.hundleChange} value={temperature}/>

				<BoilingVerdict celsius={parseFloat(temperature)}/>

			</fieldset>
		)
	}
}

  ReactDOM.render(
	  <Calculator />,
	  document.getElementById('root')
  )