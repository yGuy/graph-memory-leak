import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Node } from './interfaces/node';
import { Edge } from './interfaces/edge';
import { CustomGraphComponent } from './classes/custom-graph-component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements AfterViewInit, OnDestroy {
  private readonly yFilesLicense = { };

  @ViewChild('graphDiv') private graphDivRef: ElementRef<HTMLDivElement>;

  private customGraphComponent: CustomGraphComponent;

  @Input() nodes: Node[];
  @Input() edges: Edge[];

  @Output() initialized: EventEmitter<void> = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.customGraphComponent = new CustomGraphComponent(
      this.yFilesLicense,
      this.graphDivRef.nativeElement,
      this.nodes,
      this.edges
    );

    this.initialized.emit();
  }

  ngOnDestroy(): void {
    this.customGraphComponent.graph.clear();
    this.customGraphComponent.cleanUp();
  }

  build(): void {
    this.customGraphComponent.build();
  }

  async applyLayout(): Promise<void> {
    return this.customGraphComponent.applyLayout();
  }
}
