webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Sent.js":
/*!****************************!*\
  !*** ./Components/Sent.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sent; });
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





var _jsxFileName = "C:\\Users\\user\\Desktop\\D-Mail\\Components\\Sent.js",
    _s = $RefreshSig$();







function Sent() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Sent = _useState[0],
      setSent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      Messagebody = _useState2[0],
      setMessagebody = _useState2[1];

  var outbox = /*#__PURE__*/function () {
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
              return _Ethereum_mail__WEBPACK_IMPORTED_MODULE_5__["default"].methods.sentMessages(accounts[0]).call();

            case 7:
              messages = _context.sent;
              console.log(messages);
              setSent(messages);
              _context.next = 14;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function outbox(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  outbox();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      width: 6,
      floated: "left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        stacked: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"], {
          divided: true,
          relaxed: true,
          children: Sent.map(function (msg) {
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
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Content, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Header, {
                  as: "a",
                  children: msg.subject
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
      width: 6,
      floated: "left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        stacked: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"], {
          divided: true,
          relaxed: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Content, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: Messagebody
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 14
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 14
    }, this)]
  }, void 0, true);
}

_s(Sent, "MkU6fpwaClo1N1fXs+JG7I0KcMw=");

_c = Sent;

var _c;

$RefreshReg$(_c, "Sent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TZW50LmpzIl0sIm5hbWVzIjpbIlNlbnQiLCJ1c2VTdGF0ZSIsInNldFNlbnQiLCJNZXNzYWdlYm9keSIsInNldE1lc3NhZ2Vib2R5Iiwib3V0Ym94IiwiZXZlbnQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtYWlsIiwibWV0aG9kcyIsInNlbnRNZXNzYWdlcyIsImNhbGwiLCJtZXNzYWdlcyIsIm1hcCIsIm1zZyIsImJvZHkiLCJzdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUNwQkQsSUFEb0I7QUFBQSxNQUNmRSxPQURlOztBQUFBLG1CQUVVRCxzREFBUSxDQUFDLEVBQUQsQ0FGbEI7QUFBQSxNQUVwQkUsV0FGb0I7QUFBQSxNQUVSQyxjQUZROztBQUk1QixNQUFNQyxNQUFNO0FBQUEsZ1JBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdpQkMsc0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBSGpCOztBQUFBO0FBR0FDLHNCQUhBO0FBSU5DLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDLENBQUQsQ0FBcEI7QUFKTTtBQUFBLHFCQUtpQkcsc0RBQUksQ0FBQ0MsT0FBTCxDQUFhQyxZQUFiLENBQTBCTCxRQUFRLENBQUMsQ0FBRCxDQUFsQyxFQUF1Q00sSUFBdkMsRUFMakI7O0FBQUE7QUFLQUMsc0JBTEE7QUFNTk4scUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFaO0FBQ0FmLHFCQUFPLENBQUNlLFFBQUQsQ0FBUDtBQVBNO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5aLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFhQ0EsUUFBTTtBQUNOLHNCQUNJO0FBQUEsNEJBQ0MscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsV0FBSyxFQUFFLENBQXBCO0FBQXVCLGFBQU8sRUFBQyxNQUEvQjtBQUFBLDZCQUNHLHFFQUFDLHlEQUFEO0FBQVMsZUFBTyxNQUFoQjtBQUFBLCtCQUNBLHFFQUFDLHNEQUFEO0FBQU0saUJBQU8sTUFBYjtBQUFjLGlCQUFPLE1BQXJCO0FBQUEsb0JBQ0NMLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQVM7QUFDZixnQ0FDSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBWSxxQkFBTyxFQUFFLG1CQUFNO0FBQ3ZCZiw4QkFBYyxDQUFDZSxHQUFHLENBQUNDLElBQUwsQ0FBZDtBQUNILGVBRkQ7QUFBQSxzQ0FHQSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxvQkFBSSxFQUFDLFVBQWhCO0FBQTJCLG9CQUFJLEVBQUMsT0FBaEM7QUFBd0MsNkJBQWEsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhBLGVBSUEscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQUEsdUNBQ0EscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsb0JBQUUsRUFBQyxHQUFoQjtBQUFBLDRCQUFxQkQsR0FBRyxDQUFDRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFTRSxXQVZMO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFrQksscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsV0FBSyxFQUFFLENBQXBCO0FBQXVCLGFBQU8sRUFBQyxNQUEvQjtBQUFBLDZCQUNBLHFFQUFDLHlEQUFEO0FBQVMsZUFBTyxNQUFoQjtBQUFBLCtCQUNBLHFFQUFDLHNEQUFEO0FBQU0saUJBQU8sTUFBYjtBQUFjLGlCQUFPLE1BQXJCO0FBQUEsaUNBRUEscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQUEsbUNBQWM7QUFBQSx3QkFBS2xCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkw7QUFBQSxrQkFESjtBQTZCSDs7R0EvQ3VCSCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk1ZDI3YzE1YzE1OTQ1NTcxMWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vRXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBtYWlsIGZyb20gJy4uL0V0aGVyZXVtL21haWwnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0LCBHcmlkLCBMaXN0LE1lbnUsTGFiZWwsSGVhZGVyLCBTZWdtZW50LCBJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBpcGZzIGZyb20gJy4uL2lwZnMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW50KCkge1xyXG4gICAgY29uc3QgW1NlbnQsc2V0U2VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbTWVzc2FnZWJvZHksc2V0TWVzc2FnZWJvZHldID0gdXNlU3RhdGUoJycpO1xyXG4gXHJcbiAgIGNvbnN0IG91dGJveCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IG1haWwubWV0aG9kcy5zZW50TWVzc2FnZXMoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xyXG4gICAgICAgICAgICBzZXRTZW50KG1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3V0Ym94KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0gZmxvYXRlZD1cImxlZnRcIj5cclxuICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cclxuICAgICAgICAgICAgPExpc3QgZGl2aWRlZCByZWxheGVkPlxyXG4gICAgICAgICAgICB7U2VudC5tYXAoKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2Vib2R5KG1zZy5ib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT0nZW52ZWxvcGUnIHNpemU9J2xhcmdlJyB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgYXM9J2EnPnttc2cuc3ViamVjdH08L0xpc3QuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPikgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9TZWdtZW50PiAgIFxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fSBmbG9hdGVkPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgPFNlZ21lbnQgc3RhY2tlZD5cclxuICAgICAgICAgICAgIDxMaXN0IGRpdmlkZWQgcmVsYXhlZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8TGlzdC5Db250ZW50PjxoMz57TWVzc2FnZWJvZHl9PC9oMz48L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgIDwvU2VnbWVudD4gICBcclxuICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9