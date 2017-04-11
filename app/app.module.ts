import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {eventshomeAppComponent} from   './home.component'

@NgModule({
    imports :  [BrowserModule],
    declarations : [eventshomeAppComponent], 
    bootstrap: [eventshomeAppComponent]
})

export class AppModule{

}
