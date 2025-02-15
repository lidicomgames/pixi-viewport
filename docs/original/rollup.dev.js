import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import builtins from '@joseph184/rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import serve from 'rollup-plugin-serve'

export default {
    input: 'docs/original/code.js',
    plugins: [
        builtins(),
        resolve({
            preferBuiltins: false,
            browser: true
        }),
        commonjs({
            namedExports: {
                'resource-loader': ['Resource']
            }
        }),
        globals(),
        serve('docs/original')
    ],
    output: {
        file: 'docs/original/index.js',
        format: 'iife',
        sourcemap: true
    }
}