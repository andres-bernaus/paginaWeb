import React, { Component } from 'react';
import Project from './project';
import GlobalContext, { Consumer } from './globalContext';

import restLogo from './rest-icon.png';
import reactLogo from './react-icon.png';
import androidLogo from './android-icon.png';

const VisibilitySensor = require('react-visibility-sensor').default;

class About extends Component {
	static contextType = GlobalContext;

	constructor(props){
		super(props);
		this.aboutRef = React.createRef();
	}

	componentDidMount() {
		this.context.setAboutScrollRef(this.aboutRef);
	}

	render(){
		return (<Consumer>
					{ (context) =>
						<VisibilitySensor>
			      			{({isVisible}) => { //console.log('About vis',isVisible)
			      								if ((context.currentSectionRef !== this.aboutRef) && isVisible)	
			      									context.setCurrentSectionRef(this.aboutRef);
			      								let text = context.currentLangData.aboutme;
			      								return(
														<div ref={this.aboutRef} className="about-section">
															<div className="about-volanta"> {text.about} </div>
															<h1>{text.title}</h1>
															<p className="about-text">{text.intro}</p>
															<p className="about-text">{text.skills}</p>
															<div className="about-volanta">{text.whatIDo}</div>
															<p className="about-text">{text.solve}</p>
															<p className="about-text">{text.myProjects}</p>
															<a href="https://www.linkedin.com/in/andresbernaus/" rel="noopener noreferrer" target="_blank">
																<h1>{text.projectTitle}</h1>
															</a>
															<div className="projects-wrapper">
																<Project fadeInMs='250' image={restLogo} title="RESTFUL API" text={text.projectAPI}/>
																<Project fadeInMs='500' image={androidLogo} title="MOBILE APP" text={text.projectMobile}/>	
																<Project fadeInMs='750' image={reactLogo} title="WEB DEVELOPMENT " text={text.projectWeb}/>
															</div>
														</div>
													)
								}
							}
						</VisibilitySensor>
					}
				</Consumer>
		)
	}
}

export default About;