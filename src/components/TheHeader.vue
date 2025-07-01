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
    <a href="https://fleetapp.remis.africa/Login">
      <img src="../assets/images/logo.svg" alt="Remis Logo" id="logo" />
    </a>
    <div class="dropdown">
      <button class="dropbtn">Download</button>
      <div class="dropdown-content">
        <a href="https://play.google.com/store/apps/details?id=africa.remis.app" target="_blank">Download on Play
          Store</a>
        <a href="https://apps.apple.com/ng/app/remis-africa/id6443777963" target="_blank">Download on App Store</a>
      </div>
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
  align-items: flex-start;
  justify-content: space-between;
  padding-block: 30px;
  justify-self: center;
  border-radius: 20px;
  padding-inline-start: 10px;
  padding-inline-end: 60px;
  background-color: white;
}

#logo {
  display: flex;
  align-items: center;
  justify-self: center;
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


button {
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


.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
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

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1;
  left: -40px;
  margin-top: 8px;
}

.dropdown-content a {
  color: var(--primary-color);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
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
