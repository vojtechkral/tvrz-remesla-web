import {doIntervalsIntersect} from './utils';

describe('do interval intersect', () => {
    const i = (start, end) => ({start, end});
    it('returns false for disjoint intervals in order', () => {
        doIntervalsIntersect(i(1, 2), i(3, 4)).should.be.false();
    });
    it('returns false for disjoint intervals out of order ', () => {
        doIntervalsIntersect(i(3, 4), i(1, 2)).should.be.false();
    });
    it('returns true for overlapping intervals in order', () => {
        doIntervalsIntersect(i(1, 3), i(2, 4)).should.be.true();
    });
    it('returns true for overlapping intervals out of order', () => {
        doIntervalsIntersect(i(2, 4), i(1, 3)).should.be.true();
    });
    it('returns false for adjacent intervals in order', () => {
        doIntervalsIntersect(i(1, 2), i(2, 3)).should.be.false();
    });
    it('returns false for adjacent intervals out of order', () => {
        doIntervalsIntersect(i(2, 3), i(1, 2)).should.be.false();
    });
    it('returns true for identical intervals', () => {
        doIntervalsIntersect(i(1, 2), i(1, 2)).should.be.true();
    });
});
