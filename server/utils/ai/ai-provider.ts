import { createOpenAI } from '@ai-sdk/openai'

export function getCustomModel() {
  const config = useRuntimeConfig()

  const customOpenAI = createOpenAI({
    apiKey: config.aiApiKey,
    baseURL: config.aiBaseUrl
  })

  return customOpenAI.chat(config.aiModel)
}

// import { createOpenAI } from '@ai-sdk/openai'

// type ProviderName = 'deepseek' | 'qwen' | 'kimi'

// export function getCustomModel(provider: ProviderName) {
//   const config = useRuntimeConfig()
//   const settings = config.aiProviders[provider]

//   if (!settings.apiKey || !settings.model || !settings.baseUrl) {
//     throw new Error(`AI provider "${provider}" is not configured`)
//   }

//   const client = createOpenAI({
//     apiKey: settings.apiKey,
//     baseURL: settings.baseUrl
//   })

//   return client.chat(settings.model)
// }
