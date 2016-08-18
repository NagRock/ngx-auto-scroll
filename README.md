# Angular2AutoScroll

## Installation
npm install angular2-auto-scroll

## Usage

#### In component:

```typescript
import {Angular2AutoScroll} from "angular2-auto-scroll/lib/angular2-auto-scroll.directive";

@Component({
   selector: 'sample',
   templateUrl: 'sample.component.html',
   styleUrls: ['sample.component.css'],
   directives: [Angular2AutoScroll]
})
```

#### In template:

```html
<div angular2-auto-scroll="50"></div>
```

Argument passed to directive is bottom offset of scroll position in pixels after scroll container stops auto scroll. Default value is 10.

## Building

```
npm run build
```