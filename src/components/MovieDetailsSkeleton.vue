<template>
  <div class="movieSkeleton">
    <div class="titleInfos">
      <div class="title"></div>
      <div class="infos"></div>
      <div class="infos"></div>
      <div class="tags">
        <div class="tag"></div>
        <div class="tag"></div>
        <div class="tag"></div>
      </div>
    </div>
    <div class="description">
      <div class="poster"></div>
      <div class="sinopsis"></div>
    </div>
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
.movieSkeleton {
  height: 470px;
  max-width: 65%;
  margin: 0 auto;
}

.titleInfos {
  height: 130px;
}

.title {
  height: 40px;
  width: 65%;
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

.infos {
  margin-top: 0.2rem;
  height: 22px;
  width: 35%;
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

.tags {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 0.2rem;
}

.tag {
  width: 65px;
  height: 24px;
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

.description {
  height: 335px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
}

.poster {
  height: 300px;
  width: 200px;
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

.sinopsis {
  height: 300px;
  width: 827px;
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
  .movieSkeleton {
    max-width: 85%;
    height: auto;
  }

  .description {
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  .sinopsis {
    height: 250px;
    width: 85%;
  }
}
</style>
