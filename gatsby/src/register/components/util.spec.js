import {splitTime} from './util';

describe('splitTime helper', () => {
    it('does not split whole hour', () => {
        splitTime(4, 5).should.deep.equal([{start: 4, end: 5}]);
    });
    it('splits more whole hours into the same number of consecutive segments', () => {
        splitTime(3, 6).should.deep.equal([{start: 3, end: 4}, {start: 4, end: 5}, {start: 5, end: 6}]);
    });
    it('does not split hour open on left', () => {
        splitTime(2.5, 3).should.deep.equal([{start: 2.5, end: 3}]);
    });
    it('does not split hour open on right', () => {
        splitTime(2, 2.4).should.deep.equal([{start: 2, end: 2.4}]);
    });
    it('splits open interval around hour mark', () => {
        splitTime(2.4, 3.2).should.deep.equal([{start: 2.4, end: 3}, {start: 3, end: 3.2}]);
    });
    it('splits long open interval', () => {
        splitTime(2.4, 4.5).should.deep.equal([{start: 2.4, end: 3}, {start: 3, end: 4}, {start: 4, end: 4.5}]);
    });
    it('throws if interval is degenerated', () => {
        (() => splitTime(3, 3)).should.throw();
    });
    it('throws if interval is invalid', () => {
        (() => splitTime(3, 2)).should.throw();
    });
});
