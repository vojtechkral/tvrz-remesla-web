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
                        tkani
                        lucerna
                        nuz
                        pochva
                        korale
                        karetkyOpasek
                        karetkyDrobne
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
                    <TableRow color="green">
                        <Field
                            name="koralky-so-am"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Korálky"
                            price={prices.korale}
                            id="entry.507520715"
                        />
                        <Field
                            name="koralky-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Korálky"
                            price={prices.korale}
                            id="entry.1616391660"
                        />
                    </TableRow>
                    <TableRow color="red">
                        <Field
                            name="tkani-so-am"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Tkaní"
                            price={prices.tkani}
                            id="entry.2026900310"
                        />
                        <Field
                            name="tkani-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Tkaní"
                            price={prices.tkani}
                            id="entry.1597947524"
                        />
                    </TableRow>
                    <TableRow color="purple">
                        <Field
                            name="karetky-opasek"
                            start={8.5}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Karetky: Opasek"
                            price={prices.karetkyOpasek}
                            id="entry.532135752"
                        />
                    </TableRow>
                    <TableRow color="purple">
                        <Field
                            name="karetky-drobne"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Karetky: Drobnosti"
                            price={prices.karetkyDrobne}
                            id="entry.168920263"
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
                            id="entry.584890331"
                        />
                        <Field
                            name="nuz-so-pm"
                            start={14}
                            end={18.5}
                            component={TimeSlotInput}
                            label="Nůž"
                            price={prices.nuz}
                            id="entry.1752832942"
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
                            id="entry.908878408"
                        />
                    </TableRow>
                </DayProvider>
            </Table>
            <Table start={8} end={13} title="Neděle 31. 5">
                <DayProvider value="sobota">
                    <TableRow color="copper">
                        <Field
                            name="med-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Měděné výrobky"
                            price={prices.med}
                            id="entry.764276337"
                        />
                    </TableRow>
                    <TableRow color="green">
                        <Field
                            name="koralky-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Korálky"
                            price={prices.korale}
                            id="entry.383133650"
                        />
                    </TableRow>
                    <TableRow color="red">
                        <Field
                            name="tkani-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Tkaní"
                            price={prices.tkani}
                            id="entry.83504422"
                        />
                    </TableRow>
                    <TableRow color="steel">
                        <Field
                            name="nuz-ne"
                            start={8.5}
                            end={13}
                            component={TimeSlotInput}
                            label="Nůž"
                            price={prices.nuz}
                            id="entry.1027324602"
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
                            id="entry.791305311"
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
