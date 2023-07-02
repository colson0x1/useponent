import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    console.log(isExpanded);
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{isExpanded && <div>{item.content}</div>}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
