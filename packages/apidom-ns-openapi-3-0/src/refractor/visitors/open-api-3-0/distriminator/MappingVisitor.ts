import stampit from 'stampit';
import { always } from 'ramda';

import MapVisitor from '../../generics/MapVisitor';
import FallbackVisitor from '../../FallbackVisitor';
import DiscriminatorMappingElement from '../../../../elements/nces/DiscriminatorMapping';

const MappingVisitor = stampit(MapVisitor, FallbackVisitor, {
  props: {
    specPath: always(['value']),
  },
  init() {
    this.element = new DiscriminatorMappingElement();
  },
});

export default MappingVisitor;
