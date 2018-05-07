import React from 'react';

class BurgerRepresentation extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                Imagine Burger here.
            </div>
        );
    }
}

export default BurgerRepresentation;