import { Directive, Input } from '@angular/core';
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
        { type: Directive, args: [{
                    selector: 'livechat-widget'
                },] },
    ];
    /** @nocollapse */
    LivechatWidgetDirective.ctorParameters = function () { return []; };
    LivechatWidgetDirective.propDecorators = {
        'licenseId': [{ type: Input },],
    };
    return LivechatWidgetDirective;
}());
export { LivechatWidgetDirective };
//# sourceMappingURL=livechatWidget.directive.js.map