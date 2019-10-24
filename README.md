### Livechat Widget for Angular

Library to integrate LiveChat Widget with your Angular App.

#### Demo

StackBlitz [live example](https://stackblitz.com/edit/livechat-angular-widget).

#### Installation

`npm install --save @livechat/angular-widget`

#### Usage

##### Import `LivechatWidgetModule` in Angular AppModule.


```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LivechatWidgetModule } from '@livechat/angular-widget'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	LivechatWidgetModule,
  ],
  providers: [],
  bootstrap: [
	  AppComponent,
	]
})
export class AppModule { }
```

##### Use the LiveChat Angular Widget in your template:

```html
<livechat-widget licenseId="10073628"></livechat-widget>
```

As optional parameters, you can define:
* `group`
* `chatBetweenGroups`
* `params`
* `visitor`
* `gaVersion`

To get more details about usage of the optional paramteres please read our [tracking code documentation](https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#tracking-code).

##### Access to the LiveChat Widget API using callback method


```html
<livechat-widget licenseId="10073628" (onChatLoaded)="onChatLoaded($event)"></livechat-widget>
```

```javascript
import { Component } from '@angular/core';
import { LiveChatWidgetApiModel } from '@livechat/angular-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  liveChatApi: LiveChatWidgetApiModel

  constructor() { }

  onChatLoaded(api: LiveChatWidgetApiModel) {
    this.liveChatApi = api;
  }
}
```

##### Access to the LiveChat Widget API using @ViewChild decorator

```html
<livechat-widget #liveChatWidget licenseId="10073628" ></livechat-widget>
```

```javascript
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { LiveChatWidgetModel } from '@livechat/angular-widget';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('liveChatWidget') liveChatWidget: LiveChatWidgetModel;
  liveChatWidget$: Subscription = new Subscription();
  liveChatApi: LiveChatWidgetApiModel;

  constructor() { }

  ngOnInit(): void {
    this.liveChatWidget$ = this.liveChatWidget.onChatLoaded.subscribe((api: LiveChatWidgetApiModel) => this.liveChatApi = api)
  }

  ngOnDestroy(): void {
	  this.liveChatWidget$.unsubscribe();
  }
}
```
