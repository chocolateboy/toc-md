## 0.6.0 - 2026-06-16

### breaking changes

drop support for spaces before headers, e.g.

#### input

`  ## h1`

#### before

`[  h1](#--h1)`

#### after

`[h1](#h1)`

### changes

- bump dependencies

## 0.5.1 - 2026-02-18

- documentation tweaks

## 0.5.0 - 2026-02-18

**Contributor:** chocolateboy

- Drop support for unmaintained Node.js versions
- Update dependencies

## 0.4.6 - 2022-01-28

**Contributor:** Theo Gravity

- Fix broken CLI require() call ([#14])

## 0.4.5 - 2022-01-17

**Contributor:** Theo Gravity

- Merge branch 'master' of https://github.com/theogravity/toc-md

## 0.4.3 - 2022-01-10

**Contributor:** Snyk bot

- fix: package.json & package-lock.json to reduce vulnerabilities ([#13])

The following vulnerabilities are fixed with an upgrade:

- https://snyk.io/vuln/SNYK-JS-MARKED-2342073
- https://snyk.io/vuln/SNYK-JS-MARKED-2342082

## 0.4.2 - 2021-05-28

**Contributor:** chocolateboy

- Bump dependencies ([#11])

+ unpin versions

## 0.4.1 - 2020-09-19

**Contributor:** Theo Gravity

- Add CI support

## 0.4.0 - 2020-09-18

* Consistently space the opening and closing comments ([#9]) (@chocolateboy)
* Update readme, links ([#7], [#8]) (@chocolateboy)
* Update packages to latest versions

## 0.3.1 - 2019-08-06

* Update dependencies so `npm audit` passes

## 0.3.0 - 2019-05-15

* Update dependencies so `npm audit` passes
* Remove `istanbul` (says is no longer maintained, will need alt code-coverage tooling)
* Use `eslint` instead

## 0.2.0 - 2016-03-20

* Added the ability to [redefine anchors](https://github.com/eGavr/toc-md#redefinition-of-anchors) for headers in a TOC (see [#16]).
* Added supporting of `node@0.12.x` and `node@4.x`.
* Fixed handling of HTML tags in headers (see [#17]).

## 0.1.0 - 2015-03-10

* Added the ability to [ignore and replace](https://github.com/eGavr/toc-md#advanced-toc) headers in a TOC.
* Added option [bullet](https://github.com/eGavr/toc-md#tocinsert).

## 0.0.3 - 2015-03-03

* Used `-` instead of `*` in the generated TOC.

## 0.0.2 - 2015-03-03

* Updated dependencies.

## 0.0.1 - 2015-01-02

* Initial release.

[#7]: https://github.com/theogravity/toc-md/pull/7
[#8]: https://github.com/theogravity/toc-md/pull/8
[#9]: https://github.com/theogravity/toc-md/pull/9
[#11]: https://github.com/theogravity/toc-md/pull/11
[#13]: https://github.com/theogravity/toc-md/pull/13
[#14]: https://github.com/theogravity/toc-md/pull/14
[#16]: https://github.com/eGavr/toc-md/issues/16
[#17]: https://github.com/eGavr/toc-md/pull/17
