<template>
  <div class="container">
    <the-header></the-header>
    <intro-section></intro-section>
    <overlapping-partners></overlapping-partners>
    <get-started></get-started>
    <the-audience></the-audience>
    <esteemed-customers></esteemed-customers>
    <success-stories></success-stories>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import IntroSection from "./components/IntroSection.vue";
import OverlappingPartners from "./components/OverlappingPartners.vue";
import GetStarted from "./components/GetStarted.vue";
import TheAudience from "./components/TheAudience.vue";
import EsteemedCustomers from "./components/EsteemedCustomers.vue";
import SuccessStories from "./components/SuccessStories.vue";

export default {
  name: "App",
  components: {
    TheHeader, IntroSection,
    OverlappingPartners, GetStarted,
    TheAudience, EsteemedCustomers, SuccessStories
  },
};
</script>
