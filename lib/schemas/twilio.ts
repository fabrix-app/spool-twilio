import * as joi from 'joi'

export const twilio = joi.object().keys({
  accountSid: joi.string().required(),
  authToken: joi.string().required(),
  from: joi.string().required()
})
