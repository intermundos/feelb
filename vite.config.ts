// @ts-ignore
import { defineConfig } from 'vite'
import tsPaths          from 'vite-tsconfig-paths'
import vue              from '@vitejs/plugin-vue'
import AutoImport       from 'unplugin-auto-import/vite'
import Components       from 'unplugin-vue-components/vite'
import Icons            from 'unplugin-icons/vite'
import IconsResolver    from 'unplugin-icons/resolver'
import basicSsl         from '@vitejs/plugin-basic-ssl'

export default defineConfig( {
        envPrefix: 'REACT_APP',
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "/src/assets/styles/mixins/index.scss" as *;`,
                },
            },
        },
        server: {
            port: Number( process.env.PORT ) || 8888, // use dev port 8888 -> 5555 with netlify dev
            open: false,
            https: true,
        },
        preview: {
            port: 8080,
        },
        plugins: [
            basicSsl(),
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
    },
)
