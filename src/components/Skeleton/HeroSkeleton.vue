<template>
  <div class="heroSkeleton">
    <div class="banner"></div>
    <div class="text">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="button"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

.heroSkeleton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10rem;
}

.banner {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 720px;
  width: 1280px;
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

.text {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.4rem;
}

.text > div {
  height: 18px;
  width: 270px;
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

.button {
  height: 48px;
  width: 164px;
  margin-top: 1.8rem;
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
  .banner {
    height: 240px;
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .text,
  .text > div {
    display: flex;
  }
}
</style>
