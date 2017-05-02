# Deprecated

Please use ngx-auto-scroll instead.

# Angular 2 auto scroll directive

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
<div angular2-auto-scroll lock-y-offset="10" observe-attributes>
    <div *ngFor="let message of messages">{{ message }}</div>
</div>
```

#### Atribiutes:
 
Argument passed to `lock-y-offset` is bottom offset of scroll position in pixels after scroll container stops auto scroll. Default value is 10.

`observe-attributes` (optional, default - false) enable listening on attributes changes for example detect changes in font size.
## Building

```
npm run build
```
