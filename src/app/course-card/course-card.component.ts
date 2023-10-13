import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course: Course;
  @Input() cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>()


  onCourseView(){
    this.courseSelected.emit(this.course)
  }

  /**ngIf function */
  // isImageVisible(){
  //   return this.course.iconUrl && this.course
  // }

  /**ngClass function */
  // cardClasses(){
  //   if(this.course.category == 'BEGINNER'){
  //     return 'beginner';
  //   }
  // }

  /**ngStyle function */
  // cardStyle(){
  //   return {'text-decoration': 'underline'}
  // }
}
