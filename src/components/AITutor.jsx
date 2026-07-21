import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AITutor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm your AI Tutor. Let me know if you need help with a prompt, debugging agents, or anything else in the course!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    const currentInput = input;
    setInput('');

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `That's a great question about "${currentInput}". To get the best results, try giving the AI more context and specifying the exact format you want the output in. Check out Module 1 for the 'Role-Context-Task' framework!` 
      }]);
    }, 1500);
  };

  return (
    <>
      <div className="tutor-fab" onClick={() => setIsOpen(true)} style={{ overflow: 'hidden', padding: 0 }}>
        <img src="/tutor_avatar.png" alt="AI Tutor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div className={`tutor-ui ${isOpen ? 'open' : ''}`}>
        <div className="tutor-header" onClick={() => setIsOpen(false)}>
          <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/tutor_avatar.png" alt="Tutor Avatar" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
            <span>AI Tutor</span>
          </span>
          <X size={18} />
        </div>
        
        <div className="tutor-body">
          {messages.map((msg, idx) => (
            <div key={idx} className={`tutor-bubble ${msg.role}`}>
              {msg.text}
            </div>
          ))}
        </div>
        
        <form className="tutor-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask me anything..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--accent-cyan)', marginLeft: '0.5rem', cursor: 'pointer' }}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default AITutor;
