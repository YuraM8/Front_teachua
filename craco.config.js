const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#fff',
                            '@link-color': '#000',
                            '@text-color': '#000',
                            '@primary-hover-color': '#FA8C16'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }] // для імпорту Ant Design з підтримкою стилів
        ],
    },
    jest: {
        configure: {
            transformIgnorePatterns: [
                '/node_modules/(?!antd)', // Додаємо Ant Design для Jest
            ],
        },
    },
};
