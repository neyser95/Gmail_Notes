const convict = require('convict');

const config = convict({
    http: {
        port: {
            doc: 'The port to listen on',
            default: 5000,
            env: 'PORT'
        }
    },
    authentication: {
        google: {
            "clientId": {
                "doc": "The Client ID from Google to use for authentication",
                "default": "",
                "env": "GOOGLE_CLIENTID"
            },
            "clientSecret": {
                "doc": "The Client Secret from Google to use for authentication",
                "default": "",
                "env": "GOOGLE_CLIENTSECRET"
            }
        },
        token: {
            secret: {
                doc: 'The signing key for the JWT',
                default: 'mySuperSecretKey',
                env: 'JWT_SIGNING_KEY'
            },
            issuer: {
                doc: 'The issuer for the JWT',
                default: 'gmail-notes'
            },
            audience: {
                doc: 'The audience for the JWT',
                default: 'gmail-notes'
            }
        }
    }
});

config.validate();

module.exports = config;