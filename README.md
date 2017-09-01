### Livechat Widget for Angular
Angular component to integrate LiveChat with your single-page app.

#### Installation
`npm install --save @livechat/angular-widget`

#### Usage
Import `LivechatWidgetModule` in Angular modules.

```
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
```
<livechat-widget [licenseId]="YOUR LICENSE ID"></livechat-widget>
```

#### Demo
Check out [live example](http://plnkr.co/edit/bvMZNePnRJPIFPeKd1Ep?p=preview).