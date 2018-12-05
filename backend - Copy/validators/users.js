var userLogin = {
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false}
};

var recruitCreate = {
    firstname: {type: 'string', empty: false},
    lastname: {type: 'string', empty: false},
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false}
};

var recruiterCreate = {
    company_name: {type: 'string', empty: false},
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false},
    company_information: {type: "array", items: {
        type: "object",
        props: {
            industry: {type: "string", empty: false},
            scope_of_work: {type: "string", empty: false},
            portfolio: {type: "string", empty: false}
        }
    }},
};


module.exports = {
    userLogin,
    recruitCreate,
    recruiterCreate
}