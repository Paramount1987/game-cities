import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect}    from 'react-redux';

class Country extends Component {
    render() {
        const {isGameStart, isGameOver, currCountry} = this.props;

        if(!isGameStart || isGameOver) return null;

        return (
            <div>
                Игра началась
                <h3 className="country-title">
                    {currCountry.title}
                </h3>
            </div>
        );
    }
}

Country.propTypes = {
    isGameOver: PropTypes.bool.isRequired,
    isGameStart: PropTypes.bool.isRequired,
    currCountry: PropTypes.object
};
Country.defaultProps = {};

export default connect((state) => ({
    isGameOver: state.country.isGameOver,
    isGameStart: state.country.isShow,
    currCountry: state.country.active
}), {})(Country);
