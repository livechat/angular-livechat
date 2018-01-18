### Livechat Widget for Angular
Angular directive to integrate LiveChat with your single-page app.

#### Installation
`npm install --save @livechat/angular-widget`

#### Usage
Import `LivechatWidgetModule` in Angular modules.

```js
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LivechatWidgetModule } '@livechat/angular-widget'

@NgModule({
  imports: [ BrowserModule, LivechatWidgetModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
```

Use `LivechatWidgetDirective` in your templates:
```js
<livechat-widget [licenseId]="YOUR LICENSE ID"></livechat-widget>
```

#### Demo
Check out plunker [live example](http://plnkr.co/edit/bvMZNePnRJPIFPeKd1Ep?p=preview).

or the stackblitz [live example](https://stackblitz.com/edit/livechat?embed=1&file=main.ts).
