const getId = (url:string) => {
	const array = url.split('/');
	return array[array.length - 2];
};

export default getId;