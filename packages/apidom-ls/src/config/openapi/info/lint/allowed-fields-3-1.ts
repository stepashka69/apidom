import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

// eslint-disable-next-line @typescript-eslint/naming-convention
const allowedFields3_1Lint: LinterMeta = {
  code: ApilintCodes.NOT_ALLOWED_FIELDS,
  source: 'apilint',
  message: 'Object includes not allowed fields',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'allowedFields',
  linterParams: [
    ['title', 'summary', 'description', 'termsOfService', 'contact', 'license', 'version'],
    'x-',
  ],
  marker: 'key',
  targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
};

export default allowedFields3_1Lint;
