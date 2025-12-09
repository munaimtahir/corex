import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={{
      width: '220px',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 100,
    }}>
      <div>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          letterSpacing: '2px'
        }}>
          COREX
        </h1>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            color: '#888',
            marginBottom: '10px',
            fontWeight: 'normal'
          }}>
            Modes
          </h3>
          <div style={{
            padding: '10px 15px',
            backgroundColor: '#2a2a2a',
            borderRadius: '4px',
            cursor: 'pointer',
            borderLeft: '3px solid #4CAF50'
          }}>
            Run Command
          </div>
        </div>
      </div>
      
      <div style={{ 
        fontSize: '11px', 
        color: '#666',
        borderTop: '1px solid #333',
        paddingTop: '15px'
      }}>
        v0.1 – local only
      </div>
    </div>
  );
};

export default Sidebar;
