import { useState, useCallback, useEffect, useReducer } from 'react'
import Tree from 'react-d3-tree';
import { buildPath } from './pathGenerator';

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const [dimensions, setDimensions] = useState();
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [dimensions, translate, containerRef];
};

const renderCategoryNode = (tags) => ({ nodeDatum, toggleNode }) => {
  return (
    <g>
      <rect width="20" height="20" x="-10" onClick={toggleNode} fill={nodeDatum.is_viewed ? "green" : "black"}/>
      <text fill="black" strokeWidth="1" x="20">
        {nodeDatum.name}
      </text>
      {nodeDatum.attributes?.modules && (
        <text fill="black" x="20" dy="20" strokeWidth="1">
          Modules: {nodeDatum.attributes?.modules}
        </text>
      )}
      {nodeDatum.attributes?.techniques && (
        <text fill="black" x="20" dy="20" strokeWidth="1">
          Techniques: {nodeDatum.attributes?.techniques}
        </text>
      )}
    </g>
  );
}

export function getTags() {
  return fetch('http://ec2-3-137-166-173.us-east-2.compute.amazonaws.com/discovery')
    .then(data => data.json())
}

function App() {
  const [dimensions, translate, containerRef] = useCenteredTree();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {loading: true, tags: [], path: useState(buildPath([]))}
  );

  useEffect(() => {
    let mounted = true;
    getTags()
      .then(items => {
        if(mounted) {
          const filteredItems = items.filter(item => item.length > 0);
          console.log(filteredItems);
          setState({loading: false, tags: filteredItems, path: filteredItems.length > 0 ? buildPath(filteredItems) : buildPath([])})
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree data={state.path} orientation="vertical" renderCustomNodeElement={renderCategoryNode(state.tags)} dimensions={dimensions} translate={translate}/>
    </div>
)

  
}

export default App
