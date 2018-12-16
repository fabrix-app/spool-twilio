'use strict'

import { Spool } from '@fabrix/fabrix/dist/common'
import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api from './api/index'


export class TwilioSpool extends Spool {
  constructor (app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
  }

  /**
   * Validate twilio config
   */
  validate () {
    return Promise.all([
      Validator.validateConfig(this.app.config.get('twilio'))
    ])
  }


}

