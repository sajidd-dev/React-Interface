import React from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SeachAppointments from './SearchAppointments';
function App() {
  return (
    <main  className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments  />
              <ListAppointments  />
              <SeachAppointments  />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
