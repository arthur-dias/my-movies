<template>
  <div class="searchResultsSkeleton">
    <div class="title"></div>
    <div class="resultList">
      <div class="result"></div>
      <div class="result"></div>
      <div class="result"></div>
      <div class="result"></div>
      <div class="result"></div>
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

.searchResultsSkeleton {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 65%;
  margin: 0 auto;
}

.title {
  width: 50%;
  height: 40px;
  margin: 0 auto 5rem;
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

.resultList {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1.5rem;
}

.result {
  min-width: 100%;
  height: 170px;
  border-radius: 5px;
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
  .searchResultsSkeleton {
    max-width: 85%;
    padding-top: 0;
  }

  .title {
    width: 80%;
    margin-bottom: 3rem;
  }
}
</style>
