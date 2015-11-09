var _ = require('lodash');

/* http://stackoverflow.com/a/27514972/199263 */

_.mixin({
    pluckMany: function() {
        var array = arguments[0],
            propertiesToPluck = _.rest(arguments, 1);

        return _.map(array, function(item) {
            return _.partial(_.pick, item).apply(null, propertiesToPluck);
        });
    }
});

