(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.livechatWidget = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var LivechatWidgetDirective = (function () {
    function LivechatWidgetDirective() {
    }
    LivechatWidgetDirective.prototype.ngOnInit = function () {
        this._injectScript();
    };
    LivechatWidgetDirective.prototype._injectScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = "\n        window.__lc = window.__lc || {};\n        window.__lc.license = " + this.licenseId + ";\n        (function() {\n          var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;\n          lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';\n          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);\n        })();\n      ";
        document.getElementsByTagName('head').item(0).appendChild(script);
    };
    LivechatWidgetDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'livechat-widget'
                },] },
    ];
    /** @nocollapse */
    LivechatWidgetDirective.ctorParameters = function () { return []; };
    LivechatWidgetDirective.propDecorators = {
        'licenseId': [{ type: core.Input },],
    };
    return LivechatWidgetDirective;
}());

var LivechatWidgetModule = (function () {
    function LivechatWidgetModule() {
    }
    LivechatWidgetModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [LivechatWidgetDirective],
                    exports: [LivechatWidgetDirective]
                },] },
    ];
    /** @nocollapse */
    LivechatWidgetModule.ctorParameters = function () { return []; };
    return LivechatWidgetModule;
}());

exports.LivechatWidgetModule = LivechatWidgetModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
