import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

document.addEventListener("DOMContentLoaded", function() {
    // add ripple to button
    MDCRipple.attachTo(document.querySelector('.mdc-button'));

    // add scroll target
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');  
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    topAppBar.setScrollTarget(document.getElementById('content'));

    // add smooth scroll
});
