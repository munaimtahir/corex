import React from 'react'
import type { ToolConfig } from '../types'

interface Props {
  tools: ToolConfig[]
}

export const Sidebar: React.FC<Props> = ({ tools }) => {
  return (
    <aside style={{
      width: '220px',
      borderRight: '1px solid #ddd',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      <h2 style={{ fontSize: '1rem', margin: 0 }}>Tools</h2>
      <p style={{ fontSize: '0.8rem', margin: 0, opacity: 0.8 }}>
        Your AI agents you usually work with.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tools.map(tool => (
          <li key={tool.id} style={{ padding: '6px 4px' }}>
            <strong>{tool.name}</strong>
            <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{tool.role}</div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'auto', fontSize: '0.7rem', opacity: 0.7 }}>
        v0.1 – Local-only. Prompts are for copy/paste use.
      </div>
    </aside>
  )
}
