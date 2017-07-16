import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from "rxjs/Subscription";

@Directive({selector: '[screenBelowLarge]'})
export class ScreenBelowLargeDirective implements OnDestroy{
    screenSubscription: Subscription;
    private hasView = false;

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService
    ) {
        this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenLarge(condition) {
        condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

        if (condition && !this.hasView) {
            //view container refers to the element this attribute is on, template is the HTML part...
            //create embedded view pushes the template on the dom
            this.viewContainer.createEmbeddedView(this.template);
            this.hasView = true;
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }
 
    onResize() {
        //just to trigger the setter
        this.screenLarge = false;
    }

    ngOnDestroy(): void {
        this.screenSubscription.unsubscribe();
    }
}