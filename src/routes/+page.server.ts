import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
    // Let's load some dynamic data for the elections

    const getData = async () => {
        const date = new Date()
        return date.toLocaleString();
    };

    return {
        data1: getData(),
        data2: getData(),
    };
};

export const actions: Actions = {
    lang: async ({ url, cookies }) => {
        const lang = url.searchParams.get('lang') || 'en';

        cookies.set('lang', lang);

        throw redirect(302, url.pathname)
    },
};
