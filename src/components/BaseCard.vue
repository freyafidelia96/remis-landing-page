<template>
  <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
    <p>{{ title }}</p>
    <small>{{ content }}</small>
    <p>{{ name }}</p>
    <small>{{ job }}</small>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "name", "job"]
}
</script>

<style scoped>
.stories {
  display: grid;
  grid-template-areas:
    "first-item second-item"
    "first-item fourth-item"
    "third-item fourth-item";
  justify-self: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 10px;
  justify-content: start;
  width: 80%;
  margin: 0 auto;
}

.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 30px;
  width: 38.8vw;
  display: flex;
  flex-direction: column;
  background-image: url(../assets/images/background.png);
  background-position: bottom 34px right 34px;
  background-repeat: no-repeat;
}


.card:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .16);
}

.card p {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 26px;
  margin: 0;
  padding: 0 0 15px 0;
  line-height: 20px;
}

.card small {
  color: var(--primary-color);
  font-size: 22px;
  margin: 0 0 50px 0;
}

.first-item {
  grid-area: first-item;
  height: 340px
}

.second-item {
  grid-area: second-item;
  padding-bottom: 96px;
}

.third-item {
  grid-area: third-item;
}

.fourth-item {
  grid-area: fourth-item;

}

.second-item p {
  color: #018CB6;
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

.second-item small {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 46px;
  margin-top: 12px;
  padding: 0;
  line-height: 55px;

}

@media (max-width: 1300px) {
  .card {
    width: 550px;
  }


}

@media (max-width: 1024px) {
  .stories {
    grid-template-areas:
      "second-item"
      "first-item"
      "third-item"
      "fourth-item";
  }

  .take-control img {
    width: 400px;
  }

  .take-control {
    gap: 40px;
    padding-inline: 20px;
  }

  .take-control h2 {
    width: 100%;
  }

  section {
    padding-inline: 10px;
  }

  .second-item {
    padding-bottom: 30px;
  }

  .stories h2 {
    font-size: 30px;
  }

  .stories {
    row-gap: 40px;
  }


}

@media (max-width: 768px) {
  .take-control img {
    width: 300px;
  }

  .take-control {
    gap: 60px;
  }

  .take-control h2 {
    font-size: 30px;
  }
}

@media (max-width: 540px) {
  .card {
    width: 350px;
  }

  .stories {
    row-gap: 40px;
  }

  .second-item {
    padding-bottom: 10px;
  }

  .card p {
    font-size: 18px;
  }

  .card small {
    font-size: 16px;
  }

  .second-item small {
    font-size: 30px;
  }

  .take-control img {
    width: 400px;
  }

  .take-control {
    gap: 0px;
    flex-direction: column;
    text-align: center;
    padding-block-start: 30px;
  }

  .take-control h2 {
    width: 100%;
  }
}

@media (max-width: 435px) {
  .stories h2 {
    font-size: 30px;
  }

  .card {
    width: 300px;
  }

  .first-item {
    height: max-content;
  }

  .second-item {
    padding-bottom: 10px;
  }

  .take-control img {
    width: 300px;
  }

  .take-control {
    padding-inline: 20px;
  }

}

@media (max-width: 360px) {
  .card {
    width: 250px;
  }

  .first-item {
    height: max-content;
  }

  .second-item {
    padding-bottom: 10px;
  }

  .take-control img {
    width: 280px;
  }
}
</style>