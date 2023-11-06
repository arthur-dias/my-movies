<template>
  <div class="services">
    <h1>Confira tudo que você poderá fazer após se cadastrar</h1>
    <div class="servicesWrapper">
      <div v-for="service in services" :key="service.id" class="service">
        <p class="text">{{ service.text }}</p>
        <p v-if="service.inProduction" class="tag">Ainda não disponível</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types/types'

defineProps<{
  services: Service[]
}>()
</script>

<style scoped>
.services {
  padding-top: 8rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #fffffe;
}

.servicesWrapper {
  padding: 5rem 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 100px;
  max-width: 85%;
  margin: 0 auto;
}
.service {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  background-color: #1f1c2b;
  max-width: 400px;
  min-height: 120px;
  padding: 1rem;
  border-radius: 5px;
}

.service:hover {
  background: #2e2941;
}

.text {
  font-weight: 500;
  color: #fffffe;
}

.tag {
  background-color: #393939;
  color: #a7a7a7;
  border-radius: 2px;
  padding: 0.5rem;
}

@media (max-width: 680px) {
  .services {
    padding-top: 2rem;
  }

  h1 {
    font-size: 1.8rem;
    padding: 0 2rem;
  }

  .text {
    font-weight: 400;
  }
}
</style>
