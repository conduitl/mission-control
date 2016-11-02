import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[ct7StyleByType]'})
export class StyleByTypeDirective implements OnInit {
    @Input() ct7StyleByType: any;
    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnInit() {
        if (typeof this.ct7StyleByType === 'number') {
            this.renderer.setElementStyle(this.el.nativeElement, 'text-align', 'right');
        }
    }
}