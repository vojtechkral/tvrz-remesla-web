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
        <Table start={9} end={20} title="Sobota" disabled={disabled}>
            <DayProvider value="sobota">
                <TableRow color="copper">
                    <Field
                        name="med1"
                        start={9}
                        end={14}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.2001535182"
                    />
                    <Field
                        name="med2"
                        start={15}
                        end={20}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.863979832"
                    />
                </TableRow>
                <TableRow color="green">
                    <Field
                        name="korale1"
                        start={9}
                        end={12}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.1210935918"
                    />
                    <Field
                        name="korale2"
                        start={13}
                        end={16}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.425127990"
                    />
                    <Field
                        name="korale3"
                        start={17}
                        end={20}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.1590153636"
                    />
                </TableRow>
                <TableRow color="red">
                    <Field
                        name="tkani1"
                        start={9}
                        end={14}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.299497980"
                    />
                    <Field
                        name="tkani2"
                        start={15}
                        end={20}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.132012809"
                    />
                </TableRow>
                <TableRow color="purple">
                    <Field
                        name="karetky1"
                        start={10}
                        end={14}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.1370085336"
                    />
                    <Field
                        name="karetky2"
                        start={15}
                        end={19}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.413199985"
                    />
                </TableRow>
                <TableRow>
                    <Field
                        name="lucerna1"
                        start={9}
                        end={14}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.1007779779"
                    />
                    <Field
                        name="lucerna2"
                        start={15}
                        end={20}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.1997255898"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="nuz"
                        start={9}
                        end={17}
                        component={TimeSlotInput}
                        label="Nůže a pochva"
                        price={NUZ}
                        id="entry.2108715331"
                    />
                </TableRow>
            </DayProvider>
        </Table>
        <Table start={9} end={15} title="Neděle" disabled={disabled}>
            <DayProvider value="neděle">
                <TableRow color="copper">
                    <Field
                        name="med3"
                        start={9}
                        end={14}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.599933823"
                    />
                </TableRow>
                <TableRow color="green">
                    <Field
                        name="korale4"
                        start={9}
                        end={12}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.2049723369"
                    />
                    <Field
                        name="korale5"
                        start={12}
                        end={15}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.892378742"
                    />
                </TableRow>
                <TableRow color="red">
                    <Field
                        name="tkani3"
                        start={9}
                        end={14}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.905015196"
                    />
                </TableRow>
                <TableRow color="purple" />
                <TableRow>
                    <Field
                        name="lucerna3"
                        start={9}
                        end={14}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.1324063131"
                    />
                </TableRow>
                <TableRow color="steel" />
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
