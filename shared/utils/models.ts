export const MODELS = [
  {
    label: 'DeepSeek-v4-Pro',
    value: 'deepseek/deepseek-v4-pro',
    provider: 'deepseek',
    providerLabel: 'DeepSeek',
    apiModel: 'deepseek-v4-pro',
    icon: 'i-simple-icons-deepseek'
  },
  {
    label: 'DeepSeek-Flash',
    value: 'deepseek/deepseek-Flash',
    provider: 'deepseek',
    providerLabel: 'DeepSeek',
    apiModel: 'deepseek-flash',
    icon: 'i-simple-icons-deepseek'
  },
  {
    label: 'Qwen Plus',
    value: 'qwen/qwen-plus',
    provider: 'qwen',
    providerLabel: 'Alibaba Qwen',
    apiModel: 'qwen-plus',
    icon: 'i-simple-icons-alibabacloud'
  },
  {
    label: 'Kimi',
    value: 'kimi/kimi-k2.6',
    provider: 'kimi',
    providerLabel: 'Kimi',
    apiModel: 'kimi-k2.6',
    icon: 'i-simple-icons-kimi'
  }
] as const

// Streaming speech-to-text model used for dictation, served through the AI Gateway
export const TRANSCRIPTION_MODEL = 'openai/gpt-live-transcribe'
