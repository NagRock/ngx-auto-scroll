import {Directive, ElementRef, HostListener, AfterContentInit, Input, OnDestroy} from "@angular/core";

@Directive({
    selector: '[angular2-auto-scroll]'
})
export class Angular2AutoScroll implements AfterContentInit, OnDestroy {
    @Input('angular2-auto-scroll') lockYOffset = 10;

    @Input() set observeAttributes(observeAttributes: boolean) {
        this._observeAttributes = observeAttributes || false;
    }

    private nativeElement: HTMLElement;
    private isLocked = false;
    private mutationObserver: MutationObserver;
    private _observeAttributes: boolean = false;

    constructor(element: ElementRef) {
        this.nativeElement = element.nativeElement;
    }

    @HostListener('scroll')
    private scrollHandler() {
        const scrollFromBottom = this.nativeElement.scrollHeight - this.nativeElement.scrollTop - this.nativeElement.clientHeight;
        this.isLocked = scrollFromBottom > this.lockYOffset;
    }

    ngAfterContentInit(): void {
        this.mutationObserver = new MutationObserver(() => {
            if (!this.isLocked) {
                this.nativeElement.scrollTop = this.nativeElement.scrollHeight;
            }
        });
        this.mutationObserver.observe(this.nativeElement, {
            childList: true,
            subtree: true,
            attributes: this._observeAttributes
        });
    }

    ngOnDestroy() {
        this.mutationObserver.disconnect();
    }
}