import React from 'react';
import './App.css';
import MainBody from './components/mainbody'
import Sidebar from './components/sidebar'
import { Provider, langData } from './components/globalContext'



class App extends React.Component {

  constructor(props){
    super(props);

    //Todo: Refactor
    this.setCurrentSectionRef = (value) => {
      this.setState(state => ({currentSectionRef: value}))
    }

    this.setIntroScrollRef = (value) => {
      this.setState(state => ({introScrollRef: value}))
    }

    this.setAboutScrollRef = (value) => {
      this.setState(state => ({aboutScrollRef: value}))
    }

    this.setTimelineScrollRef = (value) => {
      this.setState(state => ({timelineScrollRef: value}))
    }

    this.switchLang = () => {
      let lang = (this.state.currentLang === 'en-US')? 'es-ES' : 'en-US';
      this.setState({currentLang: lang, currentLangData: langData[lang], })
    };

    this.state = {
      currentLang: 'en-US',
      switchLang: this.switchLang,
      currentLangData: langData['en-US'],

      currentSectionRef: null,
      setCurrentSectionRef: this.setCurrentSectionRef,
      introScrollRef: null,
      setIntroScrollRef: this.setIntroScrollRef,
      aboutScrollRef: null,
      setAboutScrollRef: this.setAboutScrollRef,
      timelineScrollRef: null,
      setTimelineScrollRef: this.setTimelineScrollRef,
    }
  }

  
  render(){
    return (
      <div className="App">
        <Provider value={this.state}>
          <div className="Sidebar">
            <Sidebar/>
          </div>
          <MainBody/>
        </Provider>
      </div>
    );
  }
}

export default App;
