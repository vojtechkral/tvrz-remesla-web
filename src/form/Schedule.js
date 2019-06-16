import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field} from 'redux-form';
import {TableRow, Table, ScheduleContainer} from 'components';
import {TimeSlotInput, DayProvider} from 'containers';
import {isSubmitted} from 'selectors';
import {LUCERNA, TKANI, KORALE, NUZ, MED, KARETKY, NUZ_SAM, POCHVA_SAMA} from 'prices';

// Array.from().forEach(el => console.log(el.getAttribute('aria-label'), el.name);

const Schedule = ({disabled}) => (
    <ScheduleContainer>
        <Table start={14} end={19} title="Středa" disabled={disabled}>
            <DayProvider value="středa">
                <TableRow color="copper">
                    <Field
                        name="med-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.1615155782"
                    />
                </TableRow>
                <TableRow color="green">
                    <Field
                        name="korale-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.749940226"
                    />
                </TableRow>
                <TableRow color="red">
                    <Field
                        name="hreben-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.924123730"
                    />
                </TableRow>
                {/*
                <TableRow color="purple">
                    <Field
                        name="karetky-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.709113823"
                    />
                </TableRow>
                */}
                <TableRow color="goldenrod">
                    <Field
                        name="lucerna-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.2032200845"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="nuz-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Nůž"
                        price={NUZ_SAM}
                        id="entry.1000632899"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="pochva-st"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Pochva"
                        price={POCHVA_SAMA}
                        id="entry.1516895660"
                    />
                </TableRow>
            </DayProvider>
        </Table>
        <Table start={14} end={19} title="Čtvrtek" disabled={disabled}>
            <DayProvider value="čtvrtek">
                <TableRow color="copper">
                    <Field
                        name="med-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.1542423670"
                    />
                </TableRow>
                <TableRow color="green">
                    <Field
                        name="korale-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.452340918"
                    />
                </TableRow>
                <TableRow color="red">
                    <Field
                        name="hreben-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.9168815"
                    />
                </TableRow>
                {/*
                <TableRow color="purple">
                    <Field
                        name="karetky-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.1571115649"
                    />
                </TableRow>
                */}
                <TableRow color="goldenrod">
                    <Field
                        name="lucerna-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.1326052548"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="nuz-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Nůž"
                        price={NUZ_SAM}
                        id="entry.1293471047"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="pochva-ct"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Pochva"
                        price={POCHVA_SAMA}
                        id="entry.314434707"
                    />
                </TableRow>
            </DayProvider>
        </Table>
        <Table start={14} end={19} title="Pátek" disabled={disabled}>
            <DayProvider value="pátek">
                <TableRow color="copper">
                    <Field
                        name="med-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Měděné výrobky"
                        price={MED}
                        id="entry.1975992836"
                    />
                </TableRow>
                <TableRow color="green">
                    <Field
                        name="korale-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Korálky"
                        price={KORALE}
                        id="entry.1717436506"
                    />
                </TableRow>
                <TableRow color="red">
                    <Field
                        name="hreben-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Tkaní"
                        price={TKANI}
                        id="entry.1028123903"
                    />
                </TableRow>
                {/*
                <TableRow color="purple">
                    <Field
                        name="karetky-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Karetkování"
                        price={KARETKY}
                        id="entry.526705587"
                    />
                </TableRow>
                */}
                <TableRow color="goldenrod">
                    <Field
                        name="lucerna-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Lucerna"
                        price={LUCERNA}
                        id="entry.779083551"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="nuz-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Nůž"
                        price={NUZ_SAM}
                        id="entry.1197471540"
                    />
                </TableRow>
                <TableRow color="steel">
                    <Field
                        name="pochva-pa"
                        start={14}
                        end={18.5}
                        component={TimeSlotInput}
                        label="Pochva"
                        price={POCHVA_SAMA}
                        id="entry.304276660"
                    />
                </TableRow>
            </DayProvider>
        </Table>
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
                {/*
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
                */}
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
