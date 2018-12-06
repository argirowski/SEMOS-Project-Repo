var cvCreate = {
    first_name: {type: "string", empty: false},
    last_name: {type: "string", empty: false},
    birth_date: {type: "date", empty: false},
    email: {type: "email", empty: false},
    phone: {type: "string", empty: false},
    residence: {type: "object", props: {
        country: {type: "string", empty: false},
        city: {type: "string", empty: false},
        zip_code: {type: "number", positive: true, integer: true, optional: true},
        address: {type: "string", optional: true}
        }
    },
    education: {type: "array", items: {
        type: "object", props: {
            institution: {type: "string", empty: false},
            level: {type: "string", empty: false},
            degree: {type: "string", empty: false},
            start_at: {type: "date", empty: false},
            finish_at: {type: "date", empty: false}
            }
        }
    },
    experience: {type: "array", items: {
        type: "object", props: {
            position: {type: "string", empty: false},
            job_description: {type: "string", empty: false},
            tags: {
                type: "array",
                items: {type: "string", empty: false}
                },
            employer: {type: "string", empty: false},
            start_at: {type: "date", empty: false},
            finish_at: {type: "date", empty: false}
            }
        }
    },
    skills: {type: "object", props: {
            languages: {type: "string", empty: false},
            communication_skills: {type: "string", empty: false},
            organisational_skills: {type: "string", empty: false},
            digital_skills: {type: "string", empty: false}
            }
    },
    other: {type: "object", props: {
            profile_photo: {type: "string", empty: false},
            attachment: {type: "string", empty: true}
            }
        }
    };

module.exports = {
    cvCreate
}