import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const externalDocsTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_1_OPEN_API_FIELD_EXTERNAL_DOCS_TYPE,
  source: 'apilint',
  message: 'externalDocs must be an object',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['externalDocumentation'],
  marker: 'value',
  target: 'externalDocs',
  data: {},
};

export default externalDocsTypeLint;
