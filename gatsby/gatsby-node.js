const GitRevisionPlugin = require('git-revision-webpack-plugin');
const SentryPlugin = require('@sentry/webpack-plugin');
const path = require('path');

exports.onCreateWebpackConfig = ({stage, plugins, actions}) => {
    const gitRevisionPlugin = new GitRevisionPlugin();
    const additionalPlugins = [
        gitRevisionPlugin,
        plugins.define({
            __SENTRY_RELEASE__: JSON.stringify(gitRevisionPlugin.commithash()),
        }),
    ];
    if (stage === 'build-javascript') {
        additionalPlugins.push(new SentryPlugin({
            release: gitRevisionPlugin.commithash(),
            include: path.resolve(__dirname, 'public'),
        }));
    }

    actions.setWebpackConfig({
        plugins: additionalPlugins,
    });
}
