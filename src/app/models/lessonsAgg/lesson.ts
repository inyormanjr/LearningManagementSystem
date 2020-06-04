import { Topic } from './topic';

export interface Lesson {
  title: string;
  subTitle: string;
  dateCreated: Date;
  duration: number;
  topics: Topic[];
}
