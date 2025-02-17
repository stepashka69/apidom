import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const licenseTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_INFO_FIELD_LICENSE_TYPE,
  source: 'apilint',
  message: 'license must be an object',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['license'],
  marker: 'value',
  target: 'license',
  data: {},
};

export default licenseTypeLint;
