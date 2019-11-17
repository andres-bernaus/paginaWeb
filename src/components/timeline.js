import React, { Component } from 'react';
import GlobalContext, { Consumer } from './globalContext';


class Timeline extends Component {
	static contextType = GlobalContext

	constructor(props){
		super(props);
		this.timelineRef = React.createRef();
	}

	componentDidMount() {
		this.context.setTimelineScrollRef(this.timelineRef);
	}

	render(){
		return (
				<Consumer>
					{(context) => {	let text = context.currentLangData.timeline;
									return(  
					
												<div ref={this.timelineRef} className="timeline">
													<h1>Timeline</h1>
													<div>
														<i className="fa fa-pencil" aria-hidden="true"></i>
													</div>
													<div className='timelime-item-wrapper'>
														<div className="timeline-item-text">
															<h2>{text.title1}</h2> 
															<t style={{color:'grey'}}>{text.time1}</t>
															<p>{text.description1}</p>
														</div>
													</div>
					
													<div>
														<i className="fa fa-pencil" aria-hidden="true"></i>
													</div>
													<div className='timelime-item-wrapper'>
														<div className="timeline-item-text">
															<h2>{text.title2}</h2> 
															<t style={{color:'grey'}}>{text.time2}</t>
															<p>{text.description2}</p>
														</div>
													</div>
												</div>
											)}
					}
				</Consumer>	
		)
	}
}

export default Timeline;