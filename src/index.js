import './sass/main.scss';
import './js/refs';
import './js/api-service';
import './js/scroll';
// import icons from '.material-design-icons';
// console.log(icons)
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Opps!'
});





