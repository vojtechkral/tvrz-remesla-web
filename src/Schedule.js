import React from 'react';
import {Field} from 'redux-form';
import {TableRow, Table, ScheduleContainer} from 'components';
import {TimeSlotInput} from 'containers';

export default () => (
    <ScheduleContainer>
        <Table start={9} end={20} title="Sobota">
            <TableRow color="copper">
                <Field
                    name="med1"
                    start={9}
                    end={14}
                    component={TimeSlotInput}
                    label="Měděné výrobky"
                />
                <Field
                    name="med2"
                    start={15}
                    end={20}
                    component={TimeSlotInput}
                    label="Měděné výrobky"
                />
            </TableRow>
            <TableRow color="green">
                <Field
                    name="korale1"
                    start={9}
                    end={12}
                    component={TimeSlotInput}
                    label="Korálky"
                />
                <Field
                    name="korale2"
                    start={13}
                    end={16}
                    component={TimeSlotInput}
                    label="Korálky"
                />
                <Field
                    name="korale3"
                    start={17}
                    end={20}
                    component={TimeSlotInput}
                    label="Korálky"
                />
            </TableRow>
            <TableRow color="red">
                <Field
                    name="tkani1"
                    start={9}
                    end={14}
                    component={TimeSlotInput}
                    label="Tkaní"
                />
                <Field
                    name="tkani2"
                    start={15}
                    end={20}
                    component={TimeSlotInput}
                    label="Tkaní"
                />
            </TableRow>
            <TableRow>
                <Field
                    name="lucerna1"
                    start={9}
                    end={14}
                    component={TimeSlotInput}
                    label="Lucerna"
                />
                <Field
                    name="lucerna2"
                    start={15}
                    end={20}
                    component={TimeSlotInput}
                    label="Lucerna"
                />
            </TableRow>
            <TableRow color="steel">
                <Field
                    name="nuz"
                    start={9}
                    end={17}
                    component={TimeSlotInput}
                    label="Nůže a pochva"
                />
            </TableRow>
        </Table>
        <Table start={9} end={15} title="Neděle">
            <TableRow color="copper">
                <Field
                    name="med3"
                    start={9}
                    end={14}
                    component={TimeSlotInput}
                    label="Měděné výrobky"
                />
            </TableRow>
            <TableRow color="green">
                <Field
                    name="korale4"
                    start={9}
                    end={12}
                    component={TimeSlotInput}
                    label="Korálky"
                />
                <Field
                    name="korale5"
                    start={12}
                    end={15}
                    component={TimeSlotInput}
                    label="Korálky"
                />
            </TableRow>
            <TableRow color="red">
                <Field
                    name="tkani3"
                    start={9}
                    end={14}
                    component={TimeSlotInput}
                    label="Tkaní"
                />
            </TableRow>
            <TableRow>
                <Field
                    name="lucerna3"
                    start={9}
                    end={14}
                    component={TimeSlotInput}
                    label="Lucerna"
                />
            </TableRow>
            <TableRow color="steel" />
        </Table>
    </ScheduleContainer>
);
