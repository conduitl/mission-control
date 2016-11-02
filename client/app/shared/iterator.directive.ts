import { Directive, Input, OnChanges } from '@angular/core';
import { TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
@Directive({ selector: '[ct7Iterator]' })
export class IteratorDirective { 
    
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set ct7Iterator(count: number) {
        this.viewContainer.clear();
        for ( let i = 0; i < count; i++) {
            let viewRef =  this.viewContainer.createEmbeddedView(this.templateRef);
            viewRef.context.index = i;
        }
    }

}