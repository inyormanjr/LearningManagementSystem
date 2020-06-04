import { User } from '../user';
import { Lesson } from '../lessonsAgg/lesson';

export interface Course {
  id: string;
  courseName: string;
  courseShortName: string;
  courseCode: string;
  courseDate: Date;
  courseSummary: string;
  courseCategory: string;
  assignedInstructors: User[];
  lessons: Lesson[];
}
