import { Subject } from 'rxjs';
import { Component, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LivechatWidgetComponent = /** @class */ (function () {
    function LivechatWidgetComponent() {
        this.onChatLoaded = new Subject();
        this.onAfterLoad = new Subject();
        this.onBeforeLoad = new Subject();
        this.onChatEnded = new Subject();
        this.onChatStarted = new Subject();
        this.onChatStateChanged = new Subject();
        this.onChatWindowHidden = new Subject();
        this.onChatWindowMinimized = new Subject();
        this.onChatWindowOpened = new Subject();
        this.onMessage = new Subject();
        this.onPostchatSurveySubmitted = new Subject();
        this.onPrechatSurveySubmitted = new Subject();
        this.onRatingCommentSubmitted = new Subject();
        this.onRatingSubmitted = new Subject();
        this.onTicketCreated = new Subject();
        this.onWidgetResize = new Subject();
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
        { type: Component, args: [{
                    selector: 'livechat-widget',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    LivechatWidgetComponent.ctorParameters = function () { return []; };
    LivechatWidgetComponent.propDecorators = {
        licenseId: [{ type: Input }],
        group: [{ type: Input }],
        chatBetweenGroups: [{ type: Input }],
        params: [{ type: Input }],
        visitor: [{ type: Input }],
        gaVersion: [{ type: Input }],
        onChatLoaded: [{ type: Output }],
        onAfterLoad: [{ type: Output }],
        onBeforeLoad: [{ type: Output }],
        onChatEnded: [{ type: Output }],
        onChatStarted: [{ type: Output }],
        onChatStateChanged: [{ type: Output }],
        onChatWindowHidden: [{ type: Output }],
        onChatWindowMinimized: [{ type: Output }],
        onChatWindowOpened: [{ type: Output }],
        onMessage: [{ type: Output }],
        onPostchatSurveySubmitted: [{ type: Output }],
        onPrechatSurveySubmitted: [{ type: Output }],
        onRatingCommentSubmitted: [{ type: Output }],
        onRatingSubmitted: [{ type: Output }],
        onTicketCreated: [{ type: Output }],
        onWidgetResize: [{ type: Output }]
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
        { type: NgModule, args: [{
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

export { LivechatWidgetComponent, LivechatWidgetModule };

//# sourceMappingURL=livechat-angular-widget.js.map