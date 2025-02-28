const typescript = require('rollup-plugin-typescript2');
const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const cleaner = require('rollup-plugin-cleaner');
const json = require('@rollup/plugin-json');
const pkg = require('./package.json');

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    '@glue42/web': 'GlueWeb',
};

module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            name: 'glue-hooks',
            format: 'umd',
            sourcemap: true,
            globals,
        },
        {
            file: './dist/glue-hooks.umd.min.js',
            name: 'glue-hooks.min',
            format: 'umd',
            globals,
            plugins: [terser()]
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
            globals,
        },
    ],
    external: [...Object.keys(pkg.peerDependencies || {}), '@glue42/web', 'prop-types'],
    plugins: [
        cleaner({
            targets: ['./dist/'],
        }),
        typescript({
            typescript: require('typescript'),
        }),
        // Allow json resolution
        json(),
        // // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs(),
        // // Allow node_modules resolution, so you can use 'external' to control
        // // which external modules to include in the bundle
        // // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve({
            mainFields: ['module', 'main', 'browser'],
        }),

        // // Resolve source maps to the original source
        // sourceMaps(),
    ],
};
