import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {eventshomeAppComponent} from   './home.component'
import { eventsAppComponent } from './events-app.component'
import {EventListComponent} from './events/event-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavigationBarComponent} from './navigation/nav-bar.component'
@NgModule({
    imports :  [BrowserModule],
    declarations : [
    eventshomeAppComponent , 
    eventsAppComponent, 
    EventListComponent, 
    EventThumbnailComponent,
    NavigationBarComponent],
    bootstrap: [eventshomeAppComponent]
})

export class AppModule{

}
