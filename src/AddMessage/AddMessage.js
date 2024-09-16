import React, { Component } from 'react';
import Image2 from '../Image/images.jpg';
import { Link, useNavigate } from 'react-router-dom';
import '../Add-Department/AddDepartment.css';

const background = { backgroundSize: 'cover' };
const texts = { position: 'absolute', top: '20%', left: '10%' };

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }
    return ComponentWithRouterProp;
}

class AddMessage extends Component {
    constructor() {
        super();
        this.state = {
            ids: 0,
            message: ''
        };
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addsubscriberHandler(this.state);
        this.setState({ ids: 0, message: '' });
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
                    <label htmlFor="message" className="label-control">MESSAGE: </label><br />
                    <input
                        id="message"
                        type="text"
                        className="input-control"
                        name="message"
                        placeholder="Enter New Message"
                        value={this.state.message}
                        onChange={this.inputChangedHandler}
                        required // Ensure the message field is not empty
                    />
                    <br /><br />
                    <button type="submit" className="add">Add</button>
                </form>
            </div>
        );
    }
}

export default withRouter(AddMessage);
