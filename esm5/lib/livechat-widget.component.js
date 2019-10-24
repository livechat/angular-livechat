/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
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
export { LivechatWidgetComponent };
if (false) {
    /** @type {?} */
    LivechatWidgetComponent.prototype.licenseId;
    /** @type {?} */
    LivechatWidgetComponent.prototype.group;
    /** @type {?} */
    LivechatWidgetComponent.prototype.chatBetweenGroups;
    /** @type {?} */
    LivechatWidgetComponent.prototype.params;
    /** @type {?} */
    LivechatWidgetComponent.prototype.visitor;
    /** @type {?} */
    LivechatWidgetComponent.prototype.gaVersion;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatLoaded;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onAfterLoad;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onBeforeLoad;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatEnded;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatStarted;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatStateChanged;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatWindowHidden;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatWindowMinimized;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onChatWindowOpened;
    /** @type {?} */
    LivechatWidgetComponent.prototype.data;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onMessage;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onPostchatSurveySubmitted;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onPrechatSurveySubmitted;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onRatingCommentSubmitted;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onRatingSubmitted;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onTicketCreated;
    /** @type {?} */
    LivechatWidgetComponent.prototype.onWidgetResize;
    /** @type {?} */
    LivechatWidgetComponent.prototype.agentsAreAvailable;
    /** @type {?} */
    LivechatWidgetComponent.prototype.chatRunning;
    /** @type {?} */
    LivechatWidgetComponent.prototype.chatWindowHidden;
    /** @type {?} */
    LivechatWidgetComponent.prototype.chatWindowMaximized;
    /** @type {?} */
    LivechatWidgetComponent.prototype.chatWindowMinimized;
    /** @type {?} */
    LivechatWidgetComponent.prototype.closeChat;
    /** @type {?} */
    LivechatWidgetComponent.prototype.getChatId;
    /** @type {?} */
    LivechatWidgetComponent.prototype.getChatsNumber;
    /** @type {?} */
    LivechatWidgetComponent.prototype.getLastVisitTimestamp;
    /** @type {?} */
    LivechatWidgetComponent.prototype.getPageViewsNumber;
    /** @type {?} */
    LivechatWidgetComponent.prototype.getVisitorId;
    /** @type {?} */
    LivechatWidgetComponent.prototype.getVisitsNumber;
    /** @type {?} */
    LivechatWidgetComponent.prototype.hideChatWindow;
    /** @type {?} */
    LivechatWidgetComponent.prototype.minimizeChatWindow;
    /** @type {?} */
    LivechatWidgetComponent.prototype.openChatWindow;
    /** @type {?} */
    LivechatWidgetComponent.prototype.setCustomVariables;
    /** @type {?} */
    LivechatWidgetComponent.prototype.setVisitorEmail;
    /** @type {?} */
    LivechatWidgetComponent.prototype.setVisitorName;
    /** @type {?} */
    LivechatWidgetComponent.prototype.triggerSalesTracker;
    /** @type {?} */
    LivechatWidgetComponent.prototype.updateCustomVariables;
    /** @type {?} */
    LivechatWidgetComponent.prototype.visitorEngaged;
    /** @type {?} */
    LivechatWidgetComponent.prototype.visitorQueued;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZWNoYXQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaXZlY2hhdC9hbmd1bGFyLXdpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9saXZlY2hhdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFzRDdCOzRCQXhDZ0MsSUFBSSxPQUFPLEVBQTBCOzJCQUN0QyxJQUFJLE9BQU8sRUFBRTs0QkFDWixJQUFJLE9BQU8sRUFBRTsyQkFDZCxJQUFJLE9BQU8sRUFBRTs2QkFDWCxJQUFJLE9BQU8sRUFBTztrQ0FDYixJQUFJLE9BQU8sRUFBTztrQ0FDbEIsSUFBSSxPQUFPLEVBQUU7cUNBQ1YsSUFBSSxPQUFPLEVBQUU7a0NBQ2hCLElBQUksT0FBTyxFQUFFO3lCQUN0QixJQUFJLE9BQU8sRUFBTzt5Q0FDRixJQUFJLE9BQU8sRUFBTzt3Q0FDbkIsSUFBSSxPQUFPLEVBQU87d0NBQ2xCLElBQUksT0FBTyxFQUFPO2lDQUN6QixJQUFJLE9BQU8sRUFBTzsrQkFDcEIsSUFBSSxPQUFPLEVBQU87OEJBQ25CLElBQUksT0FBTyxFQUFFO0tBeUI5Qjs7OztJQUVqQiwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lB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eyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGl2ZUNoYXRXaWRnZXRBcGlNb2RlbCB9IGZyb20gJy4vbGl2ZWNoYXQtd2lkZ2V0Lm1vZGVscyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpdmVjaGF0LXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXZlY2hhdFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpY2Vuc2VJZDogbnVtYmVyO1xuICBASW5wdXQoKSBncm91cDogbnVtYmVyO1xuICBASW5wdXQoKSBjaGF0QmV0d2Vlbkdyb3VwczogYm9vbGVhbjtcbiAgQElucHV0KCkgcGFyYW1zOiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSB9O1xuICBASW5wdXQoKSB2aXNpdG9yOiB7IG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgfTtcbiAgQElucHV0KCkgZ2FWZXJzaW9uOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGF0TG9hZGVkID0gbmV3IFN1YmplY3Q8TGl2ZUNoYXRXaWRnZXRBcGlNb2RlbD4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkFmdGVyTG9hZCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVMb2FkID0gbmV3IFN1YmplY3QoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYXRFbmRlZCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGF0U3RhcnRlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYXRTdGF0ZUNoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGF0V2luZG93SGlkZGVuID0gbmV3IFN1YmplY3QoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYXRXaW5kb3dNaW5pbWl6ZWQgPSBuZXcgU3ViamVjdCgpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhdFdpbmRvd09wZW5lZCA9IG5ldyBTdWJqZWN0KCk7IGRhdGFcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1lc3NhZ2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Qb3N0Y2hhdFN1cnZleVN1Ym1pdHRlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblByZWNoYXRTdXJ2ZXlTdWJtaXR0ZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SYXRpbmdDb21tZW50U3VibWl0dGVkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uUmF0aW5nU3VibWl0dGVkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uVGlja2V0Q3JlYXRlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbldpZGdldFJlc2l6ZSA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGFnZW50c0FyZUF2YWlsYWJsZTogRnVuY3Rpb247XG4gIHB1YmxpYyBjaGF0UnVubmluZzogRnVuY3Rpb247XG4gIHB1YmxpYyBjaGF0V2luZG93SGlkZGVuOiBGdW5jdGlvbjtcbiAgcHVibGljIGNoYXRXaW5kb3dNYXhpbWl6ZWQ6IEZ1bmN0aW9uO1xuICBwdWJsaWMgY2hhdFdpbmRvd01pbmltaXplZDogRnVuY3Rpb247XG4gIHB1YmxpYyBjbG9zZUNoYXQ6IEZ1bmN0aW9uO1xuICBwdWJsaWMgZ2V0Q2hhdElkOiBGdW5jdGlvbjtcbiAgcHVibGljIGdldENoYXRzTnVtYmVyOiBGdW5jdGlvbjtcbiAgcHVibGljIGdldExhc3RWaXNpdFRpbWVzdGFtcDogRnVuY3Rpb247XG4gIHB1YmxpYyBnZXRQYWdlVmlld3NOdW1iZXI6IEZ1bmN0aW9uO1xuICBwdWJsaWMgZ2V0VmlzaXRvcklkOiBGdW5jdGlvbjtcbiAgcHVibGljIGdldFZpc2l0c051bWJlcjogRnVuY3Rpb247XG4gIHB1YmxpYyBoaWRlQ2hhdFdpbmRvdzogRnVuY3Rpb247XG4gIHB1YmxpYyBtaW5pbWl6ZUNoYXRXaW5kb3c6IEZ1bmN0aW9uO1xuICBwdWJsaWMgb3BlbkNoYXRXaW5kb3c6IEZ1bmN0aW9uO1xuICBwdWJsaWMgc2V0Q3VzdG9tVmFyaWFibGVzOiBGdW5jdGlvbjtcbiAgcHVibGljIHNldFZpc2l0b3JFbWFpbDogRnVuY3Rpb247XG4gIHB1YmxpYyBzZXRWaXNpdG9yTmFtZTogRnVuY3Rpb247XG4gIHB1YmxpYyB0cmlnZ2VyU2FsZXNUcmFja2VyOiBGdW5jdGlvbjtcbiAgcHVibGljIHVwZGF0ZUN1c3RvbVZhcmlhYmxlczogRnVuY3Rpb247XG4gIHB1YmxpYyB2aXNpdG9yRW5nYWdlZDogRnVuY3Rpb247XG4gIHB1YmxpYyB2aXNpdG9yUXVldWVkOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghd2luZG93WydMQ19BUEknXSkge1xuICAgICAgd2luZG93WydfX2xjJ10gPSB3aW5kb3dbJ19fbGMnXSB8fCB7fTtcbiAgICAgIHdpbmRvd1snX19sYyddLmxpY2Vuc2UgPSB0aGlzLmxpY2Vuc2VJZDtcbiAgICAgIHdpbmRvd1snX19sYyddLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICAgIHdpbmRvd1snX19sYyddLmNoYXRfYmV0d2Vlbl9ncm91cHMgPSB0aGlzLmNoYXRCZXR3ZWVuR3JvdXBzO1xuICAgICAgd2luZG93WydfX2xjJ10ucGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gICAgICB3aW5kb3dbJ19fbGMnXS52aXNpdG9yID0gdGhpcy52aXNpdG9yO1xuICAgICAgd2luZG93WydfX2xjJ10uZ2FfdmVyc2lvbiA9IHRoaXMuZ2FWZXJzaW9uO1xuICAgICAgY29uc3QgbGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIGxjLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIGxjLmFzeW5jID0gdHJ1ZTtcbiAgICAgIGxjLnNyYyA9ICdodHRwczovL2Nkbi5saXZlY2hhdGluYy5jb20vdHJhY2tpbmcuanMnO1xuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGMsIHMpO1xuICAgICAgbGMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hhdExvYWRlZCh3aW5kb3dbJ0xDX0FQSSddKTtcbiAgICAgIH0pO1xuICAgICAgbGMuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGF0TG9hZGVkKExDX0FQSTogTGl2ZUNoYXRXaWRnZXRBcGlNb2RlbCkge1xuICAgIHRoaXMuX3NldENhbGxiYWNrcyhMQ19BUEkpO1xuICAgIHRoaXMuX3NldE1ldGhvZHMoTENfQVBJKTtcbiAgICB0aGlzLm9uQ2hhdExvYWRlZC5uZXh0KExDX0FQSSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDYWxsYmFja3MoTENfQVBJOiBMaXZlQ2hhdFdpZGdldEFwaU1vZGVsKSB7XG4gICAgTENfQVBJLm9uX2FmdGVyX2xvYWQgPSAoKSA9PiB0aGlzLm9uQWZ0ZXJMb2FkLm5leHQoKTtcbiAgICBMQ19BUEkub25fYmVmb3JlX2xvYWQgPSAoKSA9PiB0aGlzLm9uQmVmb3JlTG9hZC5uZXh0KCk7XG4gICAgTENfQVBJLm9uX2NoYXRfZW5kZWQgPSAoKSA9PiB0aGlzLm9uQ2hhdEVuZGVkLm5leHQoKTtcbiAgICBMQ19BUEkub25fY2hhdF9zdGFydGVkID0gKGRhdGEpID0+IHRoaXMub25DaGF0U3RhcnRlZC5uZXh0KGRhdGEpO1xuICAgIExDX0FQSS5vbl9jaGF0X3N0YXRlX2NoYW5nZWQgPSAoZGF0YSkgPT4gdGhpcy5vbkNoYXRTdGF0ZUNoYW5nZWQubmV4dChkYXRhKTtcbiAgICBMQ19BUEkub25fY2hhdF93aW5kb3dfaGlkZGVuID0gKCkgPT4gdGhpcy5vbkNoYXRXaW5kb3dIaWRkZW4ubmV4dCgpO1xuICAgIExDX0FQSS5vbl9jaGF0X3dpbmRvd19taW5pbWl6ZWQgPSAoKSA9PiB0aGlzLm9uQ2hhdFdpbmRvd01pbmltaXplZC5uZXh0KCk7XG4gICAgTENfQVBJLm9uX2NoYXRfd2luZG93X29wZW5lZCA9ICgpID0+IHRoaXMub25DaGF0V2luZG93T3BlbmVkLm5leHQoKTtcbiAgICBMQ19BUEkub25fbWVzc2FnZSA9IChkYXRhKSA9PiB0aGlzLm9uTWVzc2FnZS5uZXh0KGRhdGEpO1xuICAgIExDX0FQSS5vbl9wb3N0Y2hhdF9zdXJ2ZXlfc3VibWl0dGVkID0gKGRhdGEpID0+IHRoaXMub25Qb3N0Y2hhdFN1cnZleVN1Ym1pdHRlZC5uZXh0KGRhdGEpO1xuICAgIExDX0FQSS5vbl9wcmVjaGF0X3N1cnZleV9zdWJtaXR0ZWQgPSAoZGF0YSkgPT4gdGhpcy5vblByZWNoYXRTdXJ2ZXlTdWJtaXR0ZWQubmV4dChkYXRhKTtcbiAgICBMQ19BUEkub25fcmF0aW5nX2NvbW1lbnRfc3VibWl0dGVkID0gKGRhdGEpID0+IHRoaXMub25SYXRpbmdDb21tZW50U3VibWl0dGVkLm5leHQoZGF0YSk7XG4gICAgTENfQVBJLm9uX3JhdGluZ19zdWJtaXR0ZWQgPSAoZGF0YSkgPT4gdGhpcy5vblJhdGluZ1N1Ym1pdHRlZC5uZXh0KGRhdGEpO1xuICAgIExDX0FQSS5vbl90aWNrZXRfY3JlYXRlZCA9IChkYXRhKSA9PiB0aGlzLm9uVGlja2V0Q3JlYXRlZC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0TWV0aG9kcyhMQ19BUEk6IExpdmVDaGF0V2lkZ2V0QXBpTW9kZWwpIHtcbiAgICB0aGlzLmFnZW50c0FyZUF2YWlsYWJsZSA9ICgpID0+IExDX0FQSS5hZ2VudHNfYXJlX2F2YWlsYWJsZSgpO1xuICAgIHRoaXMuY2hhdFJ1bm5pbmcgPSAoKSA9PiBMQ19BUEkuY2hhdF9ydW5uaW5nKCk7XG4gICAgdGhpcy5jaGF0V2luZG93SGlkZGVuID0gKCkgPT4gTENfQVBJLmNoYXRfd2luZG93X2hpZGRlbigpO1xuICAgIHRoaXMuY2hhdFdpbmRvd01heGltaXplZCA9ICgpID0+IExDX0FQSS5jaGF0X3dpbmRvd19tYXhpbWl6ZWQoKTtcbiAgICB0aGlzLmNoYXRXaW5kb3dNaW5pbWl6ZWQgPSAoKSA9PiBMQ19BUEkuY2hhdF93aW5kb3dfbWluaW1pemVkKCk7XG4gICAgdGhpcy5jbG9zZUNoYXQgPSAoKSA9PiBMQ19BUEkuY2xvc2VfY2hhdCgpO1xuICAgIHRoaXMuZ2V0Q2hhdElkID0gKCkgPT4gTENfQVBJLmdldF9jaGF0X2lkKCk7XG4gICAgdGhpcy5nZXRDaGF0c051bWJlciA9ICgpID0+IExDX0FQSS5nZXRfY2hhdHNfbnVtYmVyKCk7XG4gICAgdGhpcy5nZXRMYXN0VmlzaXRUaW1lc3RhbXAgPSAoKSA9PiBMQ19BUEkuZ2V0X2xhc3RfdmlzaXRfdGltZXN0YW1wKCk7XG4gICAgdGhpcy5nZXRQYWdlVmlld3NOdW1iZXIgPSAoKSA9PiBMQ19BUEkuZ2V0X3BhZ2Vfdmlld3NfbnVtYmVyKCk7XG4gICAgdGhpcy5nZXRWaXNpdG9ySWQgPSAoKSA9PiBMQ19BUEkuZ2V0X3Zpc2l0b3JfaWQoKTtcbiAgICB0aGlzLmdldFZpc2l0c051bWJlciA9ICgpID0+IExDX0FQSS5nZXRfdmlzaXRzX251bWJlcigpO1xuICAgIHRoaXMuaGlkZUNoYXRXaW5kb3cgPSAoKSA9PiBMQ19BUEkuaGlkZV9jaGF0X3dpbmRvdygpO1xuICAgIHRoaXMubWluaW1pemVDaGF0V2luZG93ID0gKCkgPT4gTENfQVBJLm1pbmltaXplX2NoYXRfd2luZG93KCk7XG4gICAgdGhpcy5vcGVuQ2hhdFdpbmRvdyA9ICgpID0+IExDX0FQSS5vcGVuX2NoYXRfd2luZG93KCk7XG4gICAgdGhpcy5zZXRDdXN0b21WYXJpYWJsZXMgPSAodCkgPT4gTENfQVBJLnNldF9jdXN0b21fdmFyaWFibGVzKHQpO1xuICAgIHRoaXMuc2V0VmlzaXRvckVtYWlsID0gKHQpID0+IExDX0FQSS5zZXRfdmlzaXRvcl9lbWFpbCh0KTtcbiAgICB0aGlzLnNldFZpc2l0b3JOYW1lID0gKHQpID0+IExDX0FQSS5zZXRfdmlzaXRvcl9uYW1lKHQpO1xuICAgIHRoaXMudHJpZ2dlclNhbGVzVHJhY2tlciA9IChlLCB0KSA9PiBMQ19BUEkudHJpZ2dlcl9zYWxlc190cmFja2VyKGUsIHQpO1xuICAgIHRoaXMudXBkYXRlQ3VzdG9tVmFyaWFibGVzID0gKHQpID0+IExDX0FQSS51cGRhdGVfY3VzdG9tX3ZhcmlhYmxlcyh0KTtcbiAgICB0aGlzLnZpc2l0b3JFbmdhZ2VkID0gKCkgPT4gTENfQVBJLnZpc2l0b3JfZW5nYWdlZCgpO1xuICAgIHRoaXMudmlzaXRvclF1ZXVlZCA9ICgpID0+IExDX0FQSS52aXNpdG9yX3F1ZXVlZCgpO1xuICB9XG59XG4iXX0=