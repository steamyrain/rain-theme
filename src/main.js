import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';
import cv from './docs/cv_latest.pdf';

document.addEventListener("DOMContentLoaded", function() {
    // add ripple to button
    // MDCRipple.attachTo(document.querySelector('.mdc-button'));

    // add scroll target
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');  
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    topAppBar.setScrollTarget(document.getElementById('content'));

    // default box shadow for app bar
    document.documentElement.style.setProperty('--o',0)

    // onscroll function
    window.onscroll = function() {elevateAppBar()};

    function elevateAppBar() {
        // box shadow opacity transition
        var appBarHeight = 0;
        var smMin1 = window.matchMedia("(max-width: 599px)");
        var sm = window.matchMedia("(min-width: 600px)");
        if (smMin1.matches) {
            appBarHeight = 56;
        } else if (sm.matches) {
            appBarHeight = 64;
        }
        if (window.pageYOffset > 0) {
            document.documentElement.style.setProperty('--o',1);
        } else {
            document.documentElement.style.setProperty('--o',0);
        }
    }

    // select button cv
    const dButton = document.getElementById('cv');
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href',cv);
    downloadAnchor.setAttribute('download','cv_reinhard.pdf');
    downloadAnchor.style.display = 'none';
    dButton.onclick = function() {
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    };
 
    // TODO: add smooth scroll
});
