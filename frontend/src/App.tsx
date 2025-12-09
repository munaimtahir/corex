import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { CommandBuilder } from './components/CommandBuilder'
import { PromptPreview } from './components/PromptPreview'
import { ToolConfig, CommandState } from './types'

const defaultTools: ToolConfig[] = [
  { id: 'chatgpt', name: 'ChatGPT', role: 'Planning / docs' },
  { id: 'cursor', name: 'Cursor', role: 'Code / repo surgery' },
  { id: 'copilot', name: 'GitHub Copilot', role: 'Code completions / refactor' },
  { id: 'gemini', name: 'Gemini', role: 'Search / research' }
]

export const App: React.FC = () => {
  const [tools] = useState<ToolConfig[]>(defaultTools)
  const [command, setCommand] = useState<CommandState>({
    goal: '',
    context: '',
    agent: 'auto'
  })

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Sidebar tools={tools} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px', gap: '12px' }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>AI Command Center</h1>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
          One place to define what you want, and get ready-made prompts for your AI tools.
        </p>
        <div style={{ display: 'flex', gap: '12px', flex: 1, minHeight: 0 }}>
          <CommandBuilder command={command} setCommand={setCommand} tools={tools} />
          <PromptPreview command={command} tools={tools} />
        </div>
      </main>
    </div>
  )
}
