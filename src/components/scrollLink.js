import React, { Component } from 'react'

class ScrollLink extends Component {
	constructor(props){
		super(props)
		this.state = { isHighlighted: false } 
		this.mouseEnter = this.mouseEnter.bind(this)
		this.mouseLeave = this.mouseLeave.bind(this)
		this.scrollToRef = this.scrollToRef.bind(this);
	}

	scrollToRef = () => {this.props.scrollRef.current.scrollIntoView({ 
               				behavior: "smooth", 
			               block: "nearest"
			            })}

	mouseEnter(){
		this.setState({isHighlighted: true})
	}

	mouseLeave(){
		this.setState({isHighlighted: false})
	}

	render(){
		let isSelected = (this.props.scrollRef === this.props.highlighted);
		console.log(this.props.scrollRef,this.props.highlighted)
		var currentStyle = (this.state.isHighlighted) ? highlightedTextStyle : defaultTextStyle
		currentStyle = (isSelected) ? selectedTextStyle : currentStyle
		return (
			<div style={currentStyle}>
				<p 
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}

					onClick={this.scrollToRef}

				>
					{this.props.text}
				</p>
			</div>
		)
	}
}

const selectedTextStyle = {
	color: "black", 
    textDecorationLine: 'underline',
    fontFamily: "Quicksand Light Medium",
    fontSize: '12px',
    margin: '10%',
}

const highlightedTextStyle = {
    color: "black", 
    textDecorationLine: 'underline',
    fontFamily: "Quicksand Light Medium",
    fontSize: '12px',
    margin: '10%',
}
//
const defaultTextStyle = {
	color: 'rgb(75,75,75)',
	fontFamily: "Quicksand Light Regular",
	fontSize: '12px',
	margin: '10%',
}

export default ScrollLink;