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
                        med
                        hrebenovka
                        lucerna
                        nuz
                        pochva
                        korale
                        karetkyOpasek
                        karetkyDrobne
                        tasvice
                    }
                }
            }
        }
    `);

    return (
        <ScheduleContainer>
            <Table start={8} end={19} title="Sobota 23. 4.">
                <DayProvider value="sobota">
                    <TableRow color="goldenrod">
                        <Field
                            name="med-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Základy práce s mědí"
                            price={prices.med}
                            id="entry.1062262220"
                        />
                    </TableRow>
                    <TableRow color="green">
                        <Field
                            name="koralky-so-am"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Skleněné korálky"
                            price={prices.korale}
                            id="entry.446829176"
                        />
                    </TableRow>
                    <TableRow color="copper">
                        <Field
                            name="tasvice-so"
                            start={8.5}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Kožená tašvice"
                            price={prices.tasvice}
                            id="entry.856708713"
                        />
                    </TableRow>
                    <TableRow color="red">
                        <Field
                            name="hrebenovky-so-am"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Hřebenová tkanice"
                            price={prices.hrebenovka}
                            id="entry.1729727050"
                        />
                        <Field
                            name="hrebenovky-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Hřebenová tkanice"
                            price={prices.hrebenovka}
                            id="entry.447707101"
                        />
                    </TableRow>
                    <TableRow color="purple">
                        <Field
                            name="karetky-so-am"
                            start={11}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Karetková tkanice: Opasek"
                            price={prices.karetkyOpasek}
                            id="entry.1847459887"
                        />
                    </TableRow>
                    <TableRow color="purple">
                        <Field
                            name="karetky-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Karetková tkanice: Drobnosti"
                            price={prices.karetkyDrobne}
                            id="entry.998640241"
                        />
                    </TableRow>
                    <TableRow color="steel">
                        <Field
                            name="nuz-so-am"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Nůž"
                            price={prices.nuz}
                            id="entry.303938333"
                        />
                        <Field
                            name="nuz-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Nůž"
                            price={prices.nuz}
                            id="entry.1953526992"
                        />
                    </TableRow>
                    <TableRow color="copper">
                        <Field
                            name="pochva-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Pochva"
                            price={prices.pochva}
                            id="entry.1921006939"
                        />
                    </TableRow>
                    <TableRow color="goldenrod">
                        <Field
                            name="lucerna-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Lucerna"
                            price={prices.lucerna}
                            id="entry.1156607201"
                        />
                    </TableRow>
                </DayProvider>
            </Table>
            <Table start={8} end={14} title="Neděle 24. 4.">
                <DayProvider value="neděle">
                    <TableRow color="green">
                        <Field
                            name="koralky-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Skleněné korálky"
                            price={prices.korale}
                            id="entry.1528255905"
                        />
                    </TableRow>
                    <TableRow color="red">
                        <Field
                            name="hrebenovky-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Hřebenová tkanice"
                            price={prices.hrebenovka}
                            id="entry.1869505018"
                        />
                    </TableRow>
                    <TableRow color="copper">
                        <Field
                            name="pochva-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Pochva"
                            price={prices.pochva}
                            id="entry.570275917"
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
