const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
    // Get the default Metro config
    const defaultConfig = await getDefaultConfig(__dirname);

    // Customize the resolver to handle SVG files
    const customConfig = {
        transformer: {
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        resolver: {
            assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
        },
    };

    // Merge the default config with the custom config
    return mergeConfig(defaultConfig, customConfig);
})();
