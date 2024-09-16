import React, {Component} from 'react';
import Department from '../Bar-contents/Departments';
import AddDepartment from './AddDepartment';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

class ShowDepartment extends Component {

    constructor() {
        super();
        this.state = {
            DepartmentList:  [
                {
                    ids: 1,
                    Reg: '11382',
                    name: 'Rohit',
                    phone: '9999999999',
                    branch: 'cse'
                },
                {
                    ids: 2,
                    Reg: '11783',
                    name: 'Rohan',
                    phone: '777777777',
                    branch: 'cse'
                }
            ]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let DepartmentList = this.state.DepartmentList;
        let subscriberIndex = DepartmentList.findIndex(subscriber => subscriber.ids === subscriberId);
        let newSubscriberList = [...DepartmentList];
        newSubscriberList.splice(subscriberIndex, 1);
        this.setState({ DepartmentList: newSubscriberList });
    }

    addsubscriberHandler = (newSubscriber) => {
        let DepartmentList = this.state.DepartmentList;
        newSubscriber.ids = DepartmentList.length > 0 ? DepartmentList[DepartmentList.length - 1].ids + 1 : 1;
        this.setState({ DepartmentList: [...DepartmentList, newSubscriber] });
    }

    render() {
        return (
            <Router>
                <Routes> 
                    <Route 
                        exact 
                        path='/' 
                        element={<Department DepartmentList={this.state.DepartmentList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}
                    />
                    <Route 
                        exact 
                        path='/add' 
                        element={<AddDepartment addsubscriberHandler={this.addsubscriberHandler} />}
                    />
                </Routes>
            </Router>
        )
    }
}

export default ShowDepartment;
