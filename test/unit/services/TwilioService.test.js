'use strict'
/* global describe, it */
const assert = require('assert')

describe('TwilioService', () => {
  it('should exist', () => {
    assert(global.app.api.services['TwilioService'])
    assert(global.app.services['TwilioService'])
    assert(global.app.services['TwilioService'].sendSMSTo)
  })
})
