import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, 
    NavComponent, ContentComponent, 
    FooterComponent],
    
    exports:[
      ContentComponent,
      FooterComponent,
      HeaderComponent,
      NavComponent
    ],
  imports: [
  ]
})
export class WrapperModule { }
