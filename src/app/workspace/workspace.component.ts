import { Component } from '@angular/core';
import { Node } from '../graph/interfaces/node';
import { Edge } from '../graph/interfaces/edge';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent {
  nodes: Node[] = [
    { id: '1', label: 'Node 1', color: 'red' },
    { id: '2', label: 'Node 2', color: 'blue' },
    { id: '3', label: 'Node 3', color: 'green' },
    { id: '4', label: 'Node 4', color: 'yellow' },
  ];

  edges: Edge[] = [
    { id: '1', label: 'Edge 1', from: '1', to: '2' },
    { id: '2', label: 'Edge 2', from: '2', to: '3' },
    { id: '3', label: 'Edge 3', from: '3', to: '4' },
    { id: '4', label: 'Edge 4', from: '3', to: '1' },
  ];
}
