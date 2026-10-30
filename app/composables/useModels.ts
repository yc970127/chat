import { computed } from 'vue'
import { MODELS } from '#shared/utils/models'

// 默认使用 MODELS 中的第一个模型
const DEFAULT_MODEL = MODELS[0]?.value

export function useModels() {
  const model = useCookie<string>('model', {
    default: () => DEFAULT_MODEL
  })

  if (!MODELS.some(m => m.value === model.value)) {
    model.value = DEFAULT_MODEL
  }

  const groupedModels = computed(() => {
    const providers = [...new Set(MODELS.map(m => m.provider))]

    return providers.map(provider => [
      {
        label: provider,
        type: 'label' as const
      },
      ...MODELS.filter(m => m.provider === provider)
    ])
  })

  return {
    models: MODELS,
    groupedModels,
    model
  }
}
