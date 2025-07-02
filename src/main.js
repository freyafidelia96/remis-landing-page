import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global-styling/global.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'animate.css';

// In your Vue instance or setup function for Vue 3
AOS.init();

const app = createApp(App);

app.mount("#app");
