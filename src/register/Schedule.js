import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field} from 'redux-form';
import {useStaticQuery, graphql} from 'gatsby';
import {TableRow, Table, ScheduleContainer} from './components';
import {TimeSlotInput, DayProvider} from './containers';
import {isSubmitted} from './selectors';

// Array.from(document.getElementsByTagName('input')).forEach(el => console.log(el.getAttribute('aria-label'), el.name));

const Schedule = ({disabled}) => {
    const {site: {siteMetadata: {prices}}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    prices {
                        prace
                        med
                        tkani
                        lucerna
                        nuz
                        pochva
                        korale
                        karetky
                    }
                }
            }
        }
    `);

    return null;
};

Schedule.propTypes = {
    disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    disabled: isSubmitted(state),
});

export default connect(mapStateToProps)(Schedule);
