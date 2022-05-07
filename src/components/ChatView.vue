<script>
import TextInput from '../components/ChatInput.vue';
import { discordToken, discordGetUser } from '../util/discord.ts';

export default {
  data() {
    return {
        items: [
            { user: 'Jesper', message: 'tjenare' },
            { user: 'Amanda', message: 'hej' },
            { user: 'Jesper', message: 'läget?' },
            { user: 'Amanda', message: 'bra' }
				],
				discordAuth: null
    }
	},
	async mounted() {
		const params = new URLSearchParams(window.location.search);
		let code = params.get('code');
		if (code) {
			let response = await discordToken(code);
			localStorage.setItem('discordAuth', JSON.stringify(response));
		}

		let dStr = localStorage.getItem('discordAuth');
		if (dStr) {
			this.discordAuth = JSON.parse(dStr);
		}

		if (this.discordAuth) {
			let user = await discordGetUser(this.discordAuth.access_token);
			console.log(user);
		}
	},
	methods: {
		authorize() {
			let url = "https://discord.com/api/oauth2/authorize?response_type=code&client_id=972419768923607081&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Flocalhost:3000&prompt=consent";
			window.location.href = url;
		}
	}
}
</script>

<template>
  <div class="main">
		<button @click="authorize()">Log in</button>
    <div v-for="item in items" :key="item" class="message">
			<a>{{ item.user }}:</a>
			{{ item.message }}
		</div>
  </div>
</template>

<style scoped>
/* Style page content */
.main {
  position: fixed; /* Same as the width of the sidebar */
  background-color: #222;
  height: 100%;
  top: 0px;
  left: 20%;
  width: 80%;
}
.message {
	margin: 10px;
	color: #aaa;
}
.message a {
	font-weight: 600;
	margin-right: 20px;
}
</style>