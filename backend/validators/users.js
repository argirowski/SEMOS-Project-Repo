var userCreate = {
    first_name: {type: 'string', empty: false},
    last_name: {type: 'string', empty: false},
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 32, empty: false},
    type: {type: 'string', empty: false}
};

var userLogin = {
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 32, empty: false}
};

module.exports = {
    userCreate,
    userLogin
}