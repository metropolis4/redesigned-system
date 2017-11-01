import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddPerson.css';
import { addPerson } from '../../store/reducers/people/actions';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    };

    handleUpdate = ({ target }) => {
        const update = {}
        update[target.name] = target.value;
        this.setState(update);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.personAdded(this.state);
        this.setState({
            name: '',
            age: ''
        });
    }

    render () {
        return (
            <div className="AddPerson">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" name="name"
                        value={this.state.name}
                        onChange={(event) => this.handleUpdate(event)}/>
                    <input type="number" name="age"
                        value={this.state.age}
                        onChange={(event) => this.handleUpdate(event)} />
                    <input type="submit" value="Add Person" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAdded: (person) => dispatch(addPerson(person))
    }
}

export default connect(null, mapDispatchToProps)(AddPerson);
