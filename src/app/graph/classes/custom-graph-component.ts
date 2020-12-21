import {
  Class,
  GraphBuilder,
  GraphComponent,
  HierarchicLayout,
  LayoutExecutor,
  License,
  PolylineEdgeStyle,
  StringTemplateNodeStyle,
  TimeSpan,
} from 'yfiles';
import { Edge } from '../interfaces/edge';
import { Node } from '../interfaces/node';

export class CustomGraphComponent extends GraphComponent {
  private graphBuilder: GraphBuilder;

  build(): void {
    this.graphBuilder.buildGraph();
  }

  async applyLayout(): Promise<void> {
    return this.morphLayout(
      new HierarchicLayout(),
      new TimeSpan(0, 0, 0, 0, 500)
    );
  }

  constructor(
    license: object,
    div: HTMLDivElement,
    nodesSource: Node[],
    edgesSource: Edge[]
  ) {
    Class.ensure(LayoutExecutor);

    License.value = license;

    super(div);

    this.initializeGraphBuilder(nodesSource, edgesSource);
    this.initializeStyles();
  }

  private initializeGraphBuilder(
    nodesSource: Node[],
    edgesSource: Edge[]
  ): void {
    this.graphBuilder = new GraphBuilder(this.graph);
    this.graphBuilder.edgeIdBinding = 'id';
    this.graphBuilder.edgeLabelBinding = 'label';
    this.graphBuilder.sourceNodeBinding = 'from';
    this.graphBuilder.targetNodeBinding = 'to';
    this.graphBuilder.nodeIdBinding = 'id';
    this.graphBuilder.nodeLabelBinding = 'label';
    this.graphBuilder.nodesSource = nodesSource;
    this.graphBuilder.edgesSource = edgesSource;
  }

  private initializeStyles(): void {
    const nodeStyle = new StringTemplateNodeStyle(
      '<svg height="{TemplateBinding height}" width="{TemplateBinding width}" shape-rendering="crispEdges" style="overflow: visible;">\n' +
        '  <g>\n' +
        '    <rect fill="#fff" height="100%" width="100%" stroke="{Binding color}"></rect>\n' +
        '    <rect fill="{Binding color}" height="100%" width="5px" x="0" y="0"></rect>\n' +
        '  </g>\n' +
        '</svg>'
    );
    const edgeStyle = new PolylineEdgeStyle();

    this.graph.nodeDefaults.style = nodeStyle;
    this.graph.edgeDefaults.style = edgeStyle;
  }
}
