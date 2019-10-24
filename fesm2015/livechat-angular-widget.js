import { Subject } from 'rxjs';
import { Component, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LivechatWidgetComponent {
    constructor() {
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
    ngOnInit() {
        if (!window['LC_API']) {
            window['__lc'] = window['__lc'] || {};
            window['__lc'].license = this.licenseId;
            window['__lc'].group = this.group;
            window['__lc'].chat_between_groups = this.chatBetweenGroups;
            window['__lc'].params = this.params;
            window['__lc'].visitor = this.visitor;
            window['__lc'].ga_version = this.gaVersion;
            /** @type {?} */
            const lc = document.createElement('script');
            lc.type = 'text/javascript';
            lc.async = true;
            lc.src = 'https://cdn.livechatinc.com/tracking.js';
            /** @type {?} */
            const s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(lc, s);
            lc.addEventListener('load', () => {
                this._chatLoaded(window['LC_API']);
            });
            lc.addEventListener('error', (error) => {
                console.error(error);
            });
        }
    }
    /**
     * @param {?} LC_API
     * @return {?}
     */
    _chatLoaded(LC_API) {
        this._setCallbacks(LC_API);
        this._setMethods(LC_API);
        this.onChatLoaded.next(LC_API);
    }
    /**
     * @param {?} LC_API
     * @return {?}
     */
    _setCallbacks(LC_API) {
        LC_API.on_after_load = () => this.onAfterLoad.next();
        LC_API.on_before_load = () => this.onBeforeLoad.next();
        LC_API.on_chat_ended = () => this.onChatEnded.next();
        LC_API.on_chat_started = (data) => this.onChatStarted.next(data);
        LC_API.on_chat_state_changed = (data) => this.onChatStateChanged.next(data);
        LC_API.on_chat_window_hidden = () => this.onChatWindowHidden.next();
        LC_API.on_chat_window_minimized = () => this.onChatWindowMinimized.next();
        LC_API.on_chat_window_opened = () => this.onChatWindowOpened.next();
        LC_API.on_message = (data) => this.onMessage.next(data);
        LC_API.on_postchat_survey_submitted = (data) => this.onPostchatSurveySubmitted.next(data);
        LC_API.on_prechat_survey_submitted = (data) => this.onPrechatSurveySubmitted.next(data);
        LC_API.on_rating_comment_submitted = (data) => this.onRatingCommentSubmitted.next(data);
        LC_API.on_rating_submitted = (data) => this.onRatingSubmitted.next(data);
        LC_API.on_ticket_created = (data) => this.onTicketCreated.next(data);
    }
    /**
     * @param {?} LC_API
     * @return {?}
     */
    _setMethods(LC_API) {
        this.agentsAreAvailable = () => LC_API.agents_are_available();
        this.chatRunning = () => LC_API.chat_running();
        this.chatWindowHidden = () => LC_API.chat_window_hidden();
        this.chatWindowMaximized = () => LC_API.chat_window_maximized();
        this.chatWindowMinimized = () => LC_API.chat_window_minimized();
        this.closeChat = () => LC_API.close_chat();
        this.getChatId = () => LC_API.get_chat_id();
        this.getChatsNumber = () => LC_API.get_chats_number();
        this.getLastVisitTimestamp = () => LC_API.get_last_visit_timestamp();
        this.getPageViewsNumber = () => LC_API.get_page_views_number();
        this.getVisitorId = () => LC_API.get_visitor_id();
        this.getVisitsNumber = () => LC_API.get_visits_number();
        this.hideChatWindow = () => LC_API.hide_chat_window();
        this.minimizeChatWindow = () => LC_API.minimize_chat_window();
        this.openChatWindow = () => LC_API.open_chat_window();
        this.setCustomVariables = (t) => LC_API.set_custom_variables(t);
        this.setVisitorEmail = (t) => LC_API.set_visitor_email(t);
        this.setVisitorName = (t) => LC_API.set_visitor_name(t);
        this.triggerSalesTracker = (e, t) => LC_API.trigger_sales_tracker(e, t);
        this.updateCustomVariables = (t) => LC_API.update_custom_variables(t);
        this.visitorEngaged = () => LC_API.visitor_engaged();
        this.visitorQueued = () => LC_API.visitor_queued();
    }
}
LivechatWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'livechat-widget',
                template: ``
            }] }
];
/** @nocollapse */
LivechatWidgetComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LivechatWidgetModule {
}
LivechatWidgetModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [LivechatWidgetComponent],
                exports: [LivechatWidgetComponent]
            },] }
];

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