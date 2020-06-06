import { TopicExercise } from './topicExercise';

export interface Topic {
  index: number;
  title: string;
  details: string;
  sample: string;
  exercise: TopicExercise;
}
