import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CommandBuilder from './components/CommandBuilder';
import PromptPreview from './components/PromptPreview';
import type { CommandState } from './types';

function App() {
  const [command, setCommand] = useState<CommandState>({
    goal: '',
    context: '',
    agent: 'Auto'
  });

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Sidebar />
      
      <div style={{ 
        marginLeft: '220px', 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '30px 40px',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#fff'
        }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: '600',
            marginBottom: '8px',
            color: '#222'
          }}>
            COREX – Command Orchestration Engine
          </h1>
          <p style={{ 
            fontSize: '14px', 
            color: '#666',
            margin: 0
          }}>
            Unify your AI tools. Write once, copy to any agent.
          </p>
        </div>

        {/* Main content area - two columns */}
        <div style={{ 
          display: 'flex', 
          flex: 1,
          overflow: 'hidden'
        }}>
          <CommandBuilder command={command} onCommandChange={setCommand} />
          <PromptPreview command={command} />
        </div>
      </div>
    </div>
  );
}

export default App;
