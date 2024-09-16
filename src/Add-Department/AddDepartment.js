import React, { Component } from 'react';
import Image2 from '../Image/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg';
import './AddDepartment.css';
import { Link, useNavigate } from 'react-router-dom';

const background = { backgroundSize: 'cover' };
const texts = { position: 'absolute' };


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }
    return ComponentWithRouterProp;
}

class AddDepartment extends Component {
    constructor() {
        super();
        this.state = {
            ids: 0,
            Reg: '',
            name: '',
            phone: '',
            branch: ''
        };
    }

 
    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addsubscriberHandler(this.state); 
        this.setState({ ids: 0, Reg: '', name: '', phone: '', branch: '' });  
        this.props.navigate("/"); 
    }

   
    inputChangedHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="main">
                <img style={background} className="images" height="100%" width="100%" src={Image2} alt="background" />
                <form style={texts} onSubmit={this.onFormSubmitted}>
                    <Link to="/">
                        <button type="button" className="back_btn">Back</button>
                    </Link>
                    <br />
                    <label htmlFor="Reg" className="label-control">Id: </label>
                    <br />
                    <input
                        id="Reg"
                        type="text"
                        className="input-control"
                        name="Reg"
                        placeholder="Enter ID"
                        value={this.state.Reg}
                        onChange={this.inputChangedHandler}
                    />
                    <br /><br />
                    <label htmlFor="name" className="label-control">Name: </label>
                    <br />
                    <input
                        id="name"
                        type="text"
                        className="input-control"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.inputChangedHandler}
                    />
                    <br /><br />
                    <label htmlFor="phone" className="label-control">Phone: </label>
                    <br />
                    <input
                        id="phone"
                        type="text"
                        className="input-control"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={this.state.phone}
                        onChange={this.inputChangedHandler}
                    />
                    <br /><br />
                    <label htmlFor="branch" className="label-control">Branch: </label>
                    <br />
                    <input
                        id="branch"
                        type="text"
                        className="input-control"
                        name="branch"
                        placeholder="Enter Branch"
                        value={this.state.branch}
                        onChange={this.inputChangedHandler}
                    />
                    <br /><br />
                    <button type="submit" className="add">Add</button>
                </form>
            </div>
        );
    }
}

export default withRouter(AddDepartment);
