import React from 'react';
import * as R from 'ramda';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
import {createSelector} from 'reselect';
import {graphql, useStaticQuery} from 'gatsby';

import {PrimaryAlert} from '../components';
import {REGISTRATION_FORM} from '../constants';
import {getPrices} from '../selectors';

const Sum = ({sum}) => {
    const {site: {siteMetadata: {prices: {base}}}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    prices {
                        base
                    }
                }
            }
        }
    `);
    const price = Math.max(sum + base, 0);
    return (
        <PrimaryAlert>
            Za účast zaplatíš: {price} Kč
        </PrimaryAlert>
    )
}

const getSum = createSelector(
    getFormValues(REGISTRATION_FORM),
    getPrices,
    (values, prices) => R.pipe(
        R.defaultTo({}),
        R.keys,
        R.map(R.flip(R.prop)(prices)),
        R.filter(R.compose(R.not, R.isNil)),
        R.sum,
    )(values),
);

const mapStateToProps = (state) => ({
    sum: getSum(state),
});

export default connect(mapStateToProps)(Sum);
