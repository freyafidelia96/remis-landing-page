<template>
  <section>
    <div class="description">
      <h1>Smarter Fuel Management Starts Here</h1>
      <h3>Take Control. Cut Costs. Stop Leakages.</h3>
      <p>
        Remis is the fuel management solution trusted by leading businesses in
        Nigeria to eliminate fuel-related losses, improve visibility, and
        streamline operations — all in real time.
        <span>
          Perfect for fleet managers, logistics managers, operations heads, and
          finance teams.
        </span>
      </p>

      <div class="app-links">
        <a href="https://apps.apple.com/ng/app/remis-africa/id6443777963">
          <img src="../assets/images/link-app-store.png" alt="" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=africa.remis.app">
          <img src="../assets/images/link-google-store.png" alt="" />
        </a>
      </div>
      <div class="ratings">
        <div class="app-store">
          <h2>4.5/5</h2>
          <div class="stars">
            <img src="../assets/images/rating-star.svg" alt="star" v-for="star in 5" :key="star" />
          </div>
          <small>On the iOS App Store</small>
        </div>
        <div class="googlestore">
          <h2>4.5/5</h2>
          <div class="stars">
            <img src="../assets/images/rating-star.svg" alt="star" v-for="star in 5" :key="star" />
          </div>
          <small>On the Google Play Store</small>
        </div>
      </div>
    </div>
    <div class="des-image">
      <img src="../assets/images/des-image.png" alt="des-image" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url("../assets/images/bgcsVZDv 1.svg");
  width: 100vw;
  display: flex;
  top: 0;
  padding-inline-start: calc(9vw);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  justify-content: center;
  position: relative;
  padding-top: 70px;
}

.description h1 {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 60px;
  width: 55.17%;
  vertical-align: middle;
  margin-block-end: 0;
  margin-top: 50px;
}

.description {
  width: 67%;
}

.description h3 {
  width: 80.72%;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 32px;
  vertical-align: middle;
  margin-top: 20px;
  margin-bottom: 0;
}

.description p {
  width: 70.1%;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  vertical-align: middle;
  color: var(--primary-color);
  margin-top: 21px;
}

p span {
  font-weight: 600;
  display: block;
  padding-top: 24px;
}

.des-image {
  width: 33%;
}

.des-image img {
  height: 780px;
  width: auto;
  margin-top: 25px;
  object-fit: fill;
  justify-self: center;
  display: flex;
}

.app-links {
  display: flex;
  gap: 20px;
}

.ratings {
  display: flex;
  flex-direction: row;
  gap: 80px;
}

.ratings h2 {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 40px;
  margin-block-start: 24px;
  margin-block-end: 5px;
}

.stars {
  padding-bottom: 8px;
}

.stars img {
  padding-inline-end: 5px;
}

.ratings small {
  color: var(--primary-color);
  font-size: 16px;
}

@media (max-width: 1024px) {
  section {
    background-position: center;
  }

  .description h1 {
    font-size: 45px;
  }

  .description h3 {
    font-size: 23px;
  }

  .description p {
    font-size: 14px;
    line-height: 20px;
  }

  .des-image img {
    height: 700px;
  }
}

@media (max-width: 768px) {
  section {
    background-position: center;
  }

  .description h1 {
    font-size: 39px;
  }

  .description h3 {
    font-size: 18px;
  }

  .description p {
    font-size: 14px;
    line-height: 20px;
  }

  .des-image img {
    height: 600px;
  }

  .app-links img {
    width: 100px;
  }

  .ratings {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
  }

  .ratings h2 {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 20px;
    /* margin-block-start: 24px;
    margin-block-end: 5px; */
  }

  .ratings small {
    font-size: 14px;
  }
}


@media (max-width: 540px) {
  section {
    padding-inline-start: 40px;
    background-position: center;
    background-size: cover;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 80px;
    padding-bottom: 200px;
  }

  .description h1 {
    font-size: 30px;
    width: 70%;
  }

  .description h3 {
    font-size: 18px;
    width: 87%;
  }

  .description p {
    font-size: 13px;
    line-height: 20px;
    width: 70%;
  }

  .des-image {
    display: none;
  }

  .app-links img {
    width: 100px;
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    justify-self: flex-start;
    flex-shrink: 1;
    flex-grow: 1;
  }

  .ratings {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    width: 85%;
  }

  .ratings h2 {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 16px;
    /* margin-block-start: 24px;
    margin-block-end: 5px; */
  }

  .ratings small {
    font-size: 12px;
  }

  img,
  svg {
    max-width: 80%;
    height: auto;
  }

  .stars img {
    width: 20px;
  }
}


@media (max-width: 426px) {
  section {
    padding-inline-start: 40px;
    background-position: center;
    background-size: cover;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 200px;
  }

  .description h1 {
    font-size: 25px;
    width: 80%;
  }

  .description h3 {
    font-size: 18px;
    width: 87%;
  }

  .description p {
    font-size: 13px;
    line-height: 20px;
    width: 70%;
  }

  .des-image {
    display: none;
  }

  .app-links img {
    width: 100px;
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    justify-self: flex-start;
    flex-shrink: 1;
    flex-grow: 1;
  }

  .ratings {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    width: 85%;
  }

  .ratings h2 {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 16px;
    /* margin-block-start: 24px;
    margin-block-end: 5px; */
  }

  .ratings small {
    font-size: 12px;
  }

  img,
  svg {
    max-width: 80%;
    height: auto;
  }

  .stars img {
    width: 20px;
  }
}
</style>
