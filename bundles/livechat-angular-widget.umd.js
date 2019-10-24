(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@livechat/angular-widget', ['exports', 'rxjs', '@angular/core'], factory) :
    (factory((global.livechat = global.livechat || {}, global.livechat['angular-widget'] = {}),global.rxjs,global.ng.core));
}(this, (function (exports,rxjs,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LivechatWidgetComponent = /** @class */ (function () {
        function LivechatWidgetComponent() {
            this.onChatLoaded = new rxjs.Subject();
            this.onAfterLoad = new rxjs.Subject();
            this.onBeforeLoad = new rxjs.Subject();
            this.onChatEnded = new rxjs.Subject();
            this.onChatStarted = new rxjs.Subject();
            this.onChatStateChanged = new rxjs.Subject();
            this.onChatWindowHidden = new rxjs.Subject();
            this.onChatWindowMinimized = new rxjs.Subject();
            this.onChatWindowOpened = new rxjs.Subject();
            this.onMessage = new rxjs.Subject();
            this.onPostchatSurveySubmitted = new rxjs.Subject();
            this.onPrechatSurveySubmitted = new rxjs.Subject();
            this.onRatingCommentSubmitted = new rxjs.Subject();
            this.onRatingSubmitted = new rxjs.Subject();
            this.onTicketCreated = new rxjs.Subject();
            this.onWidgetResize = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        LivechatWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!window['LC_API']) {
                    window['__lc'] = window['__lc'] || {};
                    window['__lc'].license = this.licenseId;
                    window['__lc'].group = this.group;
                    window['__lc'].chat_between_groups = this.chatBetweenGroups;
                    window['__lc'].params = this.params;
                    window['__lc'].visitor = this.visitor;
                    window['__lc'].ga_version = this.gaVersion;
                    /** @type {?} */
                    var lc = document.createElement('script');
                    lc.type = 'text/javascript';
                    lc.async = true;
                    lc.src = 'https://cdn.livechatinc.com/tracking.js';
                    /** @type {?} */
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(lc, s);
                    lc.addEventListener('load', function () {
                        _this._chatLoaded(window['LC_API']);
                    });
                    lc.addEventListener('error', function (error) {
                        console.error(error);
                    });
                }
            };
        /**
         * @param {?} LC_API
         * @return {?}
         */
        LivechatWidgetComponent.prototype._chatLoaded = /**
         * @param {?} LC_API
         * @return {?}
         */
            function (LC_API) {
                this._setCallbacks(LC_API);
                this._setMethods(LC_API);
                this.onChatLoaded.next(LC_API);
            };
        /**
         * @param {?} LC_API
         * @return {?}
         */
        LivechatWidgetComponent.prototype._setCallbacks = /**
         * @param {?} LC_API
         * @return {?}
         */
            function (LC_API) {
                var _this = this;
                LC_API.on_after_load = function () { return _this.onAfterLoad.next(); };
                LC_API.on_before_load = function () { return _this.onBeforeLoad.next(); };
                LC_API.on_chat_ended = function () { return _this.onChatEnded.next(); };
                LC_API.on_chat_started = function (data) { return _this.onChatStarted.next(data); };
                LC_API.on_chat_state_changed = function (data) { return _this.onChatStateChanged.next(data); };
                LC_API.on_chat_window_hidden = function () { return _this.onChatWindowHidden.next(); };
                LC_API.on_chat_window_minimized = function () { return _this.onChatWindowMinimized.next(); };
                LC_API.on_chat_window_opened = function () { return _this.onChatWindowOpened.next(); };
                LC_API.on_message = function (data) { return _this.onMessage.next(data); };
                LC_API.on_postchat_survey_submitted = function (data) { return _this.onPostchatSurveySubmitted.next(data); };
                LC_API.on_prechat_survey_submitted = function (data) { return _this.onPrechatSurveySubmitted.next(data); };
                LC_API.on_rating_comment_submitted = function (data) { return _this.onRatingCommentSubmitted.next(data); };
                LC_API.on_rating_submitted = function (data) { return _this.onRatingSubmitted.next(data); };
                LC_API.on_ticket_created = function (data) { return _this.onTicketCreated.next(data); };
            };
        /**
         * @param {?} LC_API
         * @return {?}
         */
        LivechatWidgetComponent.prototype._setMethods = /**
         * @param {?} LC_API
         * @return {?}
         */
            function (LC_API) {
                this.agentsAreAvailable = function () { return LC_API.agents_are_available(); };
                this.chatRunning = function () { return LC_API.chat_running(); };
                this.chatWindowHidden = function () { return LC_API.chat_window_hidden(); };
                this.chatWindowMaximized = function () { return LC_API.chat_window_maximized(); };
                this.chatWindowMinimized = function () { return LC_API.chat_window_minimized(); };
                this.closeChat = function () { return LC_API.close_chat(); };
                this.getChatId = function () { return LC_API.get_chat_id(); };
                this.getChatsNumber = function () { return LC_API.get_chats_number(); };
                this.getLastVisitTimestamp = function () { return LC_API.get_last_visit_timestamp(); };
                this.getPageViewsNumber = function () { return LC_API.get_page_views_number(); };
                this.getVisitorId = function () { return LC_API.get_visitor_id(); };
                this.getVisitsNumber = function () { return LC_API.get_visits_number(); };
                this.hideChatWindow = function () { return LC_API.hide_chat_window(); };
                this.minimizeChatWindow = function () { return LC_API.minimize_chat_window(); };
                this.openChatWindow = function () { return LC_API.open_chat_window(); };
                this.setCustomVariables = function (t) { return LC_API.set_custom_variables(t); };
                this.setVisitorEmail = function (t) { return LC_API.set_visitor_email(t); };
                this.setVisitorName = function (t) { return LC_API.set_visitor_name(t); };
                this.triggerSalesTracker = function (e, t) { return LC_API.trigger_sales_tracker(e, t); };
                this.updateCustomVariables = function (t) { return LC_API.update_custom_variables(t); };
                this.visitorEngaged = function () { return LC_API.visitor_engaged(); };
                this.visitorQueued = function () { return LC_API.visitor_queued(); };
            };
        LivechatWidgetComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'livechat-widget',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        LivechatWidgetComponent.ctorParameters = function () { return []; };
        LivechatWidgetComponent.propDecorators = {
            licenseId: [{ type: core.Input }],
            group: [{ type: core.Input }],
            chatBetweenGroups: [{ type: core.Input }],
            params: [{ type: core.Input }],
            visitor: [{ type: core.Input }],
            gaVersion: [{ type: core.Input }],
            onChatLoaded: [{ type: core.Output }],
            onAfterLoad: [{ type: core.Output }],
            onBeforeLoad: [{ type: core.Output }],
            onChatEnded: [{ type: core.Output }],
            onChatStarted: [{ type: core.Output }],
            onChatStateChanged: [{ type: core.Output }],
            onChatWindowHidden: [{ type: core.Output }],
            onChatWindowMinimized: [{ type: core.Output }],
            onChatWindowOpened: [{ type: core.Output }],
            onMessage: [{ type: core.Output }],
            onPostchatSurveySubmitted: [{ type: core.Output }],
            onPrechatSurveySubmitted: [{ type: core.Output }],
            onRatingCommentSubmitted: [{ type: core.Output }],
            onRatingSubmitted: [{ type: core.Output }],
            onTicketCreated: [{ type: core.Output }],
            onWidgetResize: [{ type: core.Output }]
        };
        return LivechatWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LivechatWidgetModule = /** @class */ (function () {
        function LivechatWidgetModule() {
        }
        LivechatWidgetModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [LivechatWidgetComponent],
                        exports: [LivechatWidgetComponent]
                    },] }
        ];
        return LivechatWidgetModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LivechatWidgetComponent = LivechatWidgetComponent;
    exports.LivechatWidgetModule = LivechatWidgetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=livechat-angular-widget.umd.js.map