import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    refs: [
        {
            title: 'Shared UI Packages',
            url:
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:6007/'
                    : 'ui/',
        },
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    features: {
        storyStoreV7: true,
    },
};
export default config;
