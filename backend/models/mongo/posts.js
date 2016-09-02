'use strict';

const _ = require('lodash');

const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

const formatPostForView = p => {
    const msTags = _.get(p, ['msAnalysis', 'tags']) || [];
    const ibmTags = _.get(p, ['ibmAnalysis', 'tags']) || [];

    const roboCaption = p.msAnalysis && p.msAnalysis.caption ?
      capitalize(p.msAnalysis.caption)
      : 'I do not know';

    return _.assign(p, {
        // _title:  capitalize(p.word),
        _tags: _.uniq(msTags.concat(ibmTags)),
        _sourceCaption: p.image.title,
        _roboCaption: roboCaption
    });
};
module.exports = self => ({
    formatForView (p) {
        const msTags = _.get(p, ['msAnalysis', 'tags']) || [];
        const ibmTags = _.get(p, ['ibmAnalysis', 'tags']) || [];

        const roboCaption = p.msAnalysis && p.msAnalysis.caption ?
          capitalize(p.msAnalysis.caption)
          : 'I do not know';

        return _.assign(p, {
            // _title:  capitalize(p.word),
            _tags: _.uniq(msTags.concat(ibmTags)),
            _sourceCaption: p.image.title,
            _roboCaption: roboCaption
        });
    }
});
