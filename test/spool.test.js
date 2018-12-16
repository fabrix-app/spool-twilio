'use strict'

const assert = require('assert')

describe('Fabrix TwilioSpool', () => {
  let spool
  before(() => {
    spool = global.app.spools.twilio
  })
  it('should be loaded into the app.packs collection', () => {
    assert(spool)
  })
})
