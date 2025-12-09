export interface ToolConfig {
  id: string
  name: string
  role: string
}

export interface CommandState {
  goal: string
  context: string
  agent: string // 'auto' or one of ToolConfig.id
}
