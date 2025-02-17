import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const schemaMutuallyExclusiveLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_HEADER_FIELD_SCHEMA_MUTUALLY_EXCLUSIVE,
  source: 'apilint',
  message: 'The `schema` field and `content` field are mutually exclusive.',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'missingFields',
  linterParams: [['schema']],
  marker: 'key',
  markerTarget: 'schema',
  conditions: [
    {
      function: 'existFields',
      params: [['content']],
    },
  ],
};

export default schemaMutuallyExclusiveLint;
