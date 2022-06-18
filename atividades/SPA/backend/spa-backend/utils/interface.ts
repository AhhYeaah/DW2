import { messageType } from './enum';

export interface EventInterface {
  type: messageType;
  screenshot: string;
  comment: string;
}
