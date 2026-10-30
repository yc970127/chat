import { createOpenAI } from '@ai-sdk/openai'
import { MODELS } from '#shared/utils/models'

export function getAIModel(modelId: string) {
  const selected = MODELS.find(m => m.value === modelId)

  if (!selected) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Unsupported AI model'
    })
  }

  // OpenAI-compatible providers
  if (['deepseek', 'qwen', 'kimi'].includes(selected.provider)) {
    const config = useRuntimeConfig()
    const provider = config.aiProviders[selected.provider]

    if (!provider?.apiKey || !provider?.baseUrl) {
      throw createError({
        statusCode: 500,
        statusMessage: `Provider "${selected.provider}" is not configured`
      })
    }

    const client = createOpenAI({
      apiKey: provider.apiKey,
      baseURL: provider.baseUrl
    })

    return client.chat(selected.apiModel)
  }

  // Other providers currently use the AI Gateway.
  return modelId
}
