# Angular 2+ auto scroll directive

## Installation
npm install ngx-auto-scroll

## Usage

#### In component:

```typescript
import {NgxAutoScroll} from "ngx-auto-scroll/lib/ngx-auto-scroll.directive";

@Component({
   selector: 'sample',
   templateUrl: 'sample.component.html',
   styleUrls: ['sample.component.css'],
   directives: [NgxAutoScroll]
})
```

#### In template:

```html
<div ngx-auto-scroll lock-y-offset="10" observe-attributes>
    <div *ngFor="let message of messages">{{ message }}</div>
</div>
```

#### Atribiutes:
 
Argument passed to `lock-y-offset` is bottom offset of scroll position in pixels after scroll container stops auto scroll. Default value is 10.

`observe-attributes` (optional, default - false) enable listening on attributes changes for example detect changes in font size.

#### Forcing scroll down

When your DOM element or its parent is hidden auto scroll won't work. There is no simple/pure way to scroll hidden element. The best way is to force scrolling down after the element is shown.

```typescript
@Component({
   selector: 'sample',
   directives: [NgxAutoScroll]
})
export class SampleComponent {
    @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
    
    public forceScrollDown(): void {
        this.ngxAutoScroll.forceScrollDown();
    }
}
```

## Building

```
npm run build
```
