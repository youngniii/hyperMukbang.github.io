function jxhr(arg) {
	const url = arg.url;
	const type = arg.type;
	const data = (arg.data) ? arg.data : '';
	const headers = (arg.headers) ? arg.headers : '';
	return new Promise ((resolve, reject) => {
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = (res) => {
			const response = res.currentTarget;
			if (response.status === 200 && response.readyState === 4) {
				const dataResponse = response.responseText;

				resolve(dataResponse);
			}
		}

		xhr.open(type, url, true);
		xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

		for (const a in headers) {
			xhr.setRequestHeader(a, headers[a]);
		}
		xhr.send(data);
	});
}