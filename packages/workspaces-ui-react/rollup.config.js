const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const copy = require('rollup-plugin-copy');
const packageJson = require('./package.json');
const del = require('rollup-plugin-delete');

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@glue42/react-hooks': "glue-hooks"
};

module.exports = [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            },
            {
                file: packageJson.main,
                name: 'workspaces-ui-react',
                format: 'umd',
                sourcemap: true,
                globals,
            }
        ],
        external: [...Object.keys(packageJson.peerDependencies || {})],
        plugins: [
            del({ targets: 'dist/*' }),
            resolve({
                mainFields: ['module', 'main', 'browser'],
            }),
            commonjs(),
            typescript(),
            copy({
                targets: [
                    { src: './node_modules/@glue42/workspaces-ui-core/dist/styles/*', dest: 'dist/styles' },

                ]
            })
        ],
    }
]