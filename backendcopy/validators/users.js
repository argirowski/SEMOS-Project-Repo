var userCreate = {
    first_name: {type: 'string', empty: false},
    last_name: {type: 'string', empty: false},
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false},
    type: {type: 'string', empty: false},
    location: {type: "object", props: {
        country: {type: "string", optional: true},
        city: {type: "string", optional: true},
        zip_code: {type: "number", optional: true},
        address: {type: "string", optional: true}
        }
    }
};

var userLogin = {
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false}
};

module.exports = {
    userCreate,
    userLogin
}