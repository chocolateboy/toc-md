var EOL = require('node:os').EOL,
    utils = require('./utils'),
    TOC_COMMENT = '<!-- TOC -->';

/**
 * @name Toc
 * @class
 */
module.exports = class Toc {
    /**
     * Constructor
     * @param {String} source
     * @param {Object} [options]
     * @param {Number} [options.maxDepth]
     * @param {Char}   [options.bullet]
     */
    constructor (source, options) {
        this.index = this._geIndex(source);
        this.data = '';
        this.options = options;
        this._cache = {};
        this._usedHeaders = [];
    }

    /**
     * Adds a TOC elemet
     * @param {Object} [header]
     * @param {Number} [header.depth]
     * @param {String} [header.text]
     * @returns {undefined}
     * @public
     */
    addTocElem (header, prevToken) {
        var options = this.options;

        if (header.depth > options.maxDepth) return;

        var headerText = utils.getHeader(header.text, prevToken);

        if (!headerText) return;

        var anchor = this._getAnchor(header.text, prevToken),
            indent = utils.getIndent(this._usedHeaders, header.depth);

        this._usedHeaders.unshift({
            depth: header.depth,
            indent: indent
        });

        this.data += indent + options.bullet + ' [' + headerText.replace(/\\/g, '\\\\') + '](#' + anchor + ')' + EOL;
    }

    /**
     * Returns an index of a TOC in a source
     * @returns {Number}
     * @public
     */
    getIndex () {
        return this.index;
    }

    /**
     * Returns a TOC data
     * @returns {String}
     * @public
     */
    getData () {
        return this.data;
    }

    /**
     * Returns an index of a TOC in a source
     * @param {String} source
     * @returns {Number}
     * @private
     */
    _geIndex (source) {
        var tocIndex = source.indexOf(TOC_COMMENT);

        return tocIndex !== -1  ? tocIndex + TOC_COMMENT.length : -1;
    }

    /**
     * Returns an anchor for a given header
     * @param {String} headerText
     * @returns {String}
     */
    _getAnchor (headerText, prevToken) {
        if (prevToken && prevToken.type === 'paragraph' && utils.isHtml(prevToken.text)) {
            var anchorFromHtml = utils.getAnchorFromHtml(prevToken.text);
            if (anchorFromHtml) {
                return anchorFromHtml;
            }
        }

        var anchor = utils.getAnchorFromHeader(headerText, prevToken);

        if (this._cache.hasOwnProperty(anchor)) {
            anchor += '-' + this._cache[anchor]++;
        } else {
            this._cache[anchor] = 1;
        }

        return anchor;
    }
};
