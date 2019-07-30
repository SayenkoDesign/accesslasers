(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/editor"],{

/***/ "./assets/js/editor.js":
/*!*****************************!*\
  !*** ./assets/js/editor.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_block_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/block-styles */ "./assets/js/editor/block-styles.js");
/* harmony import */ var _editor_filter_block_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/filter-block-edit */ "./assets/js/editor/filter-block-edit.js");
/* harmony import */ var _editor_filter_block_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/filter-block-register */ "./assets/js/editor/filter-block-register.js");
/**
 * Editor Script.
 *
 * This imports all modules for the block editor. The final result gets saved
 * back into `public/js/editor.js`.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */




/***/ }),

/***/ "./assets/js/editor/block-controls/control-border-radius.js":
/*!******************************************************************!*\
  !*** ./assets/js/editor/block-controls/control-border-radius.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_update_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../util/update-class */ "./assets/js/editor/util/update-class.js");
/**
 * Border Radius Control.
 *
 * Outputs a select dropdown control for handling the border-radius.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
// Import the class update utility.
 // Get the core WP select control.

var SelectControl = wp.components.SelectControl; // Global set via `wp_localize_script()`.

var _exhaleEditor = exhaleEditor,
    labels = _exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var options = [{
    label: labels["default"],
    value: ''
  }, {
    label: labels.none,
    value: 'none'
  }, {
    label: labels.sizes.small,
    value: 'sm'
  }, {
    label: labels.sizes.medium,
    value: 'md'
  }, {
    label: labels.sizes.large,
    value: 'lg'
  }, {
    label: labels.sizes.extraLarge,
    value: 'xl'
  }]; // Get the border-radius attribute.

  var borderRadius = props.attributes.borderRadius;
  return React.createElement(SelectControl, {
    key: "borderRadius",
    label: labels.borderRadius,
    value: borderRadius,
    options: options,
    onChange: function onChange(selected) {
      props.setAttributes({
        borderRadius: selected,
        className: Object(_util_update_class__WEBPACK_IMPORTED_MODULE_0__["default"])(props.attributes.className, selected ? 'rounded-' + selected : '', options.filter(function (opt) {
          return opt.value;
        }).map(function (opt) {
          return 'rounded-' + opt.value;
        }))
      });
    }
  });
});

/***/ }),

/***/ "./assets/js/editor/block-controls/control-box-shadow.js":
/*!***************************************************************!*\
  !*** ./assets/js/editor/block-controls/control-box-shadow.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_update_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../util/update-class */ "./assets/js/editor/util/update-class.js");
/**
 * Box Shadow Control.
 *
 * Outputs a select dropdown control for handling the box-shadow.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
// Import the class update utility.
 // Get the core WP select control.

var SelectControl = wp.components.SelectControl; // Global set via `wp_localize_script()`.

var _exhaleEditor = exhaleEditor,
    labels = _exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var options = [{
    label: labels["default"],
    value: ''
  }, {
    label: labels.none,
    value: 'none'
  }, {
    label: labels.sizes.small,
    value: 'sm'
  }, {
    label: labels.sizes.medium,
    value: 'md'
  }, {
    label: labels.sizes.large,
    value: 'lg'
  }, {
    label: labels.sizes.extraLarge,
    value: 'xl'
  }]; // Get the box-shadow attribute.

  var boxShadow = props.attributes.boxShadow;
  return React.createElement(SelectControl, {
    key: "boxShadow",
    label: labels.shadow,
    value: boxShadow,
    options: options,
    onChange: function onChange(selected) {
      props.setAttributes({
        boxShadow: selected,
        className: Object(_util_update_class__WEBPACK_IMPORTED_MODULE_0__["default"])(props.attributes.className, selected ? 'shadow-' + selected : '', options.filter(function (opt) {
          return opt.value;
        }).map(function (opt) {
          return 'shadow-' + opt.value;
        }))
      });
    }
  });
});

/***/ }),

/***/ "./assets/js/editor/block-controls/control-list-type.js":
/*!**************************************************************!*\
  !*** ./assets/js/editor/block-controls/control-list-type.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_update_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../util/update-class */ "./assets/js/editor/util/update-class.js");
/**
 * List Style Type Control.
 *
 * Outputs a select dropdown control for handling the list-style-type.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
// Import the class update utility.
 // Get the core WP select control.

var SelectControl = wp.components.SelectControl; // Global set via `wp_localize_script()`.

var _exhaleEditor = exhaleEditor,
    labels = _exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var options = [{
    label: labels["default"],
    value: ''
  }, {
    label: labels.none,
    value: 'none'
  }, {
    label: labels.lists.disc,
    value: 'disc'
  }, {
    label: labels.lists.circle,
    value: 'circle'
  }, {
    label: labels.lists.square,
    value: 'square'
  }]; // Get the list-style-type attribute.

  var listType = props.attributes.listType;
  return React.createElement(SelectControl, {
    key: "listType",
    label: labels.listType,
    value: listType,
    options: options,
    onChange: function onChange(selected) {
      props.setAttributes({
        listType: selected,
        className: Object(_util_update_class__WEBPACK_IMPORTED_MODULE_0__["default"])(props.attributes.className, selected ? 'list-' + selected : '', options.filter(function (opt) {
          return opt.value;
        }).map(function (opt) {
          return 'list-' + opt.value;
        }))
      });
    }
  });
});

/***/ }),

/***/ "./assets/js/editor/block-controls/fields.js":
/*!***************************************************!*\
  !*** ./assets/js/editor/block-controls/fields.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_border_radius__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-border-radius */ "./assets/js/editor/block-controls/control-border-radius.js");
/* harmony import */ var _control_box_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-box-shadow */ "./assets/js/editor/block-controls/control-box-shadow.js");
/* harmony import */ var _control_list_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-list-type */ "./assets/js/editor/block-controls/control-list-type.js");
/**
 * Block Design Setting Fields.
 *
 * Returns an array of design setting fields to output in the block editor.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
// Import block controls.



/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'listType',
  type: 'string',
  "default": '',
  control: _control_list_type__WEBPACK_IMPORTED_MODULE_2__["default"],
  blocks: ['core/list']
}, {
  name: 'borderRadius',
  type: 'string',
  "default": '',
  control: _control_border_radius__WEBPACK_IMPORTED_MODULE_0__["default"],
  blocks: ['core/image', 'core/gallery', 'core/media-text', 'core/paragraph']
}, {
  name: 'boxShadow',
  type: 'string',
  "default": '',
  control: _control_box_shadow__WEBPACK_IMPORTED_MODULE_1__["default"],
  blocks: ['core/image', 'core/gallery', 'core/media-text', 'core/paragraph']
}]);

/***/ }),

/***/ "./assets/js/editor/block-controls/panel-design-settings.js":
/*!******************************************************************!*\
  !*** ./assets/js/editor/block-controls/panel-design-settings.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Design Settings Panel.
 *
 * Creates the design settings panel for the block editor.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var PanelBody = wp.components.PanelBody;
var __ = wp.i18n.__; // Global set via `wp_localize_script()`.

var _exhaleEditor = exhaleEditor,
    labels = _exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = (function (props, fields) {
  return React.createElement(PanelBody, {
    title: labels.designSettings,
    initialOpen: false
  }, fields.map(function (field, i) {
    return field.control(props);
  }));
});

/***/ }),

/***/ "./assets/js/editor/block-styles.js":
/*!******************************************!*\
  !*** ./assets/js/editor/block-styles.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_styles_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-styles/index */ "./assets/js/editor/block-styles/index.js");
/**
 * Editor block styles.
 *
 * This file handles the JavaScript for creating block styles in the editor.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */

wp.domReady(function () {
  Object.keys(_block_styles_index__WEBPACK_IMPORTED_MODULE_0__).forEach(function (block) {
    _block_styles_index__WEBPACK_IMPORTED_MODULE_0__[block].styles.forEach(function (options) {
      wp.blocks.registerBlockStyle(_block_styles_index__WEBPACK_IMPORTED_MODULE_0__[block].name, options);
    });
  });
});

/***/ }),

/***/ "./assets/js/editor/block-styles/core/gallery.js":
/*!*******************************************************!*\
  !*** ./assets/js/editor/block-styles/core/gallery.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gallery Block Styles.
 *
 * This file exports all of the styles for the gallery block.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var labels = exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'core/gallery',
  styles: [{
    name: 'default',
    label: labels["default"],
    isDefault: true
  }, {
    name: 'reverse',
    label: labels.reverse
  }]
});

/***/ }),

/***/ "./assets/js/editor/block-styles/core/image.js":
/*!*****************************************************!*\
  !*** ./assets/js/editor/block-styles/core/image.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Image Block Styles.
 *
 * This file exports all of the styles for the image block.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var labels = exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'core/image',
  styles: [{
    name: 'default',
    label: labels.border,
    isDefault: true
  }, {
    name: 'borderless',
    label: labels.borderless
  }]
});

/***/ }),

/***/ "./assets/js/editor/block-styles/core/media-text.js":
/*!**********************************************************!*\
  !*** ./assets/js/editor/block-styles/core/media-text.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Media & Text Block Styles.
 *
 * This file exports all of the styles for the media-text block.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var labels = exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'core/media-text',
  styles: [{
    name: 'default',
    label: labels["default"],
    isDefault: true
  }, {
    name: 'borderless',
    label: labels.borderless
  }]
});

/***/ }),

/***/ "./assets/js/editor/block-styles/core/paragraph.js":
/*!*********************************************************!*\
  !*** ./assets/js/editor/block-styles/core/paragraph.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Paragraph Block Styles.
 *
 * This file exports all of the styles for the paragraph block.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var labels = exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'core/paragraph',
  styles: [{
    name: 'default',
    label: labels["default"],
    isDefault: true
  }, {
    name: 'highlight',
    label: labels.highlight
  }]
});

/***/ }),

/***/ "./assets/js/editor/block-styles/core/separator.js":
/*!*********************************************************!*\
  !*** ./assets/js/editor/block-styles/core/separator.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Separator Block Styles.
 *
 * This file exports all of the styles for the separator block.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var labels = exhaleEditor.labels;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'core/separator',
  styles: [{
    name: 'dashed',
    label: labels.borderDashed
  }, {
    name: 'double',
    label: labels.borderDouble
  }]
});

/***/ }),

/***/ "./assets/js/editor/block-styles/index.js":
/*!************************************************!*\
  !*** ./assets/js/editor/block-styles/index.js ***!
  \************************************************/
/*! exports provided: gallery, image, mediaText, paragraph, separator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/gallery */ "./assets/js/editor/block-styles/core/gallery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gallery", function() { return _core_gallery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/image */ "./assets/js/editor/block-styles/core/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _core_image__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core_media_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/media-text */ "./assets/js/editor/block-styles/core/media-text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaText", function() { return _core_media_text__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/paragraph */ "./assets/js/editor/block-styles/core/paragraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paragraph", function() { return _core_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _core_separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/separator */ "./assets/js/editor/block-styles/core/separator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separator", function() { return _core_separator__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/**
 * Block styles.
 *
 * This file groups and exports all of the block styles.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */

 // export { default as list      } from './core/list';





/***/ }),

/***/ "./assets/js/editor/filter-block-edit.js":
/*!***********************************************!*\
  !*** ./assets/js/editor/filter-block-edit.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_controls_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-controls/fields */ "./assets/js/editor/block-controls/fields.js");
/* harmony import */ var _block_controls_panel_design_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-controls/panel-design-settings */ "./assets/js/editor/block-controls/panel-design-settings.js");
/**
 * Block Edit Filter.
 *
 * Adds a filter on `editor.BlockEdit` and adds custom inspector controls to
 * any blocks that has custom design settings.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
// Imports the design setting fields.
 // Imports the design settings panel.

 // Assign core WP variables.

var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var addFilter = wp.hooks.addFilter;
/**
 * Filter on block edit to add custom inspector controls.
 *
 * @since  2.1.0
 * @access public
 * @param  object   BlockEdit
 * @return function
 */

var ExhaleBlockEdit = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    // Create an array to hold the fields for the current block.
    var blockFields = []; // Loop through the global fields and add them to the block
    // fields array if they belong to the current block. `props.name`
    // is the current block ID.

    _block_controls_fields__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (field) {
      if (field.blocks.includes(props.name)) {
        blockFields.push(field);
      }
    }); // If there are no fields for the current block, return the
    // block edit component.

    if (!blockFields.length) {
      return React.createElement(BlockEdit, props);
    } // Insert a new design settings panel and pass along the fields
    // to display.


    return React.createElement(Fragment, null, React.createElement(BlockEdit, props), React.createElement(InspectorControls, null, Object(_block_controls_panel_design_settings__WEBPACK_IMPORTED_MODULE_1__["default"])(props, blockFields)));
  };
}, 'ExhaleBlockEdit');
addFilter('editor.BlockEdit', 'exhale/block/edit', ExhaleBlockEdit);

/***/ }),

/***/ "./assets/js/editor/filter-block-register.js":
/*!***************************************************!*\
  !*** ./assets/js/editor/filter-block-register.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_controls_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-controls/fields */ "./assets/js/editor/block-controls/fields.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.assign */ "./node_modules/lodash.assign/index.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Block Registration Filter.
 *
 * Adds a filter on `editor.BlockEdit` and adds custom inspector controls to
 * any blocks that has custom design settings.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
// Imports the design setting fields.


 // Imports the assign function from lodash.


var addFilter = wp.hooks.addFilter;
/**
 * Filter on the block registration process to add custom attributes.
 *
 * @since  2.1.0
 * @access public
 * @param  object  Settings for the block.
 * @param  string  Block name.
 * @return object
 */

addFilter('blocks.registerBlockType', 'exhale/block/register', function (settings, name) {
  _block_controls_fields__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (field) {
    // If a given field is registered for the current block, add the
    // attributes for the field.
    if (field.blocks.includes(name)) {
      settings.attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()(settings.attributes, _defineProperty({}, field.name, {
        type: field.type,
        "default": field["default"]
      }));
    }
  });
  return settings;
});

/***/ }),

/***/ "./assets/js/editor/util/update-class.js":
/*!***********************************************!*\
  !*** ./assets/js/editor/util/update-class.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Replace Class Utility Function.
 *
 * Updates an HTML class name.
 *
 * @package   Exhale
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2019 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/exhale
 */
var TokenList = wp.tokenList;
/**
 * Helper function for updating class names.
 *
 * @since  2.1.0
 * @access public
 * @param  string  className  HTML class name.
 * @param  string  add        New class to add.
 * @param  array   remove     Old classes to remove.
 * @return string
 */

/* harmony default export */ __webpack_exports__["default"] = (function (className, add) {
  var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var list = new TokenList(className); // If there are classes to remove, loop through the list and remove them
  // if they exist in the class name.

  if (0 !== remove.length) {
    list.forEach(function (oldClassName) {
      if (remove.includes(oldClassName)) {
        list.remove(oldClassName);
      }
    });
  } // If there's a new class name, add it.


  if (add) {
    list.add(add);
  } // Return the class string.


  return list.value;
});

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** multi ./assets/js/editor.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/accesslasers/wp-content/themes/sd-accesslasers/assets/js/editor.js */"./assets/js/editor.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=editor.js.map