// TODO: Check why app oinly works when ssr is of
/* eslint-disable import/prefer-default-export */
import type { Handle } from '@sveltejs/kit';

export const handle:Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		ssr: false
	});

	return response;
};
