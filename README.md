# toc-md-alt

[![Build Status](https://github.com/chocolateboy/toc-md/workflows/test/badge.svg)](https://github.com/chocolateboy/toc-md/actions?query=workflow%3Atest)

This is a fork of [`toc-md-alt`](https://github.com/theogravity/toc-md), which is a fork of [toc-md](https://githib.com/eGavr/toc-md) by [eGavr](https://github.com/eGavr). See the `CHANGELOG.md` for more details.

---

A CLI tool to generate a markdown TOC (table of contents).

The tool can be used for English and Russian languages.

<!-- TOC -->

- [Fork notice](#fork-notice)
- [Install](#install)
- [Usage](#usage)
  - [CLI](#cli)
    - [Insert](#insert)
    - [Clean](#clean)
- [Advanced TOC](#advanced-toc)
  - [Ignoring headers](#ignoring-headers)
  - [Changing headers](#changing-headers)
  - [Renaming anchors](#renaming-anchors)

<!-- TOC END -->

## Fork notice

Attempts to communicate with the author via PR and e-mail has resulted in no response, so a fork has been created.

This is a fork of the original `toc-md`, with security updates. node.js 0.x.x support has been removed as a result.

Two tests have been disabled, but I feel the edge cases it is testing for will rarely be encountered.

## Install

```bash
$ npm install @chocolateboy/toc-md
```

## Usage

Add a HTML comment `<!-- TOC -->` to a markdown file.

A TOC will be generated exactly in this place for the following headers.

To migrate from an existing TOC generator with start and end markers, replace them with `<!-- TOC -->` and `<!-- TOC END -->`.

### CLI

```bash
$ toc-md --help
Generates a markdown TOC (table of contents)

Usage:
  toc-md [OPTIONS] [ARGS]

Options:
  -h, --help : Help
  -v, --version : Shows the version number
  -m MAXDEPTH, --max-depth=MAXDEPTH : Uses headings whose depth is at most the specified value (default: 6)
  -b BULLET, --bullet=BULLET : The bullet ('*', '-', '+') to use for each element in the generated TOC (default: '-')
  -c, --clean : Cleans a TOC

Arguments:
  SOURCE : Path to an input markdown file (it must contain the HTML comment <!-- TOC -->) (required)
  TARGET : Path to an output markdown file
```

If the `TARGET` argument is not specified, the result will be written to `SOURCE`.

<!-- TOC:ignore -->
#### Example

##### Insert

```bash
$ toc-md path/to/input/markdown path/to/output/markdown --max-depth=4 --bullet='*'

$ toc-md path/to/markdown -m 4 -b '*'
```

##### Clean

```bash
$ toc-md --clean path/to/input/markdown path/to/output/markdown

$ toc-md -c path/to/markdown
```

## Advanced TOC

### Ignoring headers

A header can be omitted from the TOC by adding a `<!-- TOC:ignore -->` HTML comment before a header declaration, e.g.:

```md
<!-- TOC:ignore -->
# ololo
```

The header `ololo` will not be displayed in a TOC.

### Changing headers

The name of a header in a TOC can be changed by adding a `<!-- TOC:display:header_text -->` HTML comment before a header declaration, e.g.:

```md
<!-- TOC:display:blah -->
# ololo
```

The `ololo` header will be displayed in the TOC as `blah`.

### Renaming anchors

The anchor which is generated for a header can be redefined by adding an `<a name="..."></a>` HTML tag before a header declaration, e.g.:

```md
<a name="blah"></a>
# ololo
```

The header `ololo` will refer to the anchor `blah` in the TOC.
