import React from 'react';
import ReactDOM from 'react-dom';

const buttonProps = {
	title: 'Посмотреть трейлер',
	link: '#1'
};

export default class Button extends React.Component {

	constructor(props) {
		super(props);
	}

	buttonClick() {
		console.log('... test click ...');
	}

	render() {
		return (
			<div className="buttonArea">
				<button onClick={this.buttonClick.bind(this)} 
					className="main_button">
					{this.props.title}
				</button>
			</div>
		)
	}
};

Button.propTypes = {
	title: React.PropTypes.string.isRequired,
	link: React.PropTypes.string.isRequired,
};

ReactDOM.render(
	<Button 
		title={buttonProps.title} 
		link={buttonProps.link} 
	/>,
	document.getElementById('button')
);