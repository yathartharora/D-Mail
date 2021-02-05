webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Inbox.js":
/*!*****************************!*\
  !*** ./Components/Inbox.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inbox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Ethereum/mail */ "./Ethereum/mail.js");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ipfs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ipfs */ "./ipfs.js");





var _jsxFileName = "C:\\Users\\user\\Desktop\\D-Mail\\Components\\Inbox.js",
    _s = $RefreshSig$();







function Inbox() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Inbox = _useState[0],
      setInbox = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      Messagebody = _useState2[0],
      setMessagebody = _useState2[1];

  var display = /*#__PURE__*/function () {
    var _ref = Object(C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var accounts, messages;
      return C_Users_user_Desktop_D_Mail_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts();

            case 3:
              accounts = _context.sent;
              console.log(accounts[0]);
              _context.next = 7;
              return _Ethereum_mail__WEBPACK_IMPORTED_MODULE_5__["default"].methods.displaymessages(accounts[0]).call();

            case 7:
              messages = _context.sent;
              _context.next = 10;
              return setInbox(messages);

            case 10:
              console.log(Inbox);
              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function display(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  display();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      width: 6,
      floated: "left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        stacked: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"], {
          divided: true,
          relaxed: true,
          children: Inbox.map(function (msg, id) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Item, {
              onClick: function onClick() {
                setMessagebody(msg.body);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Icon, {
                name: "envelope",
                size: "large",
                verticalAlign: "middle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Content, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Header, {
                  as: "a",
                  children: msg.sender
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Description, {
                  as: "a",
                  children: msg.subject
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      width: 6,
      floated: "left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        stacked: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"], {
          divided: true,
          relaxed: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: Messagebody
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Inbox, "yxsuSgzlR8ItzHa6E45+ApWIsWE=");

_c = Inbox;

var _c;

$RefreshReg$(_c, "Inbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9JbmJveC5qcyJdLCJuYW1lcyI6WyJJbmJveCIsInVzZVN0YXRlIiwic2V0SW5ib3giLCJNZXNzYWdlYm9keSIsInNldE1lc3NhZ2Vib2R5IiwiZGlzcGxheSIsImV2ZW50Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWFpbCIsIm1ldGhvZHMiLCJkaXNwbGF5bWVzc2FnZXMiLCJjYWxsIiwibWVzc2FnZXMiLCJtYXAiLCJtc2ciLCJpZCIsImJvZHkiLCJzZW5kZXIiLCJzdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUNyQkQsS0FEcUI7QUFBQSxNQUNmRSxRQURlOztBQUFBLG1CQUVTRCxzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVyQkUsV0FGcUI7QUFBQSxNQUVUQyxjQUZTOztBQUc5QixNQUFPQyxPQUFPO0FBQUEsZ1JBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVnQkMsc0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBRmhCOztBQUFBO0FBRURDLHNCQUZDO0FBR1BDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDLENBQUQsQ0FBcEI7QUFITztBQUFBLHFCQUlnQkcsc0RBQUksQ0FBQ0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCTCxRQUFRLENBQUMsQ0FBRCxDQUFyQyxFQUEwQ00sSUFBMUMsRUFKaEI7O0FBQUE7QUFJREMsc0JBSkM7QUFBQTtBQUFBLHFCQU1EZixRQUFRLENBQUNlLFFBQUQsQ0FOUDs7QUFBQTtBQU9QTixxQkFBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFQTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQSyxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBWUVBLFNBQU87QUFFUCxzQkFDSTtBQUFBLDRCQUNBLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLFdBQUssRUFBRSxDQUFwQjtBQUF1QixhQUFPLEVBQUMsTUFBL0I7QUFBQSw2QkFDQSxxRUFBQyx5REFBRDtBQUFTLGVBQU8sTUFBaEI7QUFBQSwrQkFDQSxxRUFBQyxzREFBRDtBQUFNLGlCQUFPLE1BQWI7QUFBYyxpQkFBTyxNQUFyQjtBQUFBLG9CQUVFTCxLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ0MsR0FBRCxFQUFLQyxFQUFMLEVBQVk7QUFDcEIsZ0NBQ0kscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVkscUJBQU8sRUFBRSxtQkFBTTtBQUN2QmhCLDhCQUFjLENBQUNlLEdBQUcsQ0FBQ0UsSUFBTCxDQUFkO0FBQ0gsZUFGRDtBQUFBLHNDQUdBLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLG9CQUFJLEVBQUMsVUFBaEI7QUFBMkIsb0JBQUksRUFBQyxPQUFoQztBQUF3Qyw2QkFBYSxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEEsZUFJQSxxRUFBQyxzREFBRCxDQUFNLE9BQU47QUFBQSx3Q0FDQSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxvQkFBRSxFQUFDLEdBQWhCO0FBQUEsNEJBQXFCRixHQUFHLENBQUNHO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsZUFFQSxxRUFBQyxzREFBRCxDQUFNLFdBQU47QUFBa0Isb0JBQUUsRUFBQyxHQUFyQjtBQUFBLDRCQUEwQkgsR0FBRyxDQUFDSTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFVRSxXQVhKO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFvQkEscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsV0FBSyxFQUFFLENBQXBCO0FBQXVCLGFBQU8sRUFBQyxNQUEvQjtBQUFBLDZCQUNBLHFFQUFDLHlEQUFEO0FBQVMsZUFBTyxNQUFoQjtBQUFBLCtCQUNBLHFFQUFDLHNEQUFEO0FBQU0saUJBQU8sTUFBYjtBQUFjLGlCQUFPLE1BQXJCO0FBQUEsaUNBQ0E7QUFBQSxzQkFBS3BCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCQTtBQUFBLGtCQURKO0FBK0JIOztHQWhEdUJILEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDEwYWQwMWUwNmI2MGM0ZTI3ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9FdGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IG1haWwgZnJvbSAnLi4vRXRoZXJldW0vbWFpbCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0Zvcm0sIEJ1dHRvbiwgSW5wdXQsIEdyaWQsIExpc3QsTWVudSxMYWJlbCxIZWFkZXIsIFNlZ21lbnQsIEljb259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGlwZnMgZnJvbSAnLi4vaXBmcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluYm94KCkge1xyXG4gICAgY29uc3QgW0luYm94LHNldEluYm94XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtNZXNzYWdlYm9keSxzZXRNZXNzYWdlYm9keV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgIGRpc3BsYXkgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBtYWlsLm1ldGhvZHMuZGlzcGxheW1lc3NhZ2VzKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IHNldEluYm94KG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSW5ib3gpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc3BsYXkoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fSBmbG9hdGVkPVwibGVmdFwiPlxyXG4gICAgICAgIDxTZWdtZW50IHN0YWNrZWQ+XHJcbiAgICAgICAgPExpc3QgZGl2aWRlZCByZWxheGVkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgSW5ib3gubWFwKChtc2csaWQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZWJvZHkobXNnLmJvZHkpXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT0nZW52ZWxvcGUnIHNpemU9J2xhcmdlJyB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGFzPSdhJz57bXNnLnNlbmRlcn08L0xpc3QuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuRGVzY3JpcHRpb24gYXM9J2EnPnttc2cuc3ViamVjdH08L0xpc3QuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPikgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9TZWdtZW50PiAgIFxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fSBmbG9hdGVkPVwibGVmdFwiPlxyXG4gICAgICAgIDxTZWdtZW50IHN0YWNrZWQ+XHJcbiAgICAgICAgPExpc3QgZGl2aWRlZCByZWxheGVkPlxyXG4gICAgICAgIDxoMz57TWVzc2FnZWJvZHl9PC9oMz5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9TZWdtZW50PiAgIFxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==