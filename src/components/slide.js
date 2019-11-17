import React, { Component } from 'react';

const slides = [
		{
			text: "Hi! I'm Andres", 
			link: "https://docs.google.com/document/d/1YrklbibQlQWjC9LNuEQBIoG5GEHky4orf4CLSZ4rwF0/edit?usp=sharing", 
			caption: "VIEW CV  ",
			icon: "fa fa-file-pdf-o"
		},
		{
			text: "I like building things!", 
			link: "https://github.com/andres-bernaus/Projects", 
			caption: "VIEW PROJECTS  ",
			icon: "fa fa-suitcase"
		}];

class LandingPageSlider extends Component{

	constructor(props){
		super(props);
		this.state = {
			currentCount: slides.length-1,
			visible: false
		}
	}

	componentDidMount() {
		this.startSlider(500);
		//this.stopAnimation = setInterval(() => this.stopSlider(), 15000);
	}

	startSlider(fadeInTime){
		this.setState({visible: false})
		this.fadeInterval = setInterval(() => this.fadeIn(), fadeInTime);
	}

	stopSlider(){
		clearInterval(this.fadeInterval)
		clearInterval(this.visibleInterval)
		clearInterval(this.stopSlider)
	}

	fadeIn(){
		clearInterval(this.fadeInterval)
		let nextCounterValue = this.state.currentCount + 1;
		if (nextCounterValue >= slides.length){
			nextCounterValue = 0;
		}
		this.setState({currentCount: nextCounterValue, visible: true});
		this.visibleInterval = setInterval(() => this.fadeOut(), 5000);
	}

	fadeOut() {
		clearInterval(this.visibleInterval);
		this.setState({visible:false})
		this.fadeInterval = setInterval(() => this.fadeIn(), 1000);
	}

	render(){
		return (<div className={this.state.visible?'SliderFadeIn':'SliderFadeOut'}>
					<h1 className="slider-text">{slides[this.state.currentCount]['text']}</h1>
					<a className="slider-button" href={slides[this.state.currentCount]['link']} rel="noopener noreferrer" target="_blank">
						{slides[this.state.currentCount]['caption']}<i className={slides[this.state.currentCount]['icon']} aria-hidden="true"/>
					</a>
				</div>);
	}

}

export default LandingPageSlider;