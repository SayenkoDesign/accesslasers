(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/project"],{

/***/ "./assets/js/loader/ModuleLoader.js":
/*!******************************************!*\
  !*** ./assets/js/loader/ModuleLoader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModuleLoader =
/*#__PURE__*/
function () {
  function ModuleLoader(modules) {
    _classCallCheck(this, ModuleLoader);

    this.modules = modules;
  }

  _createClass(ModuleLoader, [{
    key: "init",
    value: function init() {
      var modules = this.modules;
      Object.keys(modules).forEach(function (key) {
        modules[key].init();
      });
    }
  }]);

  return ModuleLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModuleLoader);

/***/ }),

/***/ "./assets/js/modules/accordion-fix.js":
/*!********************************************!*\
  !*** ./assets/js/modules/accordion-fix.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function (event, newSize, oldSize) {
      if (foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"].atLeast('xlarge')) {// new Foundation.Accordion('.accordion');
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/modules/background-video.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/background-video.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var players = {};

function initPlayer(i, el) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).children('.overlay').hover(function (e) {
    e.stopPropagation();
  });
  players[i] = new YT.Player(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.player')[0], {
    height: '1080',
    width: '1920',
    videoId: jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('youtube-id'),
    playerVars: {
      'controls': 0,
      'autoplay': 1,
      'mute': 1,
      'loop': 1,
      'showinfo': 0,
      'modestbranding': 1
    },
    events: {
      'onReady': onVideoPlayerReady,
      'onStateChange': onVideoPlayerReady
    }
  });
}

function onVideoPlayerReady(event) {
  event.target.playVideo();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api'; // Inserts YouTube JS code into the page.

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var players = {};

    window.onYouTubeIframeAPIReady = function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-background-video').map(function (i, el) {
        initPlayer(i, el);
      });
    };
  }
});

/***/ }),

/***/ "./assets/js/modules/external-links.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/external-links.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('a').not('svg a, [href*="mailto:"], [href*="tel:"], [class*="foobox"]').each(function () {
      var isInternalLink = new RegExp('/' + window.location.host + '/');

      if (!isInternalLink.test(this.href)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('target', '_blank');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('a[href*=".pdf"]').attr('target', '_blank');
  }
});

/***/ }),

/***/ "./assets/js/modules/fixed-header.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/fixed-header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("scroll", function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 100) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sticky-header .site-header").addClass("fixed");
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sticky-header .site-header").removeClass("fixed");
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/modules/foundation.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/foundation.js ***!
  \*****************************************/
/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Accordion, AccordionMenu, DropdownMenu, Equalizer, ResponsiveMenu, ResponsiveToggle, Reveal, SmoothScroll, Tabs, Toggler, ResponsiveAccordionTabs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation.core */ "./node_modules/foundation-sites/js/foundation.core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Foundation", function() { return foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]; });

/* harmony import */ var foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation.core.utils */ "./node_modules/foundation-sites/js/foundation.core.utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CoreUtils", function() { return foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var foundation_sites_js_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation.util.box */ "./node_modules/foundation-sites/js/foundation.util.box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return foundation_sites_js_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"]; });

/* harmony import */ var foundation_sites_js_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! foundation-sites/js/foundation.util.imageLoader */ "./node_modules/foundation-sites/js/foundation.util.imageLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onImagesLoaded", function() { return foundation_sites_js_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"]; });

/* harmony import */ var foundation_sites_js_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation.util.keyboard */ "./node_modules/foundation-sites/js/foundation.util.keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return foundation_sites_js_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]; });

/* harmony import */ var foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites/js/foundation.util.mediaQuery */ "./node_modules/foundation-sites/js/foundation.util.mediaQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]; });

/* harmony import */ var foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! foundation-sites/js/foundation.util.motion */ "./node_modules/foundation-sites/js/foundation.util.motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"]; });

/* harmony import */ var foundation_sites_js_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! foundation-sites/js/foundation.util.nest */ "./node_modules/foundation-sites/js/foundation.util.nest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nest", function() { return foundation_sites_js_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"]; });

/* harmony import */ var foundation_sites_js_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! foundation-sites/js/foundation.util.timer */ "./node_modules/foundation-sites/js/foundation.util.timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return foundation_sites_js_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; });

/* harmony import */ var foundation_sites_js_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! foundation-sites/js/foundation.util.touch */ "./node_modules/foundation-sites/js/foundation.util.touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return foundation_sites_js_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"]; });

/* harmony import */ var foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! foundation-sites/js/foundation.util.triggers */ "./node_modules/foundation-sites/js/foundation.util.triggers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triggers", function() { return foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"]; });

/* harmony import */ var foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! foundation-sites/js/foundation.accordion */ "./node_modules/foundation-sites/js/foundation.accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_12__["Accordion"]; });

/* harmony import */ var foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! foundation-sites/js/foundation.accordionMenu */ "./node_modules/foundation-sites/js/foundation.accordionMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionMenu", function() { return foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_13__["AccordionMenu"]; });

/* harmony import */ var foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! foundation-sites/js/foundation.dropdownMenu */ "./node_modules/foundation-sites/js/foundation.dropdownMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownMenu"]; });

/* harmony import */ var foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! foundation-sites/js/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation.equalizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Equalizer", function() { return foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_15__["Equalizer"]; });

/* harmony import */ var foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! foundation-sites/js/foundation.responsiveMenu */ "./node_modules/foundation-sites/js/foundation.responsiveMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenu", function() { return foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_16__["ResponsiveMenu"]; });

/* harmony import */ var foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! foundation-sites/js/foundation.responsiveToggle */ "./node_modules/foundation-sites/js/foundation.responsiveToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggle", function() { return foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_17__["ResponsiveToggle"]; });

/* harmony import */ var foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! foundation-sites/js/foundation.reveal */ "./node_modules/foundation-sites/js/foundation.reveal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reveal", function() { return foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_18__["Reveal"]; });

/* harmony import */ var foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! foundation-sites/js/foundation.smoothScroll */ "./node_modules/foundation-sites/js/foundation.smoothScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_19__["SmoothScroll"]; });

/* harmony import */ var foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! foundation-sites/js/foundation.tabs */ "./node_modules/foundation-sites/js/foundation.tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__["Tabs"]; });

/* harmony import */ var foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! foundation-sites/js/foundation.toggler */ "./node_modules/foundation-sites/js/foundation.toggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__["Toggler"]; });

/* harmony import */ var foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! foundation-sites/js/foundation.responsiveAccordionTabs */ "./node_modules/foundation-sites/js/foundation.responsiveAccordionTabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAccordionTabs", function() { return foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_22__["ResponsiveAccordionTabs"]; });












 // import { Abide } from 'foundation-sites/js/foundation.abide';


 // import { Drilldown } from 'foundation-sites/js/foundation.drilldown';
// import { Dropdown } from 'foundation-sites/js/foundation.dropdown';


 // import { Interchange } from 'foundation-sites/js/foundation.interchange';
// import { Magellan } from 'foundation-sites/js/foundation.magellan';
// import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
// import { Orbit } from 'foundation-sites/js/foundation.orbit';



 // import { Slider } from 'foundation-sites/js/foundation.slider';

 // import { Sticky } from 'foundation-sites/js/foundation.sticky';


 // import { Tooltip } from 'foundation-sites/js/foundation.tooltip';


foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].rtl = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["rtl"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].GetYoDigits = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].transitionend = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["transitionend"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].RegExpEscape = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["RegExpEscape"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onLoad = foundation_sites_js_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Box = foundation_sites_js_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__["Box"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onImagesLoaded = foundation_sites_js_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__["onImagesLoaded"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Keyboard = foundation_sites_js_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__["Keyboard"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].MediaQuery = foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Motion = foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Motion"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Move = foundation_sites_js_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__["Move"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Nest = foundation_sites_js_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__["Nest"];
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Timer = foundation_sites_js_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__["Timer"]; // Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.

foundation_sites_js_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__["MediaQuery"]._init(); // Foundation.plugin(Abide, 'Abide');


foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_12__["Accordion"], 'Accordion');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_13__["AccordionMenu"], 'AccordionMenu'); // Foundation.plugin(Drilldown, 'Drilldown');
// Foundation.plugin(Dropdown, 'Dropdown');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownMenu"], 'DropdownMenu'); // Foundation.plugin(Equalizer, 'Equalizer');
// Foundation.plugin(Interchange, 'Interchange');
// Foundation.plugin(Magellan, 'Magellan');
// Foundation.plugin(OffCanvas, 'OffCanvas');
// Foundation.plugin(Orbit, 'Orbit');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_16__["ResponsiveMenu"], 'ResponsiveMenu');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_17__["ResponsiveToggle"], 'ResponsiveToggle');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_18__["Reveal"], 'Reveal'); // Foundation.plugin(Slider, 'Slider');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_19__["SmoothScroll"], 'SmoothScroll'); // Foundation.plugin(Sticky, 'Sticky');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__["Tabs"], 'Tabs');
foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__["Toggler"], 'Toggler'); // Foundation.plugin(Tooltip, 'Tooltip');

foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].plugin(foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_22__["ResponsiveAccordionTabs"], 'ResponsiveAccordionTabs');

/* harmony default export */ __webpack_exports__["default"] = (foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]);

/***/ }),

/***/ "./assets/js/modules/full-screen-scrolling-section.js":
/*!************************************************************!*\
  !*** ./assets/js/modules/full-screen-scrolling-section.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    var fullScreenScrollingSectionVars = {
      content_break_point: "1200",
      container_hundred_percent_height_mobile: "0",
      is_sticky_header_ignored: "0"
    };

    function getStickyHeaderHeight(a) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(".site-header.fixed").outerHeight();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).load(function () {
      // Check if page is already loaded scrolled, without anchor scroll script. If so, move to beginning of correct scrolling section.
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").find(".full-screen-scroll-section").length && "undefined" === typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-page-load-link").attr("href")) {
        setTimeout(function () {
          scrollToCurrentScrollSection();
        }, 400);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
      var mainContentScrollSections = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").find(".full-screen-scroll-section"),
          lastYPosition,
          onlyOneScrollSectionOnPage,
          stickyHeaderHeight = !Boolean(Number(fullScreenScrollingSectionVars.is_sticky_header_ignored)) && "function" === typeof getStickyHeaderHeight ? getStickyHeaderHeight(true) : 0,
          adminbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").length ? parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").height(), 10) : 0,
          sectionTopOffset = stickyHeaderHeight + adminbarHeight,
          overallSectionHeight; // Check if there are 100% height scroll sections.

      if (mainContentScrollSections.length) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").find(".non-hundred-percent-height-scrolling").length && 1 === mainContentScrollSections.length && !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sliders-container").html())) {} // uncomment if you only want full height scrolling sections on page
        //mainContentScrollSections.addClass( 'active' );
        //mainContentScrollSections.find( '.full-screen-scroll-section-nav li:first a' ).addClass( 'active' );
        //onlyOneScrollSectionOnPage = true;
        // Set correct heights for the wrapping scroll sections and individual scroll elements, based on the number of elements, sticky header and admin bar.


        mainContentScrollSections.each(function () {
          if (1 < jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("div").length) {
            overallSectionHeight = sectionTopOffset ? "calc(" + (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("div").size() * 100 + 50) + "vh - " + sectionTopOffset + "px)" : jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("div").size() * 100 + 50 + "vh"; // Set correct height for the wrapping scroll section.

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("height", overallSectionHeight); // Set the correct height offset per section and also for the nav.

            if (sectionTopOffset) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".hundred-percent-height-scrolling").css("height", "calc(100vh - " + sectionTopOffset + "px)");
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".full-screen-scroll-section-nav").css("top", "calc(50% + " + sectionTopOffset / 2 + "px)");
            }
          }
        }); // Set the last scroll position to the initial loading value.

        lastYPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
          var currentYPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(); // Position the elements of a scroll section correctly.

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").each(function () {
            if (1 < jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("div").length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("full-screen-scroll-section-mobile-disabled")) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fullScreenPositionScrollSectionElements(lastYPosition, currentYPosition, onlyOneScrollSectionOnPage);
            }
          });
          lastYPosition = currentYPosition;
        }); // Set the "active" class to the correct scroll nav link and the correct section element.

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section-link").on("click", function (e) {
          var scrollSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".full-screen-scroll-section"),
              numberOfLastActive = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".full-screen-scroll-section-nav").find(".full-screen-scroll-section-link.active").data("element"), 10),
              numberOfNewActive = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("element"), 10),
              numberOfScrolledElements = Math.abs(numberOfNewActive - numberOfLastActive),
              scrollAnimationTime = (350 + 30 * (numberOfScrolledElements - 1)) * numberOfScrolledElements;
          e.preventDefault(); // If slide is already active, do nothing.

          if (0 === numberOfScrolledElements) {
            return;
          }

          if (20 < numberOfScrolledElements) {
            scrollAnimationTime = (350 + 30 * 20) * numberOfScrolledElements;
          } // Add active class to the correct section element.


          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(".full-screen-scroll-section").find(".full-screen-scroll-section-element").removeClass("active"); // Scroll to correct position of current section.

          jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
            scrollTop: Math.ceil(scrollSection.offset().top) + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("element") - 1)
          }, scrollAnimationTime, "linear");
        });
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hundred-percent-height").length) {
        setCorrectResizeValuesForScrollSections();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("resize", function () {
          setCorrectResizeValuesForScrollSections();
        });
      }
    });

    function setCorrectResizeValuesForScrollSections() {
      var mainContentScrollSections = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").find(".full-screen-scroll-section"),
          stickyHeaderHeight = 0,
          stickyHeaderHeight = 0,
          sectionTopOffset = 0,
          adminbarHeight = 0; // Check if there are 100% height scroll sections.

      if (mainContentScrollSections.length) {
        // Resize the fixed containers, to fit the correct area.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section.active").find(".full-screen-scroll-section-element").css({
          left: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").offset().left
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").find(".full-screen-scroll-section-element").css({
          width: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").width()
        });

        if (0 == fullScreenScrollingSectionVars.container_hundred_percent_height_mobile) {
          // jshint ignore:line
          // Mobile view.
          if (Modernizr.mq("only screen and (max-width: " + fullScreenScrollingSectionVars.content_break_point + "px)")) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").removeClass("active").addClass("full-screen-scroll-section-mobile-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").attr("style", "");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").find(".full-screen-scroll-section-element").attr("style", "");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").find(".hundred-percent-height-scrolling").css("height", "auto");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").find(".fullwidth-center-content").css("height", "auto");
          } else {
            // Desktop view.
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").hasClass("full-screen-scroll-section-mobile-disabled")) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").find(".fullwidth-center-content").css("height", "");

              if (!Boolean(Number(fullScreenScrollingSectionVars.is_sticky_header_ignored)) && "function" === typeof getStickyHeaderHeight) {
                stickyHeaderHeight = getStickyHeaderHeight(true);
              }

              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").length) {
                adminbarHeight = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").height(), 10);
              }

              sectionTopOffset = stickyHeaderHeight + adminbarHeight; // Set correct heights for the wrapping scroll sections, based on the number of elements.

              mainContentScrollSections.each(function () {
                if (1 < jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("div").length) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("height", jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children("div").size() * 100 + 50 + "vh");
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".hundred-percent-height-scrolling").css("height", "calc(100vh - " + sectionTopOffset + "px)");
                }
              });
              scrollToCurrentScrollSection();
            }
          }
        }
      } // Special handling of 100% height containers without scrolling sections.


      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hundred-percent-height.non-hundred-percent-height-scrolling").length) {
        if (!Boolean(Number(fullScreenScrollingSectionVars.is_sticky_header_ignored)) && "function" === typeof getStickyHeaderHeight) {
          stickyHeaderHeight = getStickyHeaderHeight(true);
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").length) {
          adminbarHeight = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").height(), 10);
        }

        sectionTopOffset = stickyHeaderHeight + adminbarHeight;

        if (0 == fullScreenScrollingSectionVars.container_hundred_percent_height_mobile) {
          // jshint ignore:line
          // Mobile view.
          if (Modernizr.mq("only screen and (max-width: " + fullScreenScrollingSectionVars.content_break_point + "px)")) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height", "auto");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fullwidth-center-content").css("height", "auto");
          } else {
            // Desktop view.
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height", "calc(100vh - " + sectionTopOffset + "px)");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fullwidth-center-content").css("height", "");
          }
        }
      }
    }

    function scrollToCurrentScrollSection() {
      var currentScrollPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(),
          // jshint ignore:line
      viewportTop = Math.ceil(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop()),
          viewportHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height(),
          viewportBottom = Math.floor(viewportTop + viewportHeight),
          stickyHeaderHeight = !Boolean(Number(fullScreenScrollingSectionVars.is_sticky_header_ignored)) && "function" === typeof getStickyHeaderHeight ? getStickyHeaderHeight(true) : 0,
          adminbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").length ? parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#wpadminbar").height(), 10) : 0;
      viewportTop += stickyHeaderHeight + adminbarHeight; // Get the scroll section in view, but only if not while loading when a one page scroll link is present.

      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-page-load-link").hasClass("load-scroll-section-link")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").each(function () {
          var section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
              sectionTop = Math.ceil(section.offset().top),
              sectionHeight = Math.ceil(section.outerHeight()),
              sectionBottom = Math.floor(sectionTop + sectionHeight); // Scrolled position is inside a scroll section.

          if (sectionTop <= viewportTop && sectionBottom >= viewportBottom) {
            section.addClass("active"); // Scroll to beginning position of correct section.

            jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
              scrollTop: sectionTop - 50
            }, {
              duration: 50,
              easing: "easeInExpo",
              complete: function complete() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
                  scrollTop: sectionTop
                }, {
                  duration: 50,
                  easing: "easeOutExpo",
                  complete: function complete() {
                    // Remove the mobile disabling class if in desktop mode.
                    if (!Modernizr.mq("only screen and (max-width: " + fullScreenScrollingSectionVars.content_break_point + "px)")) {
                      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").removeClass("full-screen-scroll-section-mobile-disabled");
                    }
                  }
                });
              }
            });
          } else {
            // Added as this was breaking resize without it
            // Remove the mobile disabling class if in desktop mode.
            if (!Modernizr.mq("only screen and (max-width: " + fullScreenScrollingSectionVars.content_break_point + "px)")) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".full-screen-scroll-section").removeClass("full-screen-scroll-section-mobile-disabled");
            }
          }
        });
      }
    }

    (function ($) {
      "use strict";

      $.fn.fullScreenPositionScrollSectionElements = function (lastYPosition, currentYPosition, onlyOneScrollSectionOnPage) {
        var section = $(this),
            sectionTop = Math.ceil(section.offset().top),
            sectionHeight = Math.ceil(section.outerHeight()),
            sectionBottom = Math.floor(sectionTop + sectionHeight),
            viewportTop = Math.ceil($(window).scrollTop()),
            viewportHeight = $(window).height(),
            viewportBottom = Math.floor(viewportTop + viewportHeight),
            numberOfElements = section.find(".full-screen-scroll-section-element").length,
            currentSegment = 0,
            sectionWidth,
            sectionTopOffset,
            sectionLeftOffset,
            sectionPadding,
            i;
        onlyOneScrollSectionOnPage = onlyOneScrollSectionOnPage || false; // Top offset is 0 or wpadminbar height if no sticky header is used.

        sectionTopOffset = $("#wpadminbar").length ? parseInt($("#wpadminbar").height(), 10) : 0; // We have a non-transparent sticky header, so we need correct top offset.

        sectionTopOffset += !Boolean(Number(fullScreenScrollingSectionVars.is_sticky_header_ignored)) && "function" === typeof getStickyHeaderHeight ? getStickyHeaderHeight(true) : 0; // Add the sticky header offset to the viewpot top for calcs.

        viewportTop += sectionTopOffset; // Set the correct offsets for general use.

        sectionWidth = $("#content").width();
        sectionLeftOffset = $("#content").offset().left;
        sectionPadding = "0"; // Make sure there is more than one scroll section, otherwise the one will always be active.

        if (!onlyOneScrollSectionOnPage) {
          // Set the section to active if it is in viewport.
          if (sectionTop <= viewportTop && sectionBottom >= viewportBottom) {
            section.addClass("active");
          } else {
            section.removeClass("active");
          }
        } // Scrolling down.


        if (lastYPosition < currentYPosition) {
          // Get the current element by checking in which section segment the viewport top is.
          for (i = 1; i < numberOfElements; i++) {
            if (viewportTop >= sectionTop + viewportHeight * i && viewportTop < sectionTop + viewportHeight * (i + 1)) {
              currentSegment = i + 1;
            }
          } // First element comes into viewport.


          if (sectionTop <= viewportTop && sectionTop + viewportHeight > viewportTop) {
            // Set correct element to be active.
            section.find(".full-screen-scroll-section-element").removeClass("active");
            section.children(":nth-child(1)").addClass("active"); // Set correct navigation link to be active.

            section.find(".full-screen-scroll-section-nav a").removeClass("active");
            section.find('.full-screen-scroll-section-nav a[data-element="' + section.children(":nth-child(1)").data("element") + '"] ').addClass("active"); // When entering a scroll section all elements need to be positioned fixed and other values set depending on layout.

            section.find(".full-screen-scroll-section-element").css({
              position: "fixed",
              top: sectionTopOffset,
              left: sectionLeftOffset,
              padding: "0 " + sectionPadding,
              width: sectionWidth
            });
            section.children(":nth-child(1)").css("display", "block");
          } else if (sectionBottom <= viewportBottom && "absolute" !== section.find(".full-screen-scroll-section-element").last().css("position")) {
            // Last element is in viewport and it is scrolled further down, so exiting scroll section.
            section.find(".full-screen-scroll-section-element").removeClass("active");
            section.find(".full-screen-scroll-section-element").last().addClass("active");
            section.find(".full-screen-scroll-section-element").css("position", "absolute");
            section.find(".full-screen-scroll-section-element").last().css({
              top: "auto",
              left: "0",
              bottom: "0",
              padding: ""
            });
          } else if (0 < currentSegment && !section.children(":nth-child(" + currentSegment + ")").hasClass("active")) {
            // Transition between individual elements.
            // Set correct element to be active.
            section.find(".full-screen-scroll-section-element").removeClass("active");
            section.children(":nth-child(" + currentSegment + ")").addClass("active"); // Set correct navigation link to be active.

            section.find(".full-screen-scroll-section-nav a").removeClass("active");
            section.find('.full-screen-scroll-section-nav a[data-element="' + section.children(":nth-child(" + currentSegment + ")").data("element") + '"] ').addClass("active");
          }
        } else if (lastYPosition > currentYPosition) {
          // Scrolling up.
          // Get the current element by checking in which section segment the viewport top is.
          for (i = 1; i < numberOfElements; i++) {
            if (sectionTop + viewportHeight * i > viewportTop && sectionTop + viewportHeight * (i - 1) < viewportTop) {
              currentSegment = i;
            }
          } // Entering the last element of a scrolling section.


          if (sectionBottom >= viewportBottom && sectionTop + viewportHeight * (numberOfElements - 1) < viewportTop && "fixed" !== section.find(".full-screen-scroll-section-element").last().css("position")) {
            // Set correct element to be active.
            section.find(".full-screen-scroll-section-element").removeClass("active");
            section.find(".full-screen-scroll-section-element").last().addClass("active"); // Set correct navigation link to be active.

            section.find(".full-screen-scroll-section-nav a").removeClass("active");
            section.find('.full-screen-scroll-section-nav a[data-element="' + section.find(".full-screen-scroll-section-element").last().data("element") + '"] ').addClass("active"); // When entering a scroll section all elements need to be positioned fixed and other values set depending on layout.

            section.find(".full-screen-scroll-section-element").css({
              position: "fixed",
              top: sectionTopOffset,
              left: sectionLeftOffset,
              padding: "0 " + sectionPadding,
              width: sectionWidth
            });
            section.find(".full-screen-scroll-section-element").last().css("display", "block");
          } else if ((sectionTop >= viewportTop || 0 === $(window).scrollTop() && section.find(".full-screen-scroll-section-element").first().hasClass("active")) && "" !== section.find(".full-screen-scroll-section-element").first().css("position")) {
            // First element is in viewport and it is further scrolled up.
            section.find(".full-screen-scroll-section-element").removeClass("active");
            section.find(".full-screen-scroll-section-element").first().addClass("active");
            section.find(".full-screen-scroll-section-element").css("position", "");
            section.find(".full-screen-scroll-section-element").first().css("padding", "");
          } else if (0 < currentSegment && !section.children(":nth-child(" + currentSegment + ")").hasClass("active")) {
            // Transition between individual elements.
            // Set correct element to be active.
            section.find(".full-screen-scroll-section-element").removeClass("active");
            section.children(":nth-child(" + currentSegment + ")").addClass("active"); // Set correct navigation link to be active.

            section.find(".full-screen-scroll-section-nav a").removeClass("active");
            section.find('.full-screen-scroll-section-nav a[data-element="' + section.children(":nth-child(" + currentSegment + ")").data("element") + '"] ').addClass("active");
          }
        }
      };
    })(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
  }
});

/***/ }),

/***/ "./assets/js/modules/general.js":
/*!**************************************!*\
  !*** ./assets/js/modules/general.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('window-loaded');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('open.zf.reveal', '#modal-search', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input").first().focus();
    }); // Frontpage
    // what
    //$('.section-what .grid .grid-item').matchHeight({row:true});

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-what .grid header').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-what .grid .description').matchHeight({
      row: true
    }); //$('.section-what .grid .grid-image').matchHeight({row:true});
    // $('.section-what .grid footer').matchHeight({row:true});
    // Technologies

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-technologies .grid header').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-technologies .grid .description').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-technologies .grid .grid-image').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-technologies .grid footer').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-core-values .grid .grid-image').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-core-values .grid .grid-item header').matchHeight({
      row: true
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.archive .grid article').matchHeight({
      row: true
    }); // Blog filters

    var detectWrap = function detectWrap(element) {
      var wrappedItems = [];
      var prevItem = {};
      var currItem = {};
      var items = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).children();

      for (var i = 0; i < items.length; i++) {
        currItem = items[i].getBoundingClientRect();

        if (prevItem && prevItem.top < currItem.top) {
          wrappedItems.push(items[i]);
        }

        prevItem = currItem;
      }

      return wrappedItems;
    };

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("load resize", function () {
      var wrappedItems = detectWrap('.category-filters .menu');

      if (wrappedItems.length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.category-filters .categories').addClass('mobile');
      }

      if (!wrappedItems.length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.category-filters .categories').removeClass('mobile');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.category-filters').css('visibility', 'visible');
    });
  }
});

/***/ }),

/***/ "./assets/js/modules/slick.js":
/*!************************************!*\
  !*** ./assets/js/modules/slick.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;

        padString = String(typeof padString !== 'undefined' ? padString : ' ');

        if (this.length >= targetLength) {
          return String(this);
        } else {
          targetLength = targetLength - this.length;

          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
          }

          return padString.slice(0, targetLength) + String(this);
        }
      };
    }

    var $slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-home-news .slider');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $slider).length) {
      var currentSlide;

      var updateSliderCounter = function updateSliderCounter(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-arrows .counter', $slider).text(currentSlide);
      };

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $slider).on('init', function (event, slick) {
        updateSliderCounter(slick);
        $slider.css({
          opacity: 1,
          visibility: 'visible'
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $slider).on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $slider).slick({
        fade: true,
        autoplay: false,
        infinite: true,
        adaptiveHeight: true,
        dots: false,
        speed: 300,
        nextArrow: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-next', $slider),
        prevArrow: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-prev', $slider)
      });
    } // About - history


    var $historySlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-about-history .slider');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $historySlider).length) {
      $historySlider.imagesLoaded().done(function (instance) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $historySlider).slick({
          fade: true,
          autoplay: false,
          infinite: true,
          adaptiveHeight: true,
          arrows: true,
          dots: true,
          rows: 0,
          customPaging: function customPaging(slider, i) {
            var year = jquery__WEBPACK_IMPORTED_MODULE_0___default()(slider.$slides[i]).data('year');
            return '<a class="dot">' + year + '</a>';
          },
          speed: 300,
          nextArrow: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-next', $historySlider),
          prevArrow: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-prev', $historySlider)
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wrap', $historySlider).append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $historySlider).find('.slick-dots'));
        $historySlider.addClass('images-loaded');
      });
    } // Careers - Testimonials


    var $testimonialsSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-testimonials .slider');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $testimonialsSlider).length) {
      $testimonialsSlider.imagesLoaded().done(function (instance) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $testimonialsSlider).slick({
          fade: true,
          autoplay: false,
          infinite: true,
          adaptiveHeight: true,
          arrows: true,
          dots: false,
          rows: 0,

          /*
          customPaging : function(slider, i) {
              let number = i+1;
              number = number.toString().padStart(2, '0');
              return '<a class="dot">'+number+'</a>';
          },
          */
          speed: 300,
          nextArrow: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-next', $testimonialsSlider),
          prevArrow: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-prev', $testimonialsSlider)
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wrap', $testimonialsSlider).append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick', $testimonialsSlider).find('.slick-dots'));
        $testimonialsSlider.addClass('images-loaded');
      });
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product__slider-main .slick').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product__slider').imagesLoaded().done(function (instance) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".product__slider-main .slick").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          autoplay: true,
          infinite: true,
          arrows: false,
          dots: false,
          speed: 300,
          rows: 0,
          nextArrow: '.product__slider-main .slick-next',
          prevArrow: '.product__slider-main .slick-prev' //asNavFor: '.product__slider-thumbs .slick',

        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product__slider-main .slick').on('afterChange', function (event, slick, i) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product__slider-thumbs .slick-slide').removeClass('slick-current');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product__slider-thumbs .slick-slide').eq(i).addClass('slick-current');
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".product__slider-thumbs .slick").slick({
          dots: false,
          autoplay: true,
          infinite: true,
          speed: 300,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.product__slider-main .slick',
          vertical: true,
          verticalSwiping: true,
          focusOnSelect: true,
          rows: 0,
          responsive: [{
            breakpoint: 991,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              verticalSwiping: false
            }
          }, {
            breakpoint: 639,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              verticalSwiping: false
            }
          }]
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product__slider').addClass('images-loaded');
      });
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-product-slideshow .slider .slick').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-product-slideshow .slider').imagesLoaded().done(function (instance) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".section-product-slideshow .slider .slick").slick({
          fade: true,
          autoplay: true,
          infinite: true,
          adaptiveHeight: true,
          dots: true,
          speed: 300,
          customPaging: function customPaging(slider, i) {
            var number = i + 1;
            number = number.toString().padStart(2, '0');
            var thumb = jquery__WEBPACK_IMPORTED_MODULE_0___default()(slider.$slides[i]).data();
            return '<a class="dot">' + number + '</a>';
          },
          nextArrow: '.section-product-slideshow .slider .slick-next',
          prevArrow: '.section-product-slideshow .slider .slick-prev'
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-product-slideshow .slider').addClass('images-loaded');
      });
    }
  }
});

/***/ }),

/***/ "./assets/js/modules/smooth-scroll.js":
/*!********************************************!*\
  !*** ./assets/js/modules/smooth-scroll.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation.smoothScroll */ "./node_modules/foundation-sites/js/foundation.smoothScroll.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    /* window.addEventListener('load', function () {
         
         
         // if page has a #hash
         if ( location.hash ) {
             
             let element = location.hash + '-anchor';
             
             if( $(element).length ) {
                 setTimeout(function(){ 
                     Foundation.SmoothScroll.scrollToLoc( element, {offset: 100} );
                  }, 3000);
                 
             }
             
             console.log('scrolled');
             
         }
     }, false);
     
     */
  }
});

/***/ }),

/***/ "./assets/js/project.js":
/*!******************************!*\
  !*** ./assets/js/project.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_ModuleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/ModuleLoader */ "./assets/js/loader/ModuleLoader.js");
/* harmony import */ var _modules_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/foundation */ "./assets/js/modules/foundation.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_match_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-match-height */ "./node_modules/jquery-match-height/dist/jquery.matchHeight.js");
/* harmony import */ var jquery_match_height__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_match_height__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_external_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/external-links */ "./assets/js/modules/external-links.js");
/* harmony import */ var _modules_fixed_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fixed-header */ "./assets/js/modules/fixed-header.js");
/* harmony import */ var _modules_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/general */ "./assets/js/modules/general.js");
/* harmony import */ var _modules_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slick */ "./assets/js/modules/slick.js");
/* harmony import */ var _modules_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/smooth-scroll */ "./assets/js/modules/smooth-scroll.js");
/* harmony import */ var _modules_background_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/background-video */ "./assets/js/modules/background-video.js");
/* harmony import */ var _modules_accordion_fix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/accordion-fix */ "./assets/js/modules/accordion-fix.js");
/* harmony import */ var _modules_full_screen_scrolling_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/full-screen-scrolling-section */ "./assets/js/modules/full-screen-scrolling-section.js");

 // Foundation


/* eslint-disable-line */
// what Input NPM

 // jquery match height NMP

 // Custom Modules

 // import facetWp from './modules/facetwp';


 // import inlineSvg from './modules/inline-svg';
// import modalVideo from './modules/modal-video';
// import responsiveVideoEmbed from './modules/responsive-video-embeds';
// import search from './modules/search';


 // import superfish from './modules/superfish';

 // import menuToggle from './modules/menu-toggle';

 // import full screen scrolling section


var modules = new _loader_ModuleLoader__WEBPACK_IMPORTED_MODULE_1__["default"]({
  externalLinks: _modules_external_links__WEBPACK_IMPORTED_MODULE_5__["default"],
  // facetWp,
  fixedHeader: _modules_fixed_header__WEBPACK_IMPORTED_MODULE_6__["default"],
  general: _modules_general__WEBPACK_IMPORTED_MODULE_7__["default"],
  // inlineSvg,
  // modalVideo,
  // responsiveVideoEmbed,
  // search,
  slick: _modules_slick__WEBPACK_IMPORTED_MODULE_8__["default"],
  smoothScroll: _modules_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__["default"],
  // superfish
  backgroundVideo: _modules_background_video__WEBPACK_IMPORTED_MODULE_10__["default"],
  //menuToggle,
  accordionFix: _modules_accordion_fix__WEBPACK_IMPORTED_MODULE_11__["default"],
  fullScreenScrollingSection: _modules_full_screen_scrolling_section__WEBPACK_IMPORTED_MODULE_12__["default"]
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation();
  modules.init();
});

/***/ }),

/***/ "./assets/scss/login.scss":
/*!********************************!*\
  !*** ./assets/scss/login.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ./assets/js/project.js ./assets/scss/style.scss ./assets/scss/login.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kylerumble/Sites/accesslasers/wp-content/themes/sd-accesslasers/assets/js/project.js */"./assets/js/project.js");
__webpack_require__(/*! /Users/kylerumble/Sites/accesslasers/wp-content/themes/sd-accesslasers/assets/scss/style.scss */"./assets/scss/style.scss");
module.exports = __webpack_require__(/*! /Users/kylerumble/Sites/accesslasers/wp-content/themes/sd-accesslasers/assets/scss/login.scss */"./assets/scss/login.scss");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=project.js.map