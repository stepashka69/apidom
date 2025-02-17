import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const identifierMutuallyExclusiveLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_1_LICENSE_FIELD_IDENTIFIER_MUTUALLY_EXCLUSIVE,
  source: 'apilint',
  message: 'The identifier field and url field are mutually exclusive.',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'missingFields',
  linterParams: [['identifier']],
  marker: 'key',
  markerTarget: 'identifier',
  conditions: [
    {
      function: 'existFields',
      params: [['url']],
    },
  ],
  targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
};

export default identifierMutuallyExclusiveLint;
