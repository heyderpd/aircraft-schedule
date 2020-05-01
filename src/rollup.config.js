import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { minify } from 'uglify-es'
import uglify from 'rollup-plugin-uglify'

const is_dev = process.env.DEV === 'true'

export default {
  entry: 'dist/index.js',
  dest: 'public/index.js',
  moduleName: 'render',
  format: 'iife',
  plugins: [
    babel({
      presets: [
        [
          "es2015", {
            "modules": false
          }
        ]
      ],
      babelrc: false,
      exclude: 'node_modules/**'
    }),
    resolve({ jsnext: true, main: true }),
    commonjs(),
    is_dev ? x=>x : uglify({}, minify),
  ]
}
