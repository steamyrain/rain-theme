import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

document.addEventListener("DOMContentLoaded", function() {
    // add ripple to button
    MDCRipple.attachTo(document.querySelector('.mdc-button'));

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
 
    // TODO: add smooth scroll
});
