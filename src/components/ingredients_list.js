import React from 'react';

class IngredientsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                Imagine Ingredients here.
            </div>
        );
    }
}

export default IngredientsList;