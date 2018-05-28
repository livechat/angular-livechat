import { Directive, Input } from '@angular/core';
var LivechatWidgetDirective = (function () {
    function LivechatWidgetDirective() {
    }
    LivechatWidgetDirective.prototype.ngOnInit = function () {
        this._injectScript();
    };
    Object.defineProperty(LivechatWidgetDirective.prototype, "_group", {
        get: function () {
            return this.group ? "window.__lc.group = " + this.group + ";" : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LivechatWidgetDirective.prototype, "_gaVersion", {
        get: function () {
            return this.gaVersion
                ? "window.__lc.ga_version = '" + this.gaVersion + "';"
                : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LivechatWidgetDirective.prototype, "_environment", {
        get: function () {
            return this.environment ? this.environment + "/" : '';
        },
        enumerable: true,
        configurable: true
    });
    LivechatWidgetDirective.prototype._injectScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = "\n        window.__lc = window.__lc || {};\n        window.__lc.license = " + this.licenseId + ";\n        " + this._group + "\n        " + this._gaVersion + "\n        (function() {\n          var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;\n          lc.src = 'https://cdn.livechatinc.com/" + this._environment + "tracking.js';\n          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);\n        })();\n      ";
        document
            .getElementsByTagName('head')
            .item(0)
            .appendChild(script);
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
        'group': [{ type: Input },],
        'gaVersion': [{ type: Input },],
        'environment': [{ type: Input },],
    };
    return LivechatWidgetDirective;
}());
export { LivechatWidgetDirective };
//# sourceMappingURL=livechatWidget.directive.js.map