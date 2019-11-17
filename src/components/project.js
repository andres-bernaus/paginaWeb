import React, { Component } from 'react';
const VisibilitySensor = require('react-visibility-sensor').default;


const contentStyle = {
	position: 'relative',
	margin: '5%',
	padding: "10px",

	border: 'solid',
	borderColor: "lightgrey",
  	backgroundColor: 'white',
	borderWidth: '1px',
	
	textAlign: 'center',
	fontFamily: "Roboto Regular",
	fontSize:"15px",
};

class Project extends Component {
	constructor(props) {
		super(props)
		this.titleStyle = {
			color: 'black',
			fontFamily: "Quicksand Light Bold",
			fontSize:"15px",
		};
		this.state = {isVisible: false}
		this.isActive = false
	}

	load(){
		clearInterval(this.activationInterval)
		this.isActive = true;
		this.fadeInTimer = this.fadeInterval = setInterval(() => this.fadeIn(), parseInt(this.props.fadeInMs));
	}

	fadeIn(){
		clearInterval(this.fadeInTimer)
		this.setState({isVisible:true})
	}

	render(){
		if (!this.isActive){
			return<VisibilitySensor>
			      		{({isVisible}) => {if (isVisible) {this.activationInterval = setInterval(() => this.load(), 10);} 
			      							return <div style={{color:'white',display: 'inline-flex'}}>I am {isVisible ? 'visible' : 'invisible'}</div>} }
			</VisibilitySensor>
		}
		return (<div className='about-project'>
					<div style={contentStyle}>
						<p><img 
				            src={this.props.image}
				            alt="project-icon"
		        		/></p>
						<b style={this.titleStyle}>{this.props.title}</b>
						<p>{this.props.text}</p>
					</div>
				</div>
		)
	}
}

export default Project;