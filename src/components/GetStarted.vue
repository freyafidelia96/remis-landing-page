<template>
  <section id="get-started" ref="getStarted">
    <h2>Get Started Today</h2>
    <p class="desPara">
      No More Guesswork. Just Complete Control. <br />
      Manual fuel logs, paper vouchers, and unverifiable reports cost your
      business time and money. <br /><br />Remis automates your entire fueling
      process with secure, fuel card and voucher system that <br />puts you in
      full control.
    </p>

    <h3 id="why">Why Remis?</h3>
    <div class="why-remis">
      <div class="cash-handling" data-aos="fade-in">
        <img src="../assets/images/cash.png" alt="cash" />
        <div class="remis">
          <p>Eliminate Cash Handling</p>
          <small>Say goodbye to fraud and misuse. All transactions are digital and
            traceable.</small>
        </div>
      </div>
      <div class="monitoring" data-aos="fade-in">
        <img src="../assets/images/monitoring.png" alt="monitoring" />
        <div class="remis">
          <p>Real-Time Monitoring</p>
          <small>Track every litre, every driver, and every vehicle as it
            happens.</small>
        </div>
      </div>
      <div class="oversight" data-aos="fade-in">
        <img src="../assets/images/oversight.png" alt="oversight" />
        <div class="remis">
          <p>Powerful Oversight</p>
          <small>Assign fuel budgets, set limits, and review fuel purchase from every
            transaction on the dashboard.</small>
        </div>
      </div>
      <div class="friendly" data-aos="fade-in">
        <img src="../assets/images/friendly.png" alt="friendly" />
        <div class="remis">
          <p>User-Friendly System</p>
          <small>Easy-to-use fuel cards and vouchers that work seamlessly at
            authorized stations.</small>
        </div>
      </div>
      <div class="reconcilation" data-aos="fade-in">
        <img src="../assets/images/reconcilation.png" alt="reconcilation" />
        <div class="remis">
          <p>Instant Reconciliation</p>
          <small>No more chasing reports. Get instant visibility into fuel usage by
            vehicle or department.</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#get-started {
  background-color: #f9a004;
  position: relative;
  top: 0;
  padding-block-start: 190px;
  text-align: center;
  padding-inline: 60px;
  width: 100vw;
  padding-bottom: 80px;
}

#get-started h2 {
  font-weight: 700;
  color: var(--secondary-color);
  font-size: 42px;
  margin: 0 0 30px 0;
}

.desPara {
  font-size: 23px;
  color: var(--secondary-color);
  line-height: 20px;
}

#why {
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 40px;
  margin-top: 70px;
}

.why-remis {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: flex-start;
}

.why-remis p {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

.why-remis small {
  font-size: 14px;
  color: #545A79;
  width: 240px;
}

.remis {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  line-height: 20px;
}

img {
  margin-top: 0;
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .why-remis {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 10px;
  }
}

@media (max-width: 546px) {
  #get-started {
    padding-block-start: 200px;
  }

  #get-started h2 {
    font-size: 30px;
  }

  .desPara {
    font-size: 18px;
  }

  #why {
    font-size: 30px;
  }

  img {
    width: 70px;
  }

  .why-remis {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }

  .reconcilation {
    grid-column: 1 / span 2;
    justify-self: center;
  }

  .why-remis p {
    font-size: 15px;

  }

  .why-remis small {
    font-size: 12px;
    width: 180px;
  }


}
</style>
