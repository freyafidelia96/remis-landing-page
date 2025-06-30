<template>
  <!-- <header>
    <div id="logo">
      <img src="../assets/images/remis logo_hr 1.svg" alt="remis-logo" />
    </div>
    <nav>
      <ul>
        <li><a href="">Features</a></li>
        <li><a href="">Why Remis</a></li>
        <li><a href="">Get a Card</a></li>
        <li><a href="">Testimonials</a></li>
      </ul>

      <div class="controls">
        <button class="language">
          En<img src="../assets/images/arrow-down.svg" alt="" />
        </button>
        <button class="download">Download Now</button>
      </div>
    </nav>
  </header> -->
  <header>
    <a href="/" id="logo">
      <img src="../assets/images/logo.svg" alt="Remis Logo" />
    </a>
    <div class="controls">
      <a class="login" href="https://fleetapp.remis.africa/Login" target="_blank">Login</a>
    </div>
  </header>

</template>


<style scoped>
header {
  font-weight: 500;
  font-size: 18px;
  width: 80vw;
  /* background-image: url(../assets/images/bgcsVZDv\ 1.svg); */
  height: 80px;
  top: 6px;
  left: 9%;
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 10px;
  justify-self: center;
  border-radius: 20px;
  padding-inline-start: 10px;
  padding-inline-end: 60px;
  background-color: white;
}


.login {
  border-radius: 25px;
  background-color: #006bff;
  color: white !important;
  padding-inline: 28px;
  padding-block: 12px;
  text-align: center;
  border: none;
  font-size: 16px;
  vertical-align: middle;
}


a {
  text-decoration: none;
  color: var(--primary-color);
  display: flex;
  justify-self: center;
  align-items: center;
}

#logo {
  width: 50px;
  height: 50px;
}


@media (max-width: 1024px) {}

@media (max-width: 426px) {
  header {
    justify-self: center;
    align-items: center;
    max-height: 50px;
    padding-inline-end: 5px;
  }

  .login {
    padding-inline: 10px;
    padding-block: 8px;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }


}
</style>
