import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Updated to use Routes
import MyMessage from '../Bar-contents/MyMessages';
import AddMessage from './AddMessage';

class ShowMessage extends Component{

    constructor(){
        super();
        this.state = {
            DepartmentList:  [
                {
                    ids:1,
                    message: 'Hello,Good Morning'
                },
                {
                    ids:2,
                    message: 'I am Prateek'
                }
            ]
        }
    }

    deleteSubscriberHandler = (subescriberId) => {
        let DepartmentList = this.state.DepartmentList;
        let subscriberIndex = 0;
        DepartmentList.forEach(function(subscriber, index){
            if(subscriber.ids === subescriberId){
                subscriberIndex = index;
            }
        }, this);
        let newSubscriber = DepartmentList;
        newSubscriber.splice(subscriberIndex, 1);
        this.setState({DepartmentList: newSubscriber});
    }

    addsubscriberHandler = (newsubscriber) => {
        let DepartmentList = this.state.DepartmentList;
        if(DepartmentList.length > 0){
            newsubscriber.ids = DepartmentList[DepartmentList.length - 1].ids + 1;
        } else {
            newsubscriber.ids = 1;
        }
        DepartmentList.push(newsubscriber);
        this.setState({DepartmentList: DepartmentList});
    }

    render(){
        return(
            <Router>
                <Routes>
                    <Route exact path='/' element={<MyMessage DepartmentList={this.state.DepartmentList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                    <Route exact path='/add' element={<AddMessage addsubscriberHandler={this.addsubscriberHandler}/>} />
                </Routes>
            </Router>
        )
    }
}

export default ShowMessage;
