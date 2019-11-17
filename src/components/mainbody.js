import React, { Component } from 'react';
import Introduction from './introduction'
import About from './aboutme'
import Timeline from './timeline'



class MainBody extends Component {

	render(){
		return(
			<div className="MainBody">
				<Introduction callBackFunction={this.props.introScrollRef} />	
      			<About callBackFunction={this.props.aboutScrollRef}/>
      			<Timeline callBackFunction={this.props.timelineScrollRef}/>
			</div>
		)
	}
}

export default MainBody;