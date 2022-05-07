export function authorize() {
	let url = "https://discord.com/api/oauth2/authorize?response_type=code&client_id=972419768923607081&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Flocalhost:3000&prompt=consent";
	window.location.href = url;
}

export function discordGetUser(access_token: string): Promise<any> {
	return new Promise<any>(resolve => {
		let xhttp = new XMLHttpRequest();
		xhttp.open("GET", "https://discord.com/api/users/@me", true);
		xhttp.setRequestHeader('Authorization', 'Bearer ' + access_token);
		xhttp.send();

		xhttp.onreadystatechange = function () {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				resolve(JSON.parse(this.response));
			}
		};
	});
}

export function discordToken(code: string): Promise<any> {
	return new Promise<any>(resolve => {
		let xhttp = new XMLHttpRequest();
		xhttp.open("POST", "https://discord.com/api/oauth2/token", true);
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let body =
			"grant_type=authorization_code" +
			"&code=" + code +
			"&redirect_uri=https%3A%2F%2Flocalhost:3000" +
			"&client_id=972419768923607081" +
			"&client_secret=maXiDhiPVnuRquE-aciAKTmlKrKUCiCo";
		xhttp.send(body);
		xhttp.onreadystatechange = function () {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				resolve(JSON.parse(this.response));
			}
		};
	});
}