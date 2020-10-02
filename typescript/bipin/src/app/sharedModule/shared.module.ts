import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
    ],
    imports: [FormsModule],
    exports: [FooterComponent, HeaderComponent]
})
export class SharedModule {

}