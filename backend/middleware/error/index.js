'use strict';

module.exports = function (req, res, next) {
    res.error = function (error) {
        let err = error;
        console.error(err);
        if (err.stack) {
            console.error(err.stack);
        }

        if (!err || !err[0]) {
            err = [500];
        }
        if (!err[1]) {
            err[1] = 'Unspecified error';
        }

        return res.status(err[0]).json({
            errorCode: err[0],
            message: err[1] || err.message || err.name
        });
    };

    return next();
};
