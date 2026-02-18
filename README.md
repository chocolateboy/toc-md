# toc-md

[![Build Status](https://github.com/chocolateboy/toc-md/workflows/test/badge.svg)](https://github.com/chocolateboy/toc-md/actions?query=workflow%3Atest)
[![NPM Version](https://img.shields.io/npm/v/@chocolateboy/toc-md.svg)](https://www.npmjs.com/package/@chocolateboy/toc-md)

<!-- TOC -->

- [NAME](#name)
- [FEATURES](#features)
- [INSTALLATION](#installation)
- [SYNOPSIS](#synopsis)
- [USAGE](#usage)
  - [CLI](#cli)
    - [Insert](#insert)
    - [Clean](#clean)
  - [Customizing the TOC](#customizing-the-toc)
    - [Ignoring headers](#ignore)
    - [Changing headers](#display)
    - [Renaming anchors](#rename)
- [COMPATIBILITY](#compatibility)
- [SEE ALSO](#see-also)
- [VERSION](#version)
- [AUTHOR](#author)
- [COPYRIGHT AND LICENSE](#copyright-and-license)

<!-- TOC END -->

# NAME

toc-md - a CLI tool to generate a Markdown TOC (table of contents)

# FEATURES

- [rename anchors](#rename) with a HTML tag: `<a name="new-name"></a>`
- [omit headers](#ignore) from the TOC with a HTML comment: `<!-- TOC:ignore -->`
- [rename headers](#display) in the TOC with a HTML comment: `<!-- TOC:display:New Header -->`

# INSTALLATION

```bash
$ npm install @chocolateboy/toc-md
```

# SYNOPSIS

```bash
$ toc-md README.md
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

## Customizing the TOC

<a name="ignore"></a>
### Ignoring headers

A header can be omitted from the TOC by adding a `<!-- TOC:ignore -->` HTML
comment before a header declaration, e.g.:

```markdown
<!-- TOC:ignore -->
# NPM Scripts
```

The `NPM Scripts` header will not be displayed in the TOC.

<a name="display"></a>
### Changing headers

The name of a header in a TOC can be changed by adding a `<!-- TOC:display:header_text -->`
HTML comment before a header declaration, e.g.:

```markdown
<!-- TOC:display:Foo (Deprecated) -->
# Foo
```

The `Foo` header will be displayed in the TOC as `Foo (Deprecated)`.

<a name="rename"></a>
### Renaming anchors

The anchor which is generated for a header can be redefined by adding
an `<a name="..."></a>` HTML tag before a header declaration, e.g.:

```markdown
<a name="foo-options"></a>
# Options
```

The `Options` header in the TOC will link to the `foo-options` anchor.

# COMPATIBILITY

- [Maintained Node.js versions](https://github.com/nodejs/Release#readme)

# SEE ALSO

- [markedpp](https://www.npmjs.com/package/markedpp/) - preprocessor for Markdown files

# VERSION

0.5.1

# AUTHOR

- [eGavr](https://github.com/egavr)

This is a fork of [toc-md-alt](https://www.npmjs.com/package/toc-md-alt) by
[theogravity](https://github.com/theogravity), which is a fork of
[toc-md](https://www.npmjs.com/package/toc-md) by [eGavr](https://github.com/eGavr).

# COPYRIGHT AND LICENSE

Copyright © 2014 by eGavr.

This is free software; you can redistribute it and/or modify it under the terms
of the [MIT license](https://opensource.org/licenses/MIT).
