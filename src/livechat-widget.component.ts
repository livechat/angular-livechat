import { Component, OnInit, Input, Output } from '@angular/core';
import { LiveChatWidgetApiModel } from './livechat-widget.models';
import { Subject } from 'rxjs';

@Component({
  selector: 'livechat-widget',
  template: ``,
  styles: []
})
export class LivechatWidgetComponent implements OnInit {
  @Input() licenseId: number;
  @Input() group: number;
  @Input() chatBetweenGroups: boolean;
  @Input() params: { name: string, value: any };
  @Input() visitor: { name: string, email: string, };
  @Input() gaVersion: string;
  @Output() public onChatLoaded = new Subject<LiveChatWidgetApiModel>();
  @Output() public onAfterLoad = new Subject();
  @Output() public onBeforeLoad = new Subject();
  @Output() public onChatEnded = new Subject();
  @Output() public onChatStarted = new Subject<any>();
  @Output() public onChatStateChanged = new Subject<any>();
  @Output() public onChatWindowHidden = new Subject();
  @Output() public onChatWindowMinimized = new Subject();
  @Output() public onChatWindowOpened = new Subject(); data
  @Output() public onMessage = new Subject<any>();
  @Output() public onPostchatSurveySubmitted = new Subject<any>();
  @Output() public onPrechatSurveySubmitted = new Subject<any>();
  @Output() public onRatingCommentSubmitted = new Subject<any>();
  @Output() public onRatingSubmitted = new Subject<any>();
  @Output() public onTicketCreated = new Subject<any>();
  @Output() public onWidgetResize = new Subject();

  public agentsAreAvailable: Function;
  public chatRunning: Function;
  public chatWindowHidden: Function;
  public chatWindowMaximized: Function;
  public chatWindowMinimized: Function;
  public closeChat: Function;
  public getChatId: Function;
  public getChatsNumber: Function;
  public getLastVisitTimestamp: Function;
  public getPageViewsNumber: Function;
  public getVisitorId: Function;
  public getVisitsNumber: Function;
  public hideChatWindow: Function;
  public minimizeChatWindow: Function;
  public openChatWindow: Function;
  public setCustomVariables: Function;
  public setVisitorEmail: Function;
  public setVisitorName: Function;
  public triggerSalesTracker: Function;
  public updateCustomVariables: Function;
  public visitorEngaged: Function;
  public visitorQueued: Function;
  private lc: HTMLScriptElement;

  constructor() { }

  ngOnInit() {
    if (!window['LC_API']) {
      window['__lc'] = window['__lc'] || {};
      window['__lc'].license = this.licenseId;
      window['__lc'].group = this.group;
      window['__lc'].chat_between_groups = this.chatBetweenGroups;
      window['__lc'].params = this.params;
      window['__lc'].visitor = this.visitor;
      window['__lc'].ga_version = this.gaVersion;
      const api = { _q: [], _h: null, call: (...args) =>  api._h && api._h.apply(null, ['call', [].slice.call(args)])  };
      window['LiveChatWidget'] = api;
      this.lc = document.createElement('script');
      this.lc.type = 'text/javascript';
      this.lc.async = true;
      this.lc.src = 'https://cdn.livechatinc.com/tracking.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(this.lc, s);
      this.lc.addEventListener('load', () => {
        this._chatLoaded(window['LC_API']);
      });
      this.lc.addEventListener('error', (error) => {
        console.error(error);
      });
    }
  }

  ngOnDestroy(){
    if(window['LiveChatWidget'] && typeof window['LiveChatWidget'].call === 'function') {
      window['LiveChatWidget'].call('destroy');
      this.lc && this.lc.remove();
      ['secure.livechat.com', 'secure.livechatinc.com'].forEach(domain => {
        Array.from(document.querySelectorAll(`[src*="${domain}"]`)).forEach(s => s.remove())
      })
    }
  }

  private _chatLoaded(LC_API: LiveChatWidgetApiModel) {
    this._setCallbacks(LC_API);
    this._setMethods(LC_API);
    this.onChatLoaded.next(LC_API);
  }

  private _setCallbacks(LC_API: LiveChatWidgetApiModel) {
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

  private _setMethods(LC_API: LiveChatWidgetApiModel) {
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
