import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SlideComponent } from './slide/slide.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ParallComponent } from './parall/parall.component';
import { EventComponent } from './event/event.component';
import { FirstdayComponent } from './firstday/firstday.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SlideComponent,
    SubMenuComponent,
    ActivitiesComponent,
    ParallComponent,
    EventComponent,
    FirstdayComponent,
    TeacherComponent,
    CourseComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
