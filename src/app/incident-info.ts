import { ResponseItem } from './response-item';

export class IncidentInfo{
  id: string;
  title: string;
  responseItems:  ResponseItem.itemNo[];
}