'use strict';

describe('CommonJS entrypoints', () => {
  it('loads the reporter entrypoint via require', () => {
    expect(() => require('..')).not.toThrow();
  });

  it('loads getOptions via require', () => {
    expect(() => require('../utils/getOptions')).not.toThrow();
  });
});
