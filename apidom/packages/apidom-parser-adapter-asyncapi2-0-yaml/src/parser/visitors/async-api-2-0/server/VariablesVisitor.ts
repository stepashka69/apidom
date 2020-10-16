import stampit from 'stampit';
import { always } from 'ramda';

import MapYamlMappingVisitor from '../../generics/MapYamlMappingVisitor';
import { KindVisitor } from '../../generics';

const VariablesVisitor = stampit(KindVisitor, MapYamlMappingVisitor, {
  props: {
    specPath: always(['document', 'objects', 'ServerVariable']),
  },
  init() {
    this.element = new this.namespace.elements.Object();
    this.element.classes.push('variables');
  },
});

export default VariablesVisitor;
