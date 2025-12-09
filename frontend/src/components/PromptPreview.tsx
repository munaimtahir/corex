import React, { useMemo } from 'react'
import type { CommandState, ToolConfig } from '../types'

interface Props {
  command: CommandState
  tools: ToolConfig[]
}

export const PromptPreview: React.FC<Props> = ({ command, tools }) => {
  const agentName = useMemo(() => {
    if (command.agent === 'auto') return 'Auto'
    return tools.find(t => t.id === command.agent)?.name ?? 'Unknown'
  }, [command.agent, tools])

  const prompt = useMemo(() => {
    const trimmedGoal = command.goal.trim()
    const trimmedContext = command.context.trim()
    if (!trimmedGoal) {
      return '// Start by writing what you want to do on the left.
'
    }

    const lines = [
      'You are an AI assistant working inside a coding environment.',
      '',
      `High-level goal: ${trimmedGoal}`,
    ]

    if (trimmedContext) {
      lines.push('', 'Extra context from user:', trimmedContext)
    }

    lines.push(
      '',
      'Requirements:',
      '- Analyse the request.',
      '- Plan the steps.',
      '- Execute changes if tools allow (or give exact commands).',
      '- Explain briefly what you did.',
      '',
      '// Paste this into your chosen agent (Cursor, Copilot, ChatGPT, Gemini).'
    )

    return lines.join('\n')
  }, [command.goal, command.context])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      alert('Prompt copied.')
    } catch {
      alert('Could not copy. Select and copy manually.')
    }
  }

  return (
    <section style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h2 style={{ fontSize: '1rem', margin: 0 }}>Prompt preview</h2>
      <p style={{ fontSize: '0.8rem', margin: 0, opacity: 0.8 }}>
        Target agent: <strong>{agentName}</strong>
      </p>
      <pre style={{
        flex: 1,
        margin: 0,
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '0.8rem',
        overflow: 'auto',
        background: '#fafafa',
        whiteSpace: 'pre-wrap'
      }}>
{prompt}
      </pre>
      <button onClick={handleCopy} style={{ alignSelf: 'flex-start', padding: '6px 10px', fontSize: '0.8rem' }}>
        Copy prompt
      </button>
    </section>
  )
}
