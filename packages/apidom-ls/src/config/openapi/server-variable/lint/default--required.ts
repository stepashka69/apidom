import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const defaultRequiredLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_O_SERVER_VARIABLE_FIELD_DEFAULT_REQUIRED,
  source: 'apilint',
  message: "should always have a 'default'",
  severity: DiagnosticSeverity.Error,
  linterFunction: 'hasRequiredField',
  linterParams: ['default'],
  marker: 'key',
  data: {
    quickFix: [
      {
        message: "add 'default' field",
        action: 'addChild',
        snippetYaml: 'default: \n  ',
        snippetJson: '"default": "",\n    ',
      },
    ],
  },
};

export default defaultRequiredLint;
