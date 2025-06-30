<template>
  <section id="partners" ref="partners">
    <p>Some of our Partners Stations</p>
    <div class="logos">
      <img src="../assets/images/NNPC logo.png" alt="NNPC logo" id="nnpc" />
      <img src="../assets/images/HeyDen logo.png" alt="Heyden Logo" id="heyden" />
      <img src="../assets/images/Bovas logo.png" alt="BOVAS logo" id="bovas" />
      <img src="../assets/images/rainoil logo.png" alt="Rainoil logo" id="rainoil" class="span-2-center" />
      <img src="../assets/images/eterna logo.png" alt="Eternal logo" id="eterna" class="eterna" />
    </div>
  </section>
</template>

<script></script>

<style scoped>
#partners {
  background-color: white;
  box-shadow: 0px 14px 30px 0px rgba(39, 59, 130, 0.25);
  width: 80vw;
  position: absolute;
  z-index: 1;
  left: 9%;
  top: 790px;
  border-radius: 25px;
  padding-block-start: 20px;
  padding-block-end: 10px;
}

#partners p {
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: var(--secondary-color);
  margin-bottom: 0;
  margin-top: 0;
}

.logos {
  display: flex;
  column-gap: 160px;
  align-items: center;
  margin-bottom: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
}

/* #nnpc {
  width: 92px;
  height: 92px;
}

#heyden {
  width: 100px;
  height: 60px;
}

#bovas {
  width: 90px;
  height: 90px;
}

#rainoil {
  width: 92px;
  height: 70px;
}

#eterna {
  width: 90px;
  height: 90px;
} */

img,
svg {
  max-width: 100%;
  height: auto;
}

@media (min-width: 1024px) {
  #nnpc {
    width: 92px;
    height: 92px;
  }

  #heyden {
    width: 100px;
    height: 60px;
  }

  #bovas {
    width: 90px;
    height: 90px;
  }

  #rainoil {
    width: 92px;
    height: 70px;
  }

  #eterna {
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 1024px) {
  .logos {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 45px;
    justify-self: center;
  }

  #partners {
    left: 9%;
    top: 745px;
  }
}

@media (max-width: 768px) {
  .logos {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 10px;
    justify-self: center;
  }

  #partners {
    top: 620px;
  }
}

@media (max-width: 540px) {
  /* img {
    width: 50px;
  } */

  .logos {
    display: grid;
    grid-template-columns: repeat(3, 1.5fr);
    column-gap: 10px;
    row-gap: 5px;
    justify-content: center;
    align-items: center;
  }

  #partners {
    top: 600px;
    padding-inline: 8px;
    padding-block: 30px;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  #partners p {
    font-size: 18px;
  }

  .span-2-center {
    grid-column: 1 / span 2;
    justify-self: center;
  }

  .logos img:last-child {
    justify-self: center;
  }
}

@media (max-width: 360px) {
  #partners {
    top: 620px;
    padding-inline: 8px;
    padding-block: 30px;
  }
}
</style>