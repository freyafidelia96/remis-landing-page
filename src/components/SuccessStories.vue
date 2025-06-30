<template>
  <section data-aos="fade-up">
    <!-- <div class="stories">
      <div class="card first-item">
        <p>Easy data collation</p>
        <small>I have highlight using Remis but the major one is access to data for audit purposes. I can get data of 5
          years in one day which is a plus for me.</small>
        <p>Abiodun Oyewole</p>
        <small>Transport and Admin, Jumia Nigeria</small>
      </div>
      <div class="second-item">
        <p class="description">Customer Success Stories</p>
        <small class="big-small">Take our word for it,<br>take theirs too.</small>
      </div>
      <div class="card third-item">
        <p>Transparent transactions</p>
        <small>Remis has made transactions so transparent. We can easily track records of purchase, even down to the
          time and driver that bought the fuel.</small>
        <p>Omolara Oshoba</p>
        <small>Administrative Officer, MISA</small>
      </div>
      <div class="card fourth-item">
        <p>Fast and efficient</p>
        <small>Remis has been very handy. We have the privilege of being attended to promptly when we go to filling
          stations Remis is in partnership with. In times of scarcity, the customers using Remis like us are given
          priority treatment. Also, the fact that you generate a voucher on the platform and when taken to the station
          and inputted in the POS device, the value comes up makes it easy to use.</small>
        <p>Stephen Ibrahim</p>
        <small>Admin Partner, Qore</small>
      </div>
    </div> -->
    <div class="stories">
      <transition-group name="card-slide">
        <base-card v-for="testimony in testimonies" :key="testimony.id" :title="testimony.title"
          :content="testimony.content" :name="testimony.name" :job="testimony.job"
          :class="{ card: testimony.class != 'second-item', [testimony.class]: true }">
        </base-card>
      </transition-group>
    </div>
    <div class="take-control">
      <h2>Take control of your Fleet & Fuel with Remis</h2>
      <img src="../assets/images/Website laptop mockup 1.svg" alt="Website laptop mockup 1">
    </div>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard },

  data() {
    return {
      testimonies: [
        {
          id: 1,
          title: "Easy data collation",
          content: `I have highlight using Remis but the major one is access to data for audit purposes. I can get data of 5
                    years in one day which is a plus for me.`,
          name: "Abiodun Oyewole",
          job: "Transport and Admin, Jumia Nigeria",
          class: "first-item"
        },

        {
          id: 2,
          title: "Customer Success Stories",
          content: `Take our word for it,`,
          name: "",
          job: "take theirs too.",
          class: "second-item"

        },

        {
          id: 3,
          title: "Transparent transactions",
          content: `Remis has made transactions so transparent. We can easily track records of purchase, even down to the
          time and driver that bought the fuel.`,
          name: "Omolara Oshoba",
          job: "Administrative Officer, MISA",
          class: "third-item"

        },

        {
          id: 4,
          title: "Fast and efficient",
          content: `Remis has been very handy. We have the privilege of being attended to promptly when we go to filling
          stations Remis is in partnership with. In times of scarcity, the customers using Remis like us are given
          priority treatment. Also, the fact that you generate a voucher on the platform and when taken to the station
          and inputted in the POS device, the value comes up makes it easy to use.`,
          name: "Stephen Ibrahim",
          job: "Admin Partner, Qore",
          class: "fourth-item"

        }
      ]
    }
  }
}

</script>

<style scoped>
.take-control {
  background-color: #018CB7;
  display: flex;
  width: 90%;
  justify-self: center;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  gap: 120px;
  margin: 250px auto 10px auto;
  padding-inline: 20px;
}

.take-control img {
  width: 550px;
}

.take-control h2 {
  font-weight: 700;
  color: white;
  font-size: 44px;
  width: 38%;
  line-height: 48px;
}

section {
  padding-block-start: 150px;
  width: 100vw;
}

.stories {
  display: grid;
  grid-template-areas:
    "first-item second-item"
    "first-item fourth-item"
    "third-item fourth-item";
  justify-self: center;
  align-items: center;
  column-gap: 30px;
  row-gap: 30px;
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

.description {
  color: #018CB6;
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

.stories .big-small {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 46px;
  margin-top: 12px;
  padding: 0;
  line-height: 44px;
}

/* .card-slide-enter-from, .card-slide-leave-from {

} */

.card-slide-enter-active,
.card-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card-slide-enter-from,
.card-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

/* ---------- FLIP class for re-ordering ---------- */
/* Vue automatically adds v-move during position changes */
.card-slide-move {
  transition: transform 0.3s ease;
}

@keyframes card-animate {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
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

  .take-control {
    margin: 100px auto 20px auto;
  }

  .stories {
    row-gap: 40px;
  }

  .second-item {
    padding-bottom: 10px;
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