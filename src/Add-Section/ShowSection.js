import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import AddSection from './AddSection';
import Section from '../Bar-contents/Section';

class ShowSection extends Component{

    constructor(){
        super();
        this.state = {
            DepartmentList:  [
                {
                    ids:1,
                    sections: 'A',
                    year: '2023'
                },
                {
                    ids:2,
                    sections: 'B',
                    year: '2024'
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
                    <Route exact path='/' element={<Section DepartmentList={this.state.DepartmentList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                    <Route exact path='/add' element={<AddSection addsubscriberHandler={this.addsubscriberHandler}/>} />
                </Routes>
            </Router>
        )
    }
}

export default ShowSection;
