import * as $ from 'jquery';
// import 'bootstrap';
// import 'daterangepicker';
import 'flickity';
import 'lightbox2';
import "lightgallery";
import "accordion";
var flickity = require('flickity');
var moment = require('moment');
import 'flickity-fullscreen';

/**
 * Styles
 */
import '../scss/index.scss';

/**
 * Modules
 */

// import { custom } from './custom';
import { menuScroll } from './scroll';
import { table } from '../components/comp/c-table/c-table';
// import { galeria } from './lightGallery';

/**
 * Init
 */

// custom(flickity);
menuScroll();
table();
// galeria();