import React from 'react'
import type { CommandState, ToolConfig } from '../types'

interface Props {
  command: CommandState
  setCommand: (cmd: CommandState) => void
  tools: ToolConfig[]
}

export const CommandBuilder: React.FC<Props> = ({ command, setCommand, tools }) => {
  const handleChange = (field: keyof CommandState, value: string) => {
    setCommand({ ...command, [field]: value })
  }

  return (
    <section style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h2 style={{ fontSize: '1rem', margin: 0 }}>Command</h2>
      <label style={{ fontSize: '0.8rem' }}>
        What do you want to do?
        <textarea
          value={command.goal}
          onChange={e => handleChange('goal', e.target.value)}
          rows={4}
          style={{ width: '100%', marginTop: '4px' }}
          placeholder="Example: Review my accreditrack repo, fix CI workflows, and prepare it for production."
        />
      </label>
      <label style={{ fontSize: '0.8rem' }}>
        Extra context (optional)
        <textarea
          value={command.context}
          onChange={e => handleChange('context', e.target.value)}
          rows={4}
          style={{ width: '100%', marginTop: '4px' }}
          placeholder="Repo URL, branch names, tech stack, server IP, anything that will help the agent."
        />
      </label>
      <label style={{ fontSize: '0.8rem' }}>
        Preferred agent
        <select
          value={command.agent}
          onChange={e => handleChange('agent', e.target.value)}
          style={{ marginTop: '4px' }}
        >
          <option value="auto">Auto-pick based on task</option>
          {tools.map(tool => (
            <option key={tool.id} value={tool.id}>{tool.name}</option>
          ))}
        </select>
      </label>
    </section>
  )
}
