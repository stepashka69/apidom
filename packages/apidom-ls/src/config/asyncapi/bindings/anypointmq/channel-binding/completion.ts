import {
  ApidomCompletionItem,
  CompletionFormat,
  CompletionType,
} from '../../../../../apidom-language-types';

const completion: ApidomCompletionItem[] = [
  {
    label: 'destination',
    insertText: 'destination',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**Optional**, defaults to the channel name. The destination (queue or exchange) name for this channel. SHOULD only be specified if the channel name differs from the actual destination name, such as when the channel name is not a valid destination name in Anypoint MQ.',
    },
  },
  {
    label: 'destinationType',
    insertText: 'destinationType',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**Optional**, defaults to `queue`. The type of destination, which MUST be either `exchange` or `queue` or `fifo-queue`. SHOULD be specified to document the messaging model (publish/subscribe, point-to-point, strict message ordering) supported by this channel.',
    },
  },
  {
    label: 'bindingVersion',
    insertText: 'bindingVersion',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: '**Optional**, defaults to `latest`. The version of this binding.',
    },
  },
  {
    target: 'destinationType',
    label: 'destinationType',
    insertText: 'exchange',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'destinationType',
    label: 'destinationType',
    insertText: 'queue',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'destinationType',
    label: 'destinationType',
    insertText: 'fifo-queue',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'bindingVersion',
    label: 'bindingVersion',
    insertText: 'latest',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
];

export default completion;
