<template>
  <section class="esteemed">
    <h2>Some of Our Esteemed Customers</h2>
    <div class="customers">
      <img src="../assets/images/Jumia-Logo.svg" alt="Jumia logo" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/Qore logo.svg" alt="Qore logo" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/Ikoyi Club logo.svg" alt="Ikoyi" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/Amber_Energy_Drink_Logo.svg" alt="Amber Logo" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/VACC logo.svg" alt="Vacc logo" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/Wbar logo.svg" alt="wbar logo" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/Del-York_logo.svg" alt="Del-York logo" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <img src="../assets/images/Lifestores_Healthcare_Logo.svg" alt="Lifestores_Healthcare_Logo" data-aos="zoom-in"
        data-aos-offset="300" data-aos-easing="ease-in-sine">
      <img src="../assets/images/Deo Delivery Services Limited logo.svg" alt="Deo Delivery Services Limited logo"
        data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <img src="../assets/images/pngkey.com-dreamworks-logo-png-2664632.svg"
        alt="pngkey.com-dreamworks-logo-png-2664632" data-aos="zoom-in" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
    </div>
  </section>
</template>

<style scoped>
.esteemed {
  font-size: 28px;
  color: var(--secondary-color);
  padding: 20px;
  width: 100vw;
  background-image: url(../assets/images/esteemed.png);
  background-size: cover;
  height: 60vh;
  margin: 0 auto;
  text-align: center;
}

.esteemed h2 {
  text-align: center;
}

.customers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 60%;
  justify-content: flex-start;
  align-items: center;
  column-gap: 30px;
  margin: 0 auto;
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

@keyframes slider {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
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

  .esteemed {
    font-size: 25px;
  }
}
</style>