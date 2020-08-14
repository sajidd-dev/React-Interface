import React, { Component } from 'react';

class ListAppointments extends Component {

    render() {
        const listItem = this.props.appointments.map(item => (
            <div>
                <div>
                    {item.petName}
                </div>
                <div>
                    {item.ownerName}
                </div>
            </div>
        ));
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="pet-item col media py-3">
                        <div className="mr-3">
                            <div className="pet-delete btn btn-sm btn-danger">
                                X
                        </div>
                            <div className="pet-info media-body">
                                <div className="pet-head d-flex">
                                    <span className="pet-name">
                                        {item.PetName}
                                </span>
                                    <span className="apt-date ml-auto">
                                        {item.aptDate}
                                </span>
                                </div>
                                <div className="owner-name">
                                    <span className="label-item">Owner: </span>
                                    <span>{item.ownerName}</span>
                                </div>
                                <div className="apt-notes">{item.aptNotes}</div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );

    }
}
export default ListAppointments;

