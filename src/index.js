import React from 'react';
import ReactDOM from 'react-dom';

function CreateList(props) {
 const arr = props.arr;
	const list = arr.map((i) => <li>{i}</li>);
	return list;
}
function ShowList(props) {
	if (props.state) {
		return (
			<CreateList arr={[1,2,3,4,5,6,7]}/>
		)
	}
	return null;
}
class RenderList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showList: false};
		this.RenderListBtn = this.RenderListBtn.bind(this);
	}
	RenderListBtn() {
		this.setState(state => ({
			showList: !state.showList
		}))
	}

	render() {
		return (
			<div>
				<button onClick={this.RenderListBtn}>{this.state.showList ? 'Hide' : 'Show'}</button>
				<ul>
					<ShowList state={this.state.showList}/>
				</ul>
			</div>
		)
	}
}
  
  ReactDOM.render(
	<RenderList />,
	document.getElementById('root')
  );