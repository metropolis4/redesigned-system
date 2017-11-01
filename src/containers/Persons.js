import React from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

function persons (props) {
    return (
        <div>
            <AddPerson />
            {props.people.map(person => (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    id={person.id}
                />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        people: state.people
    };
}

export default connect(mapStateToProps)(persons);
