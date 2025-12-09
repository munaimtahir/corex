// Types for the COREX Command Orchestration Engine

export type AgentType = 'Auto' | 'ChatGPT' | 'Cursor' | 'GitHub Copilot' | 'Gemini';

export interface CommandState {
  goal: string;
  context: string;
  agent: AgentType;
}
