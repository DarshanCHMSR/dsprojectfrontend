import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const App = () => {
  // Define some nodes and edges for the flow
  const nodes = [
    {
      id: '1',
      position: { x: 250, y: 0 },
      data: { label: 'Node 1' },
      type: 'default',
    },
    {
      id: '4',
      position: { x: 450, y: 200 },
      data: { label: 'Node 4' },
      type: 'default',
    },
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'Node 2' },
      type: 'default',
    },
    {
      id: '3',
      position: { x: 400, y: 100 },
      data: { label: 'Node 3' },
      type: 'default',
    },
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '2', target: '4' },
  ];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
};

export default App;
