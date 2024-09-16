import React, { Component } from 'react';
import Image2 from '../Image/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg';
import '../Add-Department/AddDepartment.css';
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

class AddSection extends Component {
    constructor() {
        super();
        this.state = {
            ids: 0,
            sections: '',
            year: ''
        };
    }

 
    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addsubscriberHandler(this.state);  
        this.setState({ ids: 0, sections: '', year: '' });  
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
                    <label htmlFor="sections" className="label-control">Section: </label><br />
                    <input
                        id="sections"
                        type="text"
                        className="input-control"
                        name="sections"
                        placeholder="Enter New Section"
                        value={this.state.sections}
                        onChange={this.inputChangedHandler}
                    />
                    <br /><br />
                    <label htmlFor="year" className="label-control">Year: </label><br />
                    <input
                        id="year"
                        type="text"
                        className="input-control"
                        name="year"
                        placeholder="Enter Year"
                        value={this.state.year}
                        onChange={this.inputChangedHandler}
                    />
                    <br /><br />
                    <button type="submit" className="add">Add</button>
                </form>
            </div>
        );
    }
}


export default withRouter(AddSection);
