import React, { Component } from 'react'
import ScrollLink from './scrollLink'
import { Consumer } from './globalContext';
import Switch from './switch';
import './Sidebar.css';

class Sidebar extends Component {

	render(){
		return(
			<React.Fragment>
		        <img 
		            src="https://media.licdn.com/dms/image/C4E03AQEZtqdQ5f7-TA/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=jUpb3-23P_9zsfOf9q0ttU0FgQN9jlnA05-5TOohvOg"
		            alt="avatar"
		            className="avatar-img"
		        />
		        <h2 className="Sidebar-Name">Andres Bernaus</h2>
		        <p className="Sidebar-Email"><i className="fa fa-envelope-o" aria-hidden="true"/> bernaus.andres@gmail.com</p>
		        
		        <Consumer>
		        	{(context) =>{ let text = context.currentLangData.sidebar;
		        					return (<div>
				        				        <ScrollLink highlighted={context.currentSectionRef} scrollRef={context.introScrollRef} text={text.intro}/>
				        				        <ScrollLink highlighted={context.currentSectionRef} scrollRef={context.aboutScrollRef} text={text.about}/>
				        				        <ScrollLink highlighted={context.currentSectionRef} scrollRef={context.timelineScrollRef} text={text.timeline}/>
			        			   			</div>
			        			   	)
			        			}
		        	}
		    	</Consumer>
		        <p className="Social-links">
		          <a href="https://www.linkedin.com/in/andresbernaus/" rel="noopener noreferrer" target="_blank">
		            <i className="fa fa-linkedin-square" aria-hidden="true"/>
		          </a>
				</p>
				<p className="Social-links">
		          <a href="https://github.com/andres-bernaus" rel="noopener noreferrer" target="_blank">
		            <i className="fa fa-github-square" aria-hidden="true"/>
		          </a>
		        </p>
		        <div style={{display:'inline-flex',marginTop:'15px'}}>
		        	English
		        	<div style={{transform:'scale(0.5) translatey(-80%)'}}>
			        	<Consumer>
			        		{ (context) =>
				        		<Switch toggle={context.switchLang}/>
			        		}
			        	</Consumer>
		        	</div>
		        	Español
		        </div>
		    </React.Fragment>
		)
	}
}

export default Sidebar;