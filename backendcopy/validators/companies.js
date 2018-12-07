var companyCreate = {
    company_name: {type: "string", empty: false},
    established: {type: "date", optional: true},
    email: {type: "email", empty: false},
    website: {type: "string", empty: false},
    phone: {type:"string", optional: true},
    userId: {type: "string", empty: false},
    location: {type: "object", props: {
                    country: {type: "string", empty: false},
                    city: {type: "string", empty: false},
                    zip_code: {type: "number", optional: true},
                    address: {type: "string", optional: true}
               }
    },
    company_information: {type: "array", items: {
        type: "object", props: {
            industry: {type: "string", empty: false},
            scope_of_work: {type: "string", empty: false},
            no_of_employees: {type: "number", optional: true},
            expected_hires_per_year: {type: "number", optional: true},
            vision: {type: "string", optional: true},
            portfolio: {type: "string", optional: true}
        }
    }},
    opportunities: {type: "object", props: {
        programs_projects: {type: "string", empty: false},
        HR: {type: "string", optional: true},
        amenities: {type: "string", optional: true},
        current_openings: {type: "string", optional: true}
        }
    }
};

module.exports = {
    companyCreate
}