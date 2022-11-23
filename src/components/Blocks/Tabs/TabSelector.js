import * as React from 'react';
import TabGeneric from './TabGeneric/TabGeneric';
import TabCaseStudy from './TabCaseStudy/TabCaseStudy';

export default function TabSelector({ __typename, item }) {
  const selectTabComponent = () => {
    if (__typename === 'tab_case_study') {
      return <TabCaseStudy item={item} />;
    }

    return <TabGeneric item={item} />;
  };

  return selectTabComponent();
}
