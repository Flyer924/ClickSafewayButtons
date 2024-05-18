// ==UserScript==
// @name         Click Safeway For U Buttons
// @namespace    https://www.safeway.com
// @version      2024-05-18
// @description  Click all Safeway For U buttons
// @author       Trace Houser
// @match        https://www.safeway.com/foru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

'use strict';
//Keep track of number of buttons clicked
let clipButtonsCount = 0;
//Create div to insert after header bar (to display information)
let newDiv = document.createElement("div");
//Get the header bar
let menuNav = document.getElementsByClassName("menu-nav__content")[0];

function clickButtonsFunc() {
    //Get and click all load buttons (there will probably only be one at a time)
    let loadMoreButtons = document.getElementsByClassName("btn load-more");
    for (let i = 0; i < loadMoreButtons.length; i++) {
        loadMoreButtons[i].click();
    }
    //Get and click all clip buttons
    let clipButtons = document.getElementsByClassName("btn btn-md btn-primary w-100 p-0");
    for (let i = 0; i < clipButtons.length; i++) {
        clipButtons[i].click();
        clipButtonsCount += 1;
    }
    //Update the header bar div text
    newDiv.innerText = `Clicked ${clipButtonsCount} clip buttons`;
    menuNav.insertAdjacentElement('afterEnd', newDiv);
}

const interval = setInterval(function (data) {
    clickButtonsFunc();
}, 3000);

