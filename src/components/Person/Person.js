import React from 'react';
import { connect } from 'react-redux';

import './Person.css';
import { deletePerson } from '../../store/reducers/people/actions';

const person = (props) => (
    <div className="Person" onClick={() => props.delete(props.id)}>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        delete: (id) => dispatch(deletePerson(id))
    }
}

export default connect(null, mapDispatchToProps)(person);
