<template>
  <span class="tag">
    {{ tag }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

<style scoped>
.tag {
  font-weight: 500;
  font-size: 0.9rem;
  background: #283038;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.05);
  color: #9ab;
  padding: 0.3rem 0.4rem;
  white-space: nowrap;
}
</style>
