import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field} from 'redux-form';
import {TableRow, Table, ScheduleContainer} from 'components';
import {TimeSlotInput, DayProvider} from 'containers';
import {isSubmitted} from 'selectors';
import {LUCERNA, TKANI, KORALE, NUZ, MED, KARETKY} from 'prices';

const Schedule = ({disabled}) => (
    <ScheduleContainer>
        <Table start={9} end={19} title="Sobota" disabled={disabled}>
            <DayProvider value="sobota">
                <TableRow color="copper">
                    <Field
                        name="med-so-AM"
                        start={9}
                        end={13.5}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.991687023"
                    />
                    <Field
                        name="med-so-PM"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.2142815324"
                    />
                </TableRow>
                <TableRow color="green">
                    <Field
                        name="korale-so-AM"
                        start={9}
                        end={13.5}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.375198944"
                    />
                    <Field
                        name="korale-so-PM"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.366149748"
                    />
                </TableRow>
                <TableRow color="red">
                    <Field
                        name="hreben-so-AM"
                        start={9}
                        end={13.5}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.1854833292"
                    />
                    <Field
                        name="hreben-so-PM"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.309083307"
                    />
                </TableRow>
                <TableRow color="purple">
                    <Field
                        name="karetky-so-AM"
                        start={9}
                        end={13.5}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.1593740732"
                    />
                    <Field
                        name="karetky-so-PM"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.1773492366"
                    />
                </TableRow>
                <TableRow>
                    <Field
                        name="lucerna-so-AM"
                        start={9}
                        end={13.5}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.1697966926"
                    />
                    <Field
                        name="lucerna-so-PM"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.1737503332"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="nuz-so"
                        start={9}
                        end={17}
                        component={TimeSlotInput}
                        label="Nůž a pochva"
                        price={NUZ}
                        id="entry.150792607"
                    />
                </TableRow>
            </DayProvider>
        </Table>
    </ScheduleContainer>
);

Schedule.propTypes = {
    disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    disabled: isSubmitted(state),
});

export default connect(mapStateToProps)(Schedule);
