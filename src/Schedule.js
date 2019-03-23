import React from 'react';
import {TableRow, Table, TimeSlot, ScheduleContainer} from 'components';

export default () => (
    <ScheduleContainer>
        <Table start={9} end={20} title="Sobota">
            <TableRow color="copper">
                <TimeSlot start={9} end={14}>Měď 1</TimeSlot>
                <TimeSlot start={15} end={20}>Měď 2</TimeSlot>
            </TableRow>
            <TableRow color="purple">
                <TimeSlot start={9} end={12}>Korálky 1</TimeSlot>
                <TimeSlot start={13} end={16}>Korálky 2</TimeSlot>
                <TimeSlot start={17} end={20}>Korálky 3</TimeSlot>
            </TableRow>
            <TableRow color="green">
                <TimeSlot start={9} end={14}>Tkaní 1</TimeSlot>
                <TimeSlot start={15} end={20}>Tkaní 2</TimeSlot>
            </TableRow>
            <TableRow>
                <TimeSlot start={9} end={14}>Lucerna 1</TimeSlot>
                <TimeSlot start={15} end={20}>Lucerna 2</TimeSlot>
            </TableRow>
            <TableRow color="steel">
                <TimeSlot start={9} end={17}>Nůž a pochva</TimeSlot>
            </TableRow>
        </Table>
        <Table start={9} end={15} title="Neděle">
            <TableRow color="copper">
                <TimeSlot start={9} end={14}>Měď 3</TimeSlot>
            </TableRow>
            <TableRow color="purple">
                <TimeSlot start={9} end={12}>Korálky 4</TimeSlot>
                <TimeSlot start={12} end={15}>Korálky 5</TimeSlot>
            </TableRow>
            <TableRow color="green">
                <TimeSlot start={9} end={14}>Tkaní 3</TimeSlot>
            </TableRow>
            <TableRow>
                <TimeSlot start={9} end={14}>Lucerna 3</TimeSlot>
            </TableRow>
            <TableRow color="steel" />
        </Table>
    </ScheduleContainer>
);
