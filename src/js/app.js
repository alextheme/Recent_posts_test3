/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-undef */
// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
if (GLOBAL_VARS.projectDevStatus) {
	pageWidgetInit();
	console.log(process.env.NODE_ENV);
}
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
};

const loadFunc = () => {
	console.log('page load');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});

// (function (window, document) {
// 	let file = 'i/symbol_sprite.html';
// 	let revision = 1;

// 	if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) { return true; }

// 	let isLocalStorage = 'localStorage' in window && window.localStorage !== null;
// 	let request;
// 	let data;
// 	let insertIT = function () {
// 		document.body.insertAdjacentHTML('afterbegin', data);
// 	};
// 	let insert = function () {
// 		if (document.body) insertIT();
// 		else document.addEventListener('DOMContentLoaded', insertIT);
// 	};

// 	if (isLocalStorage && localStorage.getItem('inlineSVGrev') === revision) {
// 		data = localStorage.getItem('inlineSVGdata');
// 		if (data) {
// 			insert();
// 			return true;
// 		}
// 	}

// 	try {
// 		request = new XMLHttpRequest();
// 		request.open('GET', file, true);
// 		request.onload = function () {
// 			if (request.status >= 200 && request.status < 400) {
// 				data = request.responseText;
// 				insert();
// 				if (isLocalStorage) {
// 					localStorage.setItem('inlineSVGdata', data);
// 					localStorage.setItem('inlineSVGrev', revision);
// 				}
// 			}
// 		};
// 		request.send();
// 	} catch (e) {}
// }(window, document));
