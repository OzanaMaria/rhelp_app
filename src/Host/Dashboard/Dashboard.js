import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar role='host'></Navbar>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row' id='courses'>
                        <div className='col-md-4'>
                            <p>I'm host ayy</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
