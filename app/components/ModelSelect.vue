<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'

const { model, models, groupedModels } = useModels()

const selectedModel = computed(() =>
  models.find(m => m.value === model.value)
)

const items = computed<SelectMenuItem[][]>(() =>
  groupedModels.value as SelectMenuItem[][]
)
</script>

<template>
  <USelectMenu
    v-model="model"
    :items="items"
    size="sm"
    :icon="selectedModel?.icon"
    color="neutral"
    variant="ghost"
    value-key="value"
    class="data-[state=open]:bg-elevated"
    :ui="{
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
      content: 'min-w-64 w-max',
      item: 'whitespace-nowrap',
      itemLabel: 'whitespace-nowrap'
    }"
  />
</template>
