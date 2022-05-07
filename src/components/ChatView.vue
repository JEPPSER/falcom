<script>
import TextInput from '../components/ChatInput.vue';

export default {
  data() {
    return {
        items: [
            { user: 'Jesper', message: 'tjenare' },
            { user: 'Amanda', message: 'hej' },
            { user: 'Jesper', message: 'läget?' },
            { user: 'Amanda', message: 'bra' }
        ]
    }
  }
}
</script>

<template>
  <div class="main">
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