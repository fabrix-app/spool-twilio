# spool-twilio

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

Twilio Spool for sending SMS messages


## Install
```sh
$ npm install @fabrix/spool-twilio --save
```

## Configure

Add TwilioSpool to your Fabrix App:
```js
// config/main.ts
export const main = {
  spools: [
    // ... other spool
    require('@fabrix/spool-twilio').TwilioSpool
  ]
}
```

Add configuration for twilio: 
```js
// config/twilio.ts
export const twilio = {
  /**
   * The "account sid" associated with your Twilio account.
   */
  accountSid: null,
  /**
   * The "auth token" associated with your Twilio account.
   */
  authToken: null,
  /**
   * This is the 'From' phone number you'd like to use to send the SMS.
   */
  from: null
}
```

## Usage
Use the `TwilioService` like this (from controllers/policies/services) : 
```js
//Send basic SMS
this.app.services.TwilioService.sendSMSTo('toNumber', 'message to send').then(response => {
         this.app.log.debug('ok')
       }).catch(err => {
         this.app.log.error(err)
       })
       
//Send basic SMS with media URL
this.app.services.TwilioService.sendSMSTo('toNumber', 'message to send', {mediaUrl: 'http://myurl.fr'}).then(response => {
         this.app.log.debug('ok')
       }).catch(err => {
         this.app.log.error(err)
       })

```

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/.github/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/fabrix-app/spool-twilio/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-twilio.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-twilio
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-twilio/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-twilio/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-twilio.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-twilio
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-twilio.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-twilio/coverage
