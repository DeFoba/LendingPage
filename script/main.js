"use strict";

const header_element = document.getElementsByTagName('header')[0]


var is_scroll_top = true;
var last_scroll = window.scrollY;

document.addEventListener('scroll', (event) => {
    if (window.scrollY > last_scroll) {
        header_element.className = 'opacity-header';
    } else {
        header_element.className = '';
    }
    window.last_scroll = window.scrollY;
});