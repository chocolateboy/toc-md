var bullets = ['-', '*', '+'];

/**
 * Sets options
 * @param {Object} [options]
 * @param {Number} [options.maxDepth]
 * @param {Char}   [options.bullet]
 * returns {Object}
 */
 module.exports = function (options) {
    options = options || {};
    if (bullets.indexOf(options.bullet) === -1) {
        options.bullet = '-';
    }

    return Object.assign({ maxDepth: 6 }, options);
};
