import { expect } from 'chai';

import { getSymbolObservable } from '../../src/internal/symbol/observable';

describe('observable symbol', () => {
  it('should exist in the proper form when Symbol does not exist', () => {
    let $$observable = getSymbolObservable({Symbol: undefined});
    expect($$observable).to.equal('@@observable');
  });
});
