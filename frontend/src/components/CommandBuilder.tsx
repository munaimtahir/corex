import React from 'react';
import type { CommandState, AgentType } from '../types';

interface CommandBuilderProps {
  command: CommandState;
  onCommandChange: (command: CommandState) => void;
}

const CommandBuilder: React.FC<CommandBuilderProps> = ({ command, onCommandChange }) => {
  const agents: AgentType[] = ['Auto', 'ChatGPT', 'Cursor', 'GitHub Copilot', 'Gemini'];

  return (
    <div style={{
      flex: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h2 style={{ 
        fontSize: '18px', 
        fontWeight: '600',
        marginBottom: '10px',
        color: '#333'
      }}>
        Command Builder
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: '500', color: '#555' }}>
          What do you want to do?
        </label>
        <textarea
          value={command.goal}
          onChange={(e) => onCommandChange({ ...command, goal: e.target.value })}
          placeholder="Describe your high-level goal..."
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '12px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: '500', color: '#555' }}>
          Extra context (optional)
        </label>
        <textarea
          value={command.context}
          onChange={(e) => onCommandChange({ ...command, context: e.target.value })}
          placeholder="Repo URLs, branches, server IPs, tech stack, etc."
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '12px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: '500', color: '#555' }}>
          Preferred agent
        </label>
        <select
          value={command.agent}
          onChange={(e) => onCommandChange({ ...command, agent: e.target.value as AgentType })}
          style={{
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#fff',
            cursor: 'pointer'
          }}
        >
          {agents.map((agent) => (
            <option key={agent} value={agent}>
              {agent}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CommandBuilder;
