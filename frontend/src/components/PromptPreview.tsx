import React, { useState } from 'react';
import type { CommandState } from '../types';

interface PromptPreviewProps {
  command: CommandState;
}

const PromptPreview: React.FC<PromptPreviewProps> = ({ command }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const generatePrompt = (): string => {
    if (!command.goal.trim()) {
      return '// Start by describing what you want to do on the left.';
    }

    let prompt = 'You are an AI assistant working inside a coding environment.\n\n';
    prompt += `High-level goal: ${command.goal}\n\n`;

    if (command.context.trim()) {
      prompt += `Extra context from user:\n${command.context}\n\n`;
    }

    prompt += 'Please follow these steps:\n';
    prompt += '- Analyze the request\n';
    prompt += '- Plan the steps\n';
    prompt += '- Execute changes if tools allow (or output exact commands)\n';
    prompt += '- Briefly explain what you did\n\n';

    prompt += `// Paste this into your chosen agent (${command.agent}).`;

    return prompt;
  };

  const handleCopy = async () => {
    const prompt = generatePrompt();
    
    if (prompt.startsWith('//')) {
      alert('Please enter a goal first.');
      return;
    }

    try {
      await navigator.clipboard.writeText(prompt);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      alert('Failed to copy prompt. Please try again.');
    }
  };

  const prompt = generatePrompt();

  return (
    <div style={{
      flex: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      backgroundColor: '#f8f8f8',
      borderLeft: '1px solid #ddd'
    }}>
      <h2 style={{ 
        fontSize: '18px', 
        fontWeight: '600',
        marginBottom: '10px',
        color: '#333'
      }}>
        Prompt Preview
      </h2>
      
      <div style={{
        flex: 1,
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '15px',
        fontFamily: 'monospace',
        fontSize: '13px',
        whiteSpace: 'pre-wrap',
        overflowY: 'auto',
        color: prompt.startsWith('//') ? '#999' : '#333'
      }}>
        {prompt}
      </div>

      <button
        onClick={handleCopy}
        disabled={prompt.startsWith('//')}
        style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '500',
          backgroundColor: prompt.startsWith('//') ? '#ccc' : '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: prompt.startsWith('//') ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s'
        }}
      >
        {copySuccess ? '✓ Prompt copied!' : 'Copy prompt'}
      </button>
    </div>
  );
};

export default PromptPreview;
