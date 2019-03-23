import React from 'react';
import {Table, TimeSlot, TableRow} from 'components';

export default () => (
    <Table start={9} end={20} title="Sobota">
        <TableRow>
            <TimeSlot start={9} end={14} active>Měď 1: Přihlášen</TimeSlot>
            <TimeSlot start={15} end={20} disabled>Měď 2</TimeSlot>
        </TableRow>
        <TableRow>
            <TimeSlot start={9} end={12}>Korále 1</TimeSlot>
            <TimeSlot start={13} end={16}>Korále 2</TimeSlot>
            <TimeSlot start={17} end={20}>Korále 3</TimeSlot>
        </TableRow>
    </Table>
);
