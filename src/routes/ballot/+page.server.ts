import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    const address = url.searchParams.get('address');
    const zipCode = url.searchParams.get('zipCode');

    if (zipCode) {
        // Resolve ballot for address and zipCode.
        return {
            fullAddress: (address ? `${address}, ` : '') + zipCode,
            contestants: ['John Doe1', 'John Doe2'],
            offices: ['Office 1', 'Office 2']
        }
    }
};
