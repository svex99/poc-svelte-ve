import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    return {
        lang: cookies.get("lang") || "en",
    };
};
