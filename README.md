Just like pluck, except for multiple properties.

### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/AndreasPizsa/lodash-pluckmany.svg)](https://greenkeeper.io/)

    var users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred',   'age': 40 }
    ];
    
    _.pluckMany(users,'age','user');
    // -> { 'age': 36, 'user': 'barney'  },
    //    { 'age': 40, 'user': 'fred'    }

### Credits

This is npm the packaged version of an answer found on StackOverflow
by a user named [nha](http://stackoverflow.com/users/1327651/nha):

http://stackoverflow.com/a/27514972/199263
