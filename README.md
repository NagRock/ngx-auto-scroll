# Angular2AutoScroll

## Installation
npm install angular2-auto-scroll

## Usage

#### In component:

```typescript
import {Angular2AutoScroll} from "angular2-auto-scroll/lib/angular2-auto-scroll.directive";

@Component({
   selector: 'click-meeting-chat',
   templateUrl: 'chat.component.html',
   styleUrls: ['chat.component.css'],
   directives: [Angular2AutoScroll]
})
```

#### In template:

```html
<div angular2-auto-scroll="50"></div>
```

Argument passed to directive is bottom offset of scroll position in pixels after scroll container stops auto scroll. Default value is 10.