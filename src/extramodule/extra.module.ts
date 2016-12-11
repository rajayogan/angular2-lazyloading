import {NgModule} from '@angular/core';

import {ExtraComponent} from './extra.component';
import {routing} from './extra.routing';

@NgModule({
    imports: [routing],
    declarations: [ExtraComponent]
    
})

export class ExtraModule {}