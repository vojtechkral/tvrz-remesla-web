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

    return (
        <ScheduleContainer>
            <Table start={8} end={19} title="Sobota 30. 5.">
                <DayProvider value="sobota">
                    <TableRow color="copper">
                        <Field
                            name="med-so-am"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Měděné výrobky"
                            price={prices.med}
                            id="entry.98174209"
                        />
                        <Field
                            name="med-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Měděné výrobky"
                            price={prices.med}
                            id="entry.185825036"
                        />
                    </TableRow>
                </DayProvider>
            </Table>
        </ScheduleContainer>
    );
};

Schedule.propTypes = {
    disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    disabled: isSubmitted(state),
});

export default connect(mapStateToProps)(Schedule);
