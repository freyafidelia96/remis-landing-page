<template>
  <section class="the-audience">
    <h2>Who It's for</h2>
    <p class="first">Remis is built for organizations that manage vehicle fleets whether you run 10 cars or 500 trucks.
      Ideal for:</p>
    <p class="second">Fleet Managers <span class="ellipse"></span> Operations /Logistics Managers <span
        class="ellipse"></span>
      Procurement & Finance Heads <span class="ellipse"></span> CEOs/COOs
      seeking transparency and cost
      control</p>
  </section>

</template>

<style scoped>
.the-audience {
  background-image: url(../assets/images/audience-background.png);
  background-size: cover;
  text-align: center;
  padding-block: 50px;
  width: 100vw;
  padding-inline: 30px;
}

.the-audience h2 {
  font-weight: 700;
  color: var(--secondary-color);
  font-size: 42px;
  margin: 0;
  padding: 0;
}

.first {
  font-size: 21px;
  color: var(--secondary-color);
  width: 32%;
  margin: 0 auto;
  padding-top: 20px;
  line-height: 30px;
}

.ellipse {
  width: 9px;
  height: 9px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: inline-block;
}

.second {
  color: var(--secondary-color);
  font-size: 19px;
  font-weight: 700;
  padding-top: 30px;
}

@media (max-width: 1024px) {
  .first {
    width: 50%;
  }
}

@media (max-width: 426px) {
  .first {
    width: 85%;
  }
}
</style>