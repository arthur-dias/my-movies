<template>
  <div class="persons">
    <h1>{{ title }}</h1>
    <div class="personsWrapper">
      <Person
        v-for="person in persons?.slice(0, maxPersons ? maxPersons : 8)"
        :key="person.id"
        :image-url="person.profile_path"
        :name="person.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Person as PersonType } from '@/types/types'
import Person from '../Atoms/Person.vue'

defineProps<{
  persons: PersonType[] | undefined
  title: string
  maxPersons?: number
}>()
</script>

<style scoped>
.persons {
  padding: 8rem 2rem;
}

h1 {
  color: #fffffe;
  font-weight: 800;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
}

.personsWrapper {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 5rem;
  max-width: 60%;
  margin: 0 auto;
}

@media (max-width: 680px) {
  .persons {
    padding: 0 2rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  .personsWrapper {
    padding-top: 3rem;
    max-width: 100%;
    gap: 2rem;
  }
}
</style>
