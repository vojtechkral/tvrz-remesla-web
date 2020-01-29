import invariant from 'invariant';

export const splitTime = (start, end) => {
    invariant(end > start, `End of time interval must be strictly greater than its start. Interval ${start}->${end}`);

    const min = Math.floor(start);
    const length = Math.ceil(end) - min;
    const seq = Array.from({length}).map((_, i) => ({start: i + min, end: i + min + 1}));
    seq[0].start = start;
    seq[seq.length - 1].end = end;
    return seq;
};

export const formatTime = (time) => {
    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);
    return `${hours}:${String(minutes).padStart(2, '0')}`;
};
