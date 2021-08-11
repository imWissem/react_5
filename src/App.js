import React from 'react';
import Profile from './components/profile'
import img from "./components/profile_pic.jfif"

class App extends React.Component {
   
    constructor(){ 
      super ()
      this.state={
        Person :{ fullName:"Wissem Zaiem",
        bio:"just look to the content no need for bio ",
        imgSrc: img,
        profession:"Student"
        },
        show: false,
        digit:0
      
      }
    }
    

    showFunction(){
      this.setState({
        show: !this.state.show 
      })
    }
    
   
    componentDidMount = () => {    
     this.myInterval = setInterval (() => {            
       this.setState(prevState =>({                    
         digit: prevState.digit +1,
       }));
      }, 3600);                                           
    }


    render(){
      
        return(
            <div className="App">
              <button onClick={ () => {this.showFunction()}} > {this.state.show === true ? "Hide Profile" : "Show Profile"}</button>
              <div> { (this.state.show === true)?
              <div> 
              <div className="clock">  
              {this.state.digit}  
              </div>
            <Profile fullName={this.state.Person.fullName}
                 bio={this.state.Person.bio} 
                 img={this.state.Person.imgSrc} 
                 profession={this.state.Person.profession}/>
              </div>: null }
              </div>
            </div>)
        }}

    


export default App
