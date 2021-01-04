import stampit from 'stampit';
import { ParseResultElement } from 'apidom';
// @ts-ignore
import { parse } from 'apidom-parser-adapter-yaml-1-2';

import { ParserError } from '../../util/errors';
import { File as IFile, Parser as IParser } from '../../types';

const YamlParser: stampit.Stamp<IParser> = stampit({
  props: {
    /**
     * Whether to allow "empty" files. This includes zero-byte files.
     */
    allowEmpty: true,

    /**
     * Whether to generate source map during parsing.
     */
    sourceMap: false,
  },
  init(this: IParser, { allowEmpty = this.allowEmpty, sourceMap = this.sourceMap } = {}) {
    this.allowEmpty = allowEmpty;
    this.sourceMap = sourceMap;
  },
  methods: {
    canParse(file: IFile): boolean {
      return (
        ['text/yaml', 'application/yaml'].includes(file.mediaType) ||
        ['.yaml', '.yml'].includes(file.extension)
      );
    },
    async parse(file: IFile): Promise<ParseResultElement> {
      const source = Buffer.isBuffer(file.data) ? file.data.toString() : file.data;

      try {
        return await parse(source, { sourceMap: this.sourceMap });
      } catch (e) {
        throw new ParserError(`Error parsing "${file.uri}"`, e);
      }
    },
  },
});

export default YamlParser;
