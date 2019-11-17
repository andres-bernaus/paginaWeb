import React, { Component } from 'react';
import LandingPageSlider from './slide'
import GlobalContext, { Consumer } from './globalContext';

class Introduction extends Component {
	static contextType = GlobalContext

	constructor(props){
		super(props);
		this.introRef = React.createRef();
	}

	componentDidMount() {
		this.context.setIntroScrollRef(this.introRef);
	}

	render(){
		return (
				<Consumer>
					{ (context) =>
								<div ref={this.introRef} className="landing top">
									<LandingPageSlider/>
								</div>
					}
				</Consumer>
		)
	}
}

export default Introduction;