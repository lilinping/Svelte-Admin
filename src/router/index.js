
import {wrap} from 'svelte-spa-router/wrap'
import Home from '../views/home/index.svelte'
import NotFound from '../views/NotFound/NotFound.svelte'

export const routes = {
	'/': Home,
	'/layout/*': wrap({
		asyncComponent: () => import('../views/layout/index.svelte')
	}),
	'*': NotFound
}
