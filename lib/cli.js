var path = require('node:path'),
    fs = require('node:fs/promises'),
    promisify = require('node:util').promisify,
    toc = require('./index'),
    tocInsert = promisify(toc.insert),
    tocClean = promisify(toc.clean),
    log = require('./log'),
    TOC_COMMENT = '<!-- TOC -->';

require('@colors/colors');

module.exports = require('coa').Cmd()
    .name(process.argv[1])
    .helpful()
    .title('Generates a markdown TOC (table of contents)')
    .opt()
        .name('version')
        .title('Shows the version number')
        /*jshint -W024 */
        .short('v').long('version')
        .flag()
        .only()
        .act(function () {
            var p = require('../package.json');
            return p.name + ' ' + p.version;
        })
        .end()
    .opt()
        .name('maxDepth')
        .title('Uses headings whose depth is at most the specified value (default: 6)')
        .long('max-depth')
        .short('m')
        .def(6)
        .val(function (val) {
            /*jshint es3:false */
            return parseInt(val, 10);
        })
        .end()
    .opt()
        .name('bullet')
        .title('The bullet (\'*\', \'-\', \'+\') to use for each element in the generated TOC (defaults: \'-\')')
        .long('bullet')
        .short('b')
        .def('-')
        .end()
    .opt()
        .name('clean')
        .title('Cleans a TOC')
        .long('clean')
        .short('c')
        .flag()
        .end()
    .arg()
        .name('source')
        .title('Path to an input markdown file (it must contain the HTML comment ' + TOC_COMMENT.bold + ')')
        .req()
        .end()
    .arg()
        .name('target')
        .title('Path to an output markdown file')
        .end()
    .act(function (opts, args) {
        var target = path.resolve(args.target ? args.target : args.source);
        return fs.readFile(path.resolve(args.source), 'utf-8')
            .then(function (source) {
                if (opts.clean) return tocClean(source);

                if (source.indexOf(TOC_COMMENT) === -1) {
                    log.noTocCommentErr();
                    process.exit(1);
                }

                return tocInsert(source, {
                    maxDepth: opts.maxDepth,
                    bullet: opts.bullet,
                });
            }, function () {
                log.noFileErr(args.source);
                process.exit(1);
            })
            .then(function (res) {
                return fs.writeFile(target, res)
                    .then(function () {
                        opts.clean ? log.successCleanMsg() : log.successInsertMsg();
                    });
            });
    })
    .run(process.argv.slice(2));
