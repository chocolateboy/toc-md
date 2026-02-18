# toc-md

[![Build Status](https://github.com/chocolateboy/toc-md/workflows/test/badge.svg)](https://github.com/chocolateboy/toc-md/actions?query=workflow%3Atest)
[![NPM Version](https://img.shields.io/npm/v/@chocolateboy/toc-md.svg)](https://www.npmjs.org/package/@chocolateboy/toc-md)

<!-- TOC -->

- [NAME](#name)
- [DESCRIPTION](#description)
- [INSTALLATION](#installation)
- [USAGE](#usage)
  - [CLI](#cli)
    - [Insert](#insert)
    - [Clean](#clean)
  - [Advanced TOC](#advanced-toc)
    - [Ignoring headers](#ignoring-headers)
    - [Changing headers](#changing-headers)
    - [Renaming anchors](#renaming-anchors)
- [COMPATIBILITY](#compatibility)
- [SEE ALSO](#see-also)
- [VERSION](#version)
- [AUTHOR](#author)
- [COPYRIGHT AND LICENSE](#copyright-and-license)

<!-- TOC END -->

# NAME

toc-md - a CLI tool to generate a Markdown TOC (table of contents)

# DESCRIPTION

This is a fork of [toc-md-alt](https://github.com/theogravity/toc-md), which is a fork of [toc-md](https://github.com/eGavr/toc-md) by [eGavr](https://github.com/eGavr). See the [changelog](CHANGELOG.md) for more details.

The tool can be used for English and Russian languages.

# INSTALLATION

```bash
$ npm install @chocolateboy/toc-md
```

# USAGE

Add a HTML comment `<!-- TOC -->` to a Markdown file.

A TOC will be generated exactly in this place for the following headers.

To migrate from an existing TOC generator with start and end markers, replace them with `<!-- TOC -->` and `<!-- TOC END -->`.

## CLI

```
$ toc-md --help
Generates a Markdown TOC (table of contents)

Usage:
  toc-md [OPTIONS] [ARGS]

Options:
  -h, --help : Help
  -v, --version : Shows the version number
  -m MAXDEPTH, --max-depth=MAXDEPTH : Uses headings whose depth is at most the specified value (default: 6)
  -b BULLET, --bullet=BULLET : The bullet ('*', '-', '+') to use for each element in the generated TOC (default: '-')
  -c, --clean : Removes a TOC

Arguments:
  SOURCE : Path to an input Markdown file (it must contain the HTML comment <!-- TOC -->) (required)
  TARGET : Path to an output Markdown file
```

If the `TARGET` argument is not specified, the result will be written to `SOURCE`.

<!-- TOC:ignore -->
### Example

#### Insert

```bash
$ toc-md --max-depth=4 --bullet='*' path/to/input.md path/to/output.md

$ toc-md -m 4 -b '*' path/to/input.md
```

#### Clean

```bash
$ toc-md --clean path/to/input.md path/to/output.md

$ toc-md -c path/to/input.md
```

## Advanced TOC

### Ignoring headers

A header can be omitted from the TOC by adding a `<!-- TOC:ignore -->` HTML comment before a header declaration, e.g.:

```md
<!-- TOC:ignore -->
# NPM Scripts
```

The header `NPM Scripts` will not be displayed in the TOC.

### Changing headers

The name of a header in a TOC can be changed by adding a `<!-- TOC:display:header_text -->` HTML comment before a header declaration, e.g.:

```md
<!-- TOC:display:Foo (Deprecated) -->
# Foo
```

The `Foo` header will be displayed in the TOC as `Foo (Deprecated)`.

### Renaming anchors

The anchor which is generated for a header can be redefined by adding an `<a name="..."></a>` HTML tag before a header declaration, e.g.:

```md
<a name="foo-options"></a>
# Options
```

The `Options` header will be referenced by the `foo-options` anchor in the TOC.

# COMPATIBILITY

- [Maintained Node.js versions](https://github.com/nodejs/Release#readme)

# SEE ALSO

- [markedpp](https://www.npmjs.com/package/markedpp/) - preprocessor for Markdown files

# VERSION

0.5.0

# AUTHOR

- [eGavr](https://github.com/egavr)

# COPYRIGHT AND LICENSE

Copyright © 2014 by eGavr.

This is free software; you can redistribute it and/or modify it under the terms
of the [MIT license](https://opensource.org/licenses/MIT).
