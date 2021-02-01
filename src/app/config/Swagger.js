const components = require('../schemas/SwaggerComponents').components;

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Token',
            description: 'API Authenticacion',
            contact: {
                name: 'Felipe Bravo',
                url: 'https://github.com/felipebravitapia'
            },
            version: 'v1'
        },
        servers: [
            {
                url: 'http://localhost:5000/api/v1/auth-token/authenticacion',
                description: 'DEV'
            },
            {
                url: 'http://localhost:5000/api/v1/auth-token/authenticacion',
                description: 'QA'
            }
        ],
        components,
        security: [
            {
                $ref: '#/components/securitySchemes'
            }
        ]
    },
    apis: ['./src/app/routes/index.js', './src/app/controllers/*.js']
};

const UIConfig = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'API Authenticación',
    customfavIcon: './favicon.ico',
    explorer: true
};

module.exports = {
    options,
    UIConfig
};
