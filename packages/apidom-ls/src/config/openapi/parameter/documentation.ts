const documentation = [
  {
    target: '$ref',
    docs: '**REQUIRED**. The reference identifier. This MUST be in the form of a URI.',
  },
  {
    target: 'name',
    docs: '**REQUIRED**. The name of the parameter. Parameter names are *case sensitive*.\n\n  * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) is `"path"`, the `name` field MUST correspond to a template expression occurring within the [path](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathsPath) field in the [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathsObject). See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathTemplating) for further information.\n\n  * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.\n\n  * For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) property.',
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    target: 'name',
    docs: '**REQUIRED**. The name of the parameter. Parameter names are *case sensitive*.\n\n  * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) is `"path"`, the `name` field MUST correspond to a template expression occurring within the [path](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathsPath) field in the [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathsObject). See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathTemplating) for further information.\n\n  * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.\n\n  * For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) property.',
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
  {
    target: 'in',
    docs: '**REQUIRED**. The location of the parameter. Possible values are `"query"`, `"header"`, `"path"` or `"cookie"`.',
  },
  {
    target: 'description',
    docs: 'A brief description of the parameter. This could contain examples of use. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.',
  },
  {
    target: 'required',
    docs: 'Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) is `"path"`, this property is **REQUIRED** and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.',
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    target: 'required',
    docs: 'Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) is `"path"`, this property is **REQUIRED** and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.',
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
  {
    target: 'deprecated',
    docs: 'Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`.',
  },
  {
    target: 'allowEmptyValue',
    docs: 'Sets the ability to pass empty-valued parameters. This is valid only for `query` parameters and allows sending a parameter with an empty value. Default value is `false`. If [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterStyle) is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.',
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    target: 'allowEmptyValue',
    docs: 'Sets the ability to pass empty-valued parameters. This is valid only for `query` parameters and allows sending a parameter with an empty value. Default value is `false`. If [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterStyle) is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.',
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
  {
    target: 'style',
    docs: 'Describes how the parameter value will be serialized depending on the type of the parameter value. Default values (based on value of `in`): for `query` - `form`; for `path` - `simple`; for `header` - `simple`; for `cookie` - `form`.',
  },
  {
    target: 'explode',
    docs: 'When this is true, parameter values of type `array` or `object` generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterStyle) is `form`, the default value is `true`. For all other styles, the default value is `false`.',
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    target: 'explode',
    docs: 'When this is true, parameter values of type `array` or `object` generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterStyle) is `form`, the default value is `true`. For all other styles, the default value is `false`.',
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
  {
    target: 'allowReserved',
    docs: "Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&'()*+,;=` to be included without percent - encoding. This property only applies to parameters with an `in` value of `query`. The default value is `false`.",
  },
  {
    target: 'example',
    docs: "Example of the parameter's potential value. The example SHOULD match the specified schema and encoding properties if present. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` that contains an example, the `example` value SHALL *override* the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.",
  },
  {
    target: 'examples',
    docs: "Map[`string`, [Example Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#exampleObject) &#124; [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)]\n\\\n\\\nExamples of the parameter's potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` that contains an example, the `examples` value SHALL *override* the example provided by the schema",
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    target: 'examples',
    docs: "Map[`string`, [Example Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#exampleObject) &#124; [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)]\n\\\n\\\nExamples of the parameter's potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` that contains an example, the `examples` value SHALL *override* the example provided by the schema",
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
  {
    target: 'content',
    docs: 'Map[`string`, [Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)]\n\\\n\\\nA map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.',
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    target: 'content',
    docs: 'Map[`string`, [Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)]\n\\\n\\\nA map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.',
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
  {
    docs: '#### [Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterObject)\n\nDescribes a single operation parameter.\n\nA unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterName) and [location](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn).\n\n##### Parameter Locations\nThere are four possible parameter locations specified by the `in` field:\n* path - Used together with [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathTemplating), where the parameter value is actually part of the operation\'s URL. This does not include the host or base path of the API. For example, in `/items/{itemId}`, the path parameter is `itemId`.\n* query - Parameters that are appended to the URL. For example, in `/items?id=###`, the query parameter is `id`.\n* header - Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive.\n* cookie - Used to pass a specific cookie value to the API.\n\n\n##### Fixed Fields\nField Name | Type | Description\n---|:---:|---\nname | `string` | **REQUIRED**. The name of the parameter. Parameter names are *case sensitive*.\n&nbsp; | &nbsp; | * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) is `"path"`, the `name` field MUST correspond to a template expression occurring within the [path](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathsPath) field in the [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathsObject). See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathTemplating) for further information.\n&nbsp; | &nbsp; | * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.\n&nbsp; | &nbsp; | * For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) property.\nin | `string` | **REQUIRED**. The location of the parameter. Possible values are `"query"`, `"header"`, `"path"` or `"cookie"`.\n<a name="parameterDescription"></a>description | `string` | A brief description of the parameter. This could contain examples of use. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.\nrequired | `boolean` | Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterIn) is `"path"`, this property is **REQUIRED** and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.\ndeprecated | `boolean` | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`.\nallowEmptyValue | `boolean` | Sets the ability to pass empty-valued parameters. This is valid only for `query` parameters and allows sending a parameter with an empty value. Default value is `false`. If [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterStyle) is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.\n\nThe rules for serialization of the parameter are specified in one of two ways.\nFor simpler scenarios, a [`schema`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterSchema) and [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterStyle) can describe the structure and syntax of the parameter.\n\nField Name | Type | Description\n---|:---:|---\nstyle | `string` | Describes how the parameter value will be serialized depending on the type of the parameter value. Default values (based on value of `in`): for `query` - `form`; for `path` - `simple`; for `header` - `simple`; for `cookie` - `form`.\nexplode | `boolean` | When this is true, parameter values of type `array` or `object` generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterStyle) is `form`, the default value is `true`. For all other styles, the default value is `false`.\nallowReserved | `boolean` | Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&\'()*+,;=` to be included without percent-encoding. This property only applies to parameters with an `in` value of `query`. The default value is `false`.\nschema | [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject) | The schema defining the type used for the parameter.\nexample | Any | Example of the parameter\'s potential value. The example SHOULD match the specified schema and encoding properties if present. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` that contains an example, the `example` value SHALL _override_ the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.\nexamples | Map[ `string`, [Example Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#exampleObject) \\| [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)] | Examples of the parameter\'s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` that contains an example, the `examples` value SHALL _override_ the example provided by the schema.\n\nFor more complex scenarios, the [`content`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameterContent) property can define the media type and schema of the parameter.\nA parameter MUST contain either a `schema` property, or a `content` property, but not both.\nWhen `example` or `examples` are provided in conjunction with the `schema` object, the example MUST follow the prescribed serialization strategy for the parameter.\n\n\nField Name | Type | Description\n---|:---:|---\ncontent | Map[`string`, [Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)] | A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.\n\n##### [Style Values](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)\n\nIn order to support common ways of serializing simple parameters, a set of `style` values are defined.\n\n`style` | [`type`](#dataTypes) |  `in` | Comments\n----------- | ------ | -------- | --------\nmatrix |  `primitive`, `array`, `object` |  `path` | Path-style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.7)\nlabel | `primitive`, `array`, `object` |  `path` | Label style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.5)\nform |  `primitive`, `array`, `object` |  `query`, `cookie` | Form style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.8). This option replaces `collectionFormat` with a `csv` (when `explode` is false) or `multi` (when `explode` is true) value from OpenAPI 2.0.\nsimple | `array` | `path`, `header` | Simple style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.2).  This option replaces `collectionFormat` with a `csv` value from OpenAPI 2.0.\nspaceDelimited | `array`, `object` | `query` | Space separated array or object values. This option replaces `collectionFormat` equal to `ssv` from OpenAPI 2.0.\npipeDelimited | `array`, `object` | `query` | Pipe separated array or object values. This option replaces `collectionFormat` equal to `pipes` from OpenAPI 2.0.\ndeepObject | `object` | `query` | Provides a simple way of rendering nested objects using form parameters.\n\n\n##### Style Examples\n\nAssume a parameter named `color` has one of the following values:\n\n```\n   string -> "blue"\n   array -> ["blue","black","brown"]\n   object -> { "R": 100, "G": 200, "B": 150 }\n```\nThe following table shows examples of rendering differences for each value.\n\n[`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#styleValues) | `explode` | `empty` | `string` | `array` | `object`\n----------- | ------ | -------- | -------- | -------- | -------\nmatrix | false | ;color | ;color=blue | ;color=blue,black,brown | ;color=R,100,G,200,B,150\nmatrix | true | ;color | ;color=blue | ;color=blue;color=black;color=brown | ;R=100;G=200;B=150\nlabel | false | .  | .blue |  .blue.black.brown | .R.100.G.200.B.150\nlabel | true | . | .blue |  .blue.black.brown | .R=100.G=200.B=150\nform | false | color= | color=blue | color=blue,black,brown | color=R,100,G,200,B,150\nform | true | color= | color=blue | color=blue&color=black&color=brown | R=100&G=200&B=150\nsimple | false | n/a | blue | blue,black,brown | R,100,G,200,B,150\nsimple | true | n/a | blue | blue,black,brown | R=100,G=200,B=150\nspaceDelimited | false | n/a | n/a | blue%20black%20brown | R%20100%20G%20200%20B%20150\npipeDelimited | false | n/a | n/a | blue\\|black\\|brown | R\\|100\\|G\\|200\\|B\\|150\ndeepObject | true | n/a | n/a | n/a | color[R]=100&color[G]=200&color[B]=150\n\nThis object MAY be extended with [Specification Extensions](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#specificationExtensions).\n\n##### [Parameter Object Examples](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object-examples#parameter-object-examples)\n\nA header parameter with an array of 64 bit integer numbers:\n\n\n\\\nJSON\n```json\n{\n  "name": "token",\n  "in": "header",\n  "description": "token to be passed as a header",\n  "required": true,\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "integer",\n      "format": "int64"\n    }\n  },\n  "style": "simple"\n}\n```\n\n\n\\\nYAML\n```yaml\nname: token\nin: header\ndescription: token to be passed as a header\nrequired: true\nschema:\n  type: array\n  items:\n    type: integer\n    format: int64\nstyle: simple\n```\n\nA path parameter of a string value:\n```json\n{\n  "name": "username",\n  "in": "path",\n  "description": "username to fetch",\n  "required": true,\n  "schema": {\n    "type": "string"\n  }\n}\n```\n\n```yaml\nname: username\nin: path\ndescription: username to fetch\nrequired: true\nschema:\n  type: string\n```\n\nAn optional query parameter of a string value, allowing multiple values by repeating the query parameter:\n```json\n{\n  "name": "id",\n  "in": "query",\n  "description": "ID of the object to fetch",\n  "required": false,\n  "schema": {\n    "type": "array",\n    "items": {\n      "type": "string"\n    }\n  },\n  "style": "form",\n  "explode": true\n}\n```\n\n```yaml\nname: id\nin: query\ndescription: ID of the object to fetch\nrequired: false\nschema:\n  type: array\n  items:\n    type: string\nstyle: form\nexplode: true\n```\n\nA free-form query parameter, allowing undefined parameters of a specific type:\n```json\n{\n  "in": "query",\n  "name": "freeForm",\n  "schema": {\n    "type": "object",\n    "additionalProperties": {\n      "type": "integer"\n    },\n  },\n  "style": "form"\n}\n```\n\n```yaml\nin: query\nname: freeForm\nschema:\n  type: object\n  additionalProperties:\n    type: integer\nstyle: form\n```\n\nA complex parameter using `content` to define serialization:\n\n```json\n{\n  "in": "query",\n  "name": "coordinates",\n  "content": {\n    "application/json": {\n      "schema": {\n        "type": "object",\n        "required": [\n          "lat",\n          "long"\n        ],\n        "properties": {\n          "lat": {\n            "type": "number"\n          },\n          "long": {\n            "type": "number"\n          }\n        }\n      }\n    }\n  }\n}\n```\n\n```yaml\nin: query\nname: coordinates\ncontent:\n  application/json:\n    schema:\n      type: object\n      required:\n        - lat\n        - long\n      properties:\n        lat:\n          type: number\n        long:\n          type: number\n```',
    targetSpecs: [
      { namespace: 'openapi', version: '3.0.0' },
      { namespace: 'openapi', version: '3.0.1' },
      { namespace: 'openapi', version: '3.0.2' },
      { namespace: 'openapi', version: '3.0.3' },
    ],
  },
  {
    docs: '#### [Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)\n\nDescribes a single operation parameter.\n\nA unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterName) and [location](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn).\n\n##### Parameter Locations\n\nThere are four possible parameter locations specified by the `in` field:\n\n* path - Used together with [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathTemplating), where the parameter value is actually part of the operations URL. This does not include the host or base path of the API. For example, in `/items/{ itemId}`, the path parameter is `itemId`.\n* query - Parameters that are appended to the URL. For example, in `/items?id=###`, the query parameter is `id`.\n* header - Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive.\n* cookie - Used to pass a specific cookie value to the API.\n\n##### Fixed Fields  \n\nField Name | Type | Description\n---|:---:|---\nname | `string` | **REQUIRED**. The name of the parameter. Parameter names are *case sensitive*.\n&nbsp; | &nbsp; | * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) is `"path"`, the `name` field MUST correspond to a template expression occurring within the [path](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathsPath) field in the [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathsObject). See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathTemplating) for further information.\n&nbsp; | &nbsp; | * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.\n&nbsp; | &nbsp; | * For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) property.\nin | `string` | **REQUIRED**. The location of the parameter. Possible values are `"query"`, `"header"`, `"path"` or `"cookie"`.\ndescription | `string` | A brief description of the parameter. This could contain examples of use. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.\nrequired | `boolean` | Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterIn) is `"path"`, this property is **REQUIRED** and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.\ndeprecated | `boolean` | Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`.\nallowEmptyValue | `boolean` | Sets the ability to pass empty-valued parameters. This is valid only for `query` parameters and allows sending a parameter with an empty value. Default value is `false`. If [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterStyle) is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.\n\n\\\nThe rules for serialization of the parameter are specified in one of two ways. For simpler scenarios, a schema and style can describe the structure and syntax of the parameter.\n\nField Name | Type | Description\n---|:---:|---\nstyle | `string` | Describes how the parameter value will be serialized depending on the type of the parameter value. Default values (based on value of `in`): for `query` - `form`; for `path` - `simple`; for `header` - `simple`; for `cookie` - `form`.\nexplode | `boolean` | When this is true, parameter values of type `array` or `object` generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When [`style`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterStyle) is `form`, the default value is `true`. For all other styles, the default value is `false`.\nallowReserved | `boolean` | Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&\'()*+,;=` to be included without percent - encoding. This property only applies to parameters with an `in` value of `query`. The default value is `false`.\nschema | [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject) | The schema defining the type used for the parameter.\nexample | Any | Example of the parameter\'s potential value. The example SHOULD match the specified schema and encoding properties if present. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` that contains an example, the `example` value SHALL *override* the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.\nexamples | Map[`string`, [Example Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#exampleObject) &#124; [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)] | Examples of the parameter\'s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` that contains an example, the `examples` value SHALL *override* the example provided by the schema.\n\n\\\nFor more complex scenarios, the [`content`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterContent) property can define the media type and schema of the parameter. A parameter MUST contain either a `schema` property, or a `content` property, but not both. When `example` or `examples` are provided in conjunction with the `schema` object, the example MUST follow the prescribed serialization strategy for the parameter.\n\nField Name | Type | Description\n---|:---:|---\ncontent | Map[`string`, [Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)] | A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.\n\n##### Style Values\n\nIn order to support common ways of serializing simple parameters, a set of `style` values are defined.\n\n`style` | [`type`](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes) | `in` | Comments\n---|:---:|---:|---\nmatrix | `primitive`, `array`, `object` | `path` | Path-style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.7)\nlabel | `primitive`, `array`, `object` | `path` | Label style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.7)\nform | `primitive`, `array`, `object` | `query`, `cookie` | Form style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.8). This option replaces `collectionFormat` with a `csv` (when `explode` is false) or `multi` (when `explode` is true) value from OpenAPI 2.0.\nsimple | `array` | `path`, `header` | Simple style parameters defined by [RFC6570](https://tools.ietf.org/html/rfc6570#section-3.2.8). This option replaces `collectionFormat` with a `csv` value from OpenAPI 2.0.\nspaceDelimited | `array`, `object` | `query` | Space separated array or object values. This option replaces `collectionFormat` equal to `ssv` from OpenAPI 2.0.\npipeDelimited | `array`, `object` | `query` | Pipe separated array or object values. This option replaces `collectionFormat` equal to `pipes` from OpenAPI 2.0.\ndeepObject | `object` | `query` | Provides a simple way of rendering nested objects using form parameters.\n\n##### Examples\n\nExternal reference link to [Style Examples](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-examples)\n\nExternal reference link to [Parameter Object Examples](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameter-object-examples)\n\n\\\nThis object MAY be extended with [Specification Extensions](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#specificationExtensions).\n\n',
    targetSpecs: [{ namespace: 'openapi', version: '3.1.0' }],
  },
];

export default documentation;
