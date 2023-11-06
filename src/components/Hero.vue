<template>
  <div class="hero">
    <div class="imageWrapper">
      <img :src="`${url}${imageUrl}`" alt="Banner" />
    </div>
    <div class="description">
      <p>Avalie os filmes que você viu.</p>
      <p>Lembre dos que você quer ver.</p>
      <p>Compartilha sua lista de melhores filmes.</p>
      <button>Comece já!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string | undefined
}>()

const url = 'https://image.tmdb.org/t/p/w1280/'
</script>

<style scoped>
.imageWrapper {
  display: flex;
  justify-content: center;
  min-height: 720px;
}
.imageWrapper::after {
  background: linear-gradient(
    180deg,
    rgba(20, 24, 28, 0) 0,
    rgba(20, 24, 28, 0) 50%,
    rgba(20, 24, 28, 0.75) 75%,
    #0f0e17
  );
  bottom: 0;
  content: '';
  display: block;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

img {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fffffe;
  font-size: 2rem;
  font-weight: 800;
  position: relative;
  bottom: 150px;
}

button {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid #ff8906;
  background-color: #ff8906;
  color: #0f0e17;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

button:hover {
  border: 2px solid #ff8906;
  background-color: #0f0e17;
  color: #fffffe;
}

@media (max-width: 680px) {
  .imageWrapper {
    min-height: auto;
  }
  .imageWrapper::after {
    bottom: 380px;
  }

  img {
    border-radius: 0;
  }

  .description {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 500;
    bottom: 0;
  }

  button {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
