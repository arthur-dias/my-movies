<template>
  <div class="person" :class="{ hasName: showName }">
    <img :src="`${url}${imageUrl}`" :alt="name" />
    <div v-if="showName" class="personInfo">
      <p v-if="character" class="character">{{ character }}</p>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl?: string
  name: string
  character?: string
  showName?: boolean
}>()

const url = 'https://image.tmdb.org/t/p/w185/'
</script>

<style scoped>
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
}
.person > img {
  max-width: 100px;
  transition: all 0.2s ease;
  border-radius: 10px;
}

.person > img:hover {
  opacity: 0.7;
}

.hasName {
  min-width: 130px;
}

.character {
  color: #fffffe;
}

.personInfo {
  color: #919191;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.3rem;
  max-width: 130px;
  text-align: center;
}

@media (max-width: 680px) {
  .person {
    max-width: 77px;
  }
}
</style>
