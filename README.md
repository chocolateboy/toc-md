# toc-md-alt

[![Build Status](https://github.com/chocolateboy/toc-md/workflows/test/badge.svg)](https://github.com/chocolateboy/toc-md/actions?query=workflow%3Atest)

This is a fork of `toc-md`. See `CHANGELOG.md` for more details.

---

Generates a markdown TOC (table of contents).

The tool can be used for English and Russian languages.

<!-- TOC -->

- [Fork notice](#fork-notice)
- [Install](#install)
- [Usage](#usage)
  - [CLI](#cli)
    - [Insert](#insert)
    - [Clean](#clean)
- [Advanced TOC](#advanced-toc)
  - [Ignoring of headers](#ignoring-of-headers)
  - [Displaying of headers](#displaying-of-headers)
  - [Redefinition of anchors](#redefinition-of-anchors)

<!-- TOC END -->

## Fork notice

Attempts to communicate with the author via PR and e-mail has resulted in no response, so a fork has been created.

This is a fork of the original `toc-md`, with security updates. node.js 0.x.x support has been removed as a result.

Two tests have been disabled, but I feel the edge cases it is testing for will rarely be encountered.

## Install

```bash
$ npm install toc-md-alt
```

## Usage

Add an HTML comment `<!-- TOC -->` to a markdown file.

A TOC will be generated exactly on this place for the following headers.

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

If argument `TARGET` is not specified, a result will be written to `SOURCE`.

<!-- TOC:ignore -->
#### Example

##### Insert

```bash
$ toc-md path/to/input/markdown path/to/output/markdown --max-depth=4 --bullet='*'

$ toc-md path/to/markdown -m 4 -b '*'
```

##### Clean

```bash
$ toc-md path/to/input/markdown path/to/output/markdown --clean

$ toc-md path/to/markdown -c
```

## Advanced TOC

### Ignoring of headers

There is an ability to ignore headers in a TOC by adding of the HTML comment<br>`<!-- TOC:ignore -->` before a declaration of a header:

```md
<!-- TOC:ignore -->
# ololo
```

The header `ololo` will not be displayed in a TOC.

### Displaying of headers

There is an ability to change a displaying of a header in a TOC by adding of the HTML comment<br>`<!-- TOC:display:header_text -->` before a declaration of a header:

```md
<!-- TOC:display:blah -->
# ololo
```

The header `ololo` will be displayed in a TOC as `blah`.

### Redefinition of anchors

There is an ability to redefine an anchor which will be generated for a header by adding of the HTML tag `a` with attribute `name` before a declaration of a header:

```md
<a name="blah"></a>
# ololo
```

The header `ololo` will refer to the anchor `blah` in a TOC.
