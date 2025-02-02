import Noutious from 'noutious';

let __NOUTIOUS_INSTANCE__: Noutious | null = null;

export async function initNoutious() {
	if (__NOUTIOUS_INSTANCE__) {
		return __NOUTIOUS_INSTANCE__;
	}
	const noutious = new Noutious(process.cwd(), {
		localDb: process.env.NODE_ENV === 'production',
		draft: false,
		excerpt: ''
	});
	await noutious.init();
	__NOUTIOUS_INSTANCE__ = noutious;
	return noutious;
}
