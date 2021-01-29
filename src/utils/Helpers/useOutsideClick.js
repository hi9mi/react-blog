import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
	const handleClick = (e) => {
		if (!e.path.includes(ref.current)) {
			callback(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useOutsideClick;
