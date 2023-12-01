<template>
  <div class="movieCreditsSkeleton">
    <div class="title"></div>
    <div class="cast">
      <div class="actor"></div>
      <div class="actor"></div>
      <div class="actor"></div>
      <div class="actor"></div>
      <div class="actor"></div>
      <div class="actor"></div>
      <div class="actor"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

.movieCreditsSkeleton {
  height: 400px;
  max-width: 65%;
  margin: 1rem auto 0;
}

.title {
  position: relative;
  right: 20px;
  height: 35px;
  width: 25%;
  background-image: linear-gradient(
    to right,
    #1f1c2b 0%,
    #272436 10%,
    #1f1c2b 20%,
    #1f1c2b 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate 1.3s linear infinite;
}

.cast {
  margin-top: 1.5rem;
  min-height: 230px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;
}

.actor {
  min-width: 130px;
  min-height: 219px;
  background-image: linear-gradient(
    to right,
    #1f1c2b 0%,
    #272436 10%,
    #1f1c2b 20%,
    #1f1c2b 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate 1.3s linear infinite;
}

@media (max-width: 680px) {
  .movieCreditsSkeleton {
    max-width: 85%;
    height: auto;
  }

  .title {
    width: 300px;
  }

  .cast {
    justify-content: center;
  }
}
</style>
