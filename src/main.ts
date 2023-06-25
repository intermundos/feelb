import '@assets/styles/main.scss'
import { router } from '@core/router/router'
import App        from '@/app.vue'


async function bootstrap( app ) {

    app.config.devtools = import.meta.env.DEV // Vue devtools enable

    app.use( router )

    await router.isReady()

    app.mount( '#root' )

}

bootstrap( createApp( App ) ).catch( console.error )
