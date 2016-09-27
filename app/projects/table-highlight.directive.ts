import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[rowHighlight]'
})
export class TableHighlightDirective {
    private _defaultColor = 'yellow';
    color: string;

    constructor(
        private el: ElementRef,
        private renderer: Renderer) { }
    
    @Input('rowHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    @HostListener('click') onClick() {
        this.highlight('green');
    }

    @HostListener('mousedown') onMouseDown() {
        this.highlight('blue');
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
    }
}