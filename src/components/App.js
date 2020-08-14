import React, {Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SeachAppointments from './SearchAppointments';
import { without } from 'lodash';

class App extends Component {
  constructor(){
    super()
    this.state = {
      myAppointments : [],
      formDisplay:false,
      lastIndex : 0
    }
  }

  deleteAppointment = (apt) => {
    let temApts = this.state.myAppointments;
    temApts = without(temApts,apt);
    this.setState({
      myAppointments : temApts
    })
    }
    
  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState({
          lastIndex : this.state.lastIndex + 1
        });
        return item;
      })
      this.setState({
        myAppointments : apts
      });
    });
  }
  render() {
   
    return (
      <main  className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
              
                <AddAppointments formDisplay={this.state.formDisplay} />
                <ListAppointments appointments={this.state.myAppointments} deleteAppointment={this.deleteAppointment} />
                <SeachAppointments  />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
