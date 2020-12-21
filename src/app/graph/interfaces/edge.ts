import { GraphElement } from './graph-element';

export interface Edge extends GraphElement {
  from: string;
  to: string;
}
