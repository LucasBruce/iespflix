// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as CryptoJS from 'crypto-js';

const tokenFromUI = "0123456789123456";
const urlApi = 'http://localhost:3002/usuarios';
const _key = CryptoJS.enc.Utf8.parse(tokenFromUI);
const _iv = CryptoJS.enc.Utf8.parse(tokenFromUI);
export const environment = {
  production: false,
  urlApi,
  _key,
  _iv
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
