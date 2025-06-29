<template>
  <section class="esteemed">
    <h2>Some of Our Esteemed Customers</h2>
    <div class="customers">
      <img src="../assets/images/Jumia-Logo.svg" alt="Jumia logo">
      <img src="../assets/images/Qore logo.svg" alt="Qore logo">
      <img src="../assets/images/Ikoyi Club logo.svg" alt="Ikoyi" class="smaller">
      <img src="../assets/images/Amber_Energy_Drink_Logo.svg" alt="Amber Logo" class="smaller">
      <img src="../assets/images/VACC logo.svg" alt="Vacc logo" class="a-little-larger">
      <img src="../assets/images/Wbar logo.svg" alt="wbar logo">
      <img src="../assets/images/Del-York_logo.svg" alt="Del-York logo">
      <img src="../assets/images/Lifestores_Healthcare_Logo.svg" alt="Lifestores_Healthcare_Logo">
      <img src="../assets/images/Deo Delivery Services Limited logo.svg" alt="Deo Delivery Services Limited logo">
      <img src="../assets/images/pngkey.com-dreamworks-logo-png-2664632.svg"
        alt="pngkey.com-dreamworks-logo-png-2664632">
    </div>
  </section>
</template>

<style scoped>
.esteemed {
  font-size: 28px;
  color: var(--secondary-color);
  text-align: center;
  padding: 20px;
  width: 100vw;
  background-image: url(../assets/images/esteemed.png);
  background-size: cover;
}

.customers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 60%;
  justify-content: center;
  align-items: center;
  justify-self: center;
  column-gap: 10px;
  margin-top: 80px;
}

.customers img {
  width: 120px;
}

img.smaller {
  width: 97px;
}

img.a-little-larger {
  width: 150px;
}

@media (max-width: 768px) {
  .customers {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
  }
}

@media (max-width: 540px) {
  .customers {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
}
</style>