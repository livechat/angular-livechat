### Livechat Widget for Angular

Angular directive to integrate LiveChat with your single-page app.

#### Installation

`npm install --save @livechat/angular-widget`

#### Usage

Import `LivechatWidgetModule` in Angular modules.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LivechatWidgetModule } from '@livechat/angular-widget';

@NgModule({
  imports: [BrowserModule, LivechatWidgetModule],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}
```

Use `LivechatWidgetDirective` in your templates:

```js
<livechat-widget licenseId="YOUR LICENSE ID" />
```

As optional parameters, you can define:

`group` for e.g. `group="1"`

```
/**
 * Chat window group (defaults to "0").
 * You can divide LiveChat agents into different departments,
 * such as "Billing" or "Support".
 * For example, if this parameter will point to group "Billing",
 * all visitors entering the chat will talk with agents
 * from this group and not the "Support" group.
 *
 * Create your group in LiveChat app:
 * https://my.livechatinc.com/agents/groups
 */
```

`gaVersion` for e.g. `gaVersion="gtm"`

```
/**
 * By default, our tracking code stores LiveChat related data
 * in the Google Analytics gaq - traditional asynchronous
 * code for Google Analytics.
 *
 * If you are using a different type of Google Analytics,
 * you can decide which one LiveChat should track.
 *
 * The available options are:
 * ga – Universal Analytics;
 * gtm – Google Tag Manager;
 * gtag – Global Site Tag (gtag.js);
 * gaq – traditional asynchronous code for Google Analytics.
 */
```

Let us know if you are looking for more options from our [tracking code](https://docs.livechatinc.com/js-api/#tracking-code) .

#### Demo

Check out plunker [live example](http://plnkr.co/edit/bvMZNePnRJPIFPeKd1Ep?p=preview).

or the stackblitz [live example](https://stackblitz.com/edit/livechat?embed=1&file=main.ts).
