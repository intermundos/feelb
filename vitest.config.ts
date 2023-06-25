import { defineConfig } from 'vitest/config'
import vue              from '@vitejs/plugin-vue'
import tsPaths          from 'vite-tsconfig-paths'
import AutoImport       from 'unplugin-auto-import/vite'
import Components       from 'unplugin-vue-components/vite'
import Icons            from 'unplugin-icons/vite'
import IconsResolver    from 'unplugin-icons/resolver'

export default defineConfig( {
    plugins: [
        tsPaths(),
        vue(),
        AutoImport( {
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
            ],
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                '@vueuse/core',
            ],
            dts: 'types/auto-imports.d.ts',
        } ),
        Components( {
            dirs: [ 'src/ui/components', 'src/ui/atoms', 'src/ui/views/*/components' ],
            extensions: [ 'vue' ],
            deep: true,
            include: [ /\.vue$/, /\.vue\?vue/ ],
            exclude: [
                /[\\/]node_modules[\\/]/,
                /[\\/]\.git[\\/]/,
                /[\\/]\.nuxt[\\/]/,
            ],
            resolvers: [
                IconsResolver( { prefix: 'icon' } ),
            ],
            dts: 'types/components.d.ts',
            types: [ {
                from: 'vue-router',
                names: [ 'RouterLink', 'RouterView' ],
            } ],
        } ),
        Icons( { compiler: 'vue3' } ),
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
    },
} )
