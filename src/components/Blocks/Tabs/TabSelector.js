import * as React from 'react';
import TabGeneric from './TabGeneric/TabGeneric';
import TabPost from './TabPost/TabPost';

export default function TabSelector({ item }) {
  const selectTabComponent = () => {
    if (item.__typename === 'DatoCmsPost') {
      return <TabPost item={item} />;
    }

    return <TabGeneric item={item} />;
  };

  return selectTabComponent();
}
