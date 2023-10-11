import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>

  ngAfterViewInit() {
    console.log(this.cards)
  }

  // @ViewChild(CourseCardComponent)
  // card: CourseCardComponent

  /**Built-in pipes */
  // title = COURSES[0].description;

  // startDate = new Date(2000, 0, 1)

  // price = 9.99

  // rate = 0.89

  // course = COURSES[0]

  onCourseSelected(course:Course){
    //console.log("App component - button clicked...", course)
  }
}
