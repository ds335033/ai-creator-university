import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import AITutor from '../components/AITutor';

const CourseContent = ({ title, children }) => (
  <div className="prose animate-fade-in">
    <h2>{title}</h2>
    {children}
  </div>
);

const Quiz = ({ onPass }) => {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (selected === 2) {
      onPass();
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#7000ff', '#ffffff']
      });
    } else {
      setError(true);
    }
  };

  return (
    <div className="glass-panel" style={{ marginTop: '2rem' }}>
      <h3>Final Assessment</h3>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>What is the most important element of a good prompt?</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {['Using big words', 'Asking nicely', 'Providing clear context and constraints', 'Writing as little as possible'].map((opt, idx) => (
          <button 
            key={idx}
            className={`quiz-option ${selected === idx ? 'selected' : ''}`}
            onClick={() => { setSelected(idx); setError(false); }}
          >
            {opt}
          </button>
        ))}
      </div>
      
      {error && <p style={{ color: '#ff4d4f', marginTop: '1rem' }}>Incorrect. Try again! Think about what the AI actually needs to do a good job.</p>}
      
      <button 
        className="btn-primary" 
        style={{ marginTop: '1.5rem', width: '100%' }}
        onClick={handleSubmit}
        disabled={selected === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

const Certificate = () => (
  <div className="certificate animate-fade-in delay-1" style={{ marginTop: '3rem' }}>
    <h1 className="text-gradient-purple" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Certificate of Completion</h1>
    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>This certifies that you have successfully completed</p>
    <h2 style={{ fontSize: '2rem', margin: '1rem 0', color: 'white' }}>AI Creator University</h2>
    <p style={{ color: 'var(--accent-cyan)', fontWeight: 'bold', fontSize: '1.2rem' }}>Issued: {new Date().toLocaleDateString()}</p>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem', padding: '0 2rem' }}>
      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '0.5rem' }}>Instructor Signature</div>
      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '0.5rem' }}>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
    </div>
  </div>
);

const CourseDashboard = () => {
  const [passed, setPassed] = useState(localStorage.getItem('quizPassed') === 'true');

  const handlePass = () => {
    setPassed(true);
    localStorage.setItem('quizPassed', 'true');
  };

  return (
    <div className="container course-layout">
      <aside className="sidebar glass-panel">
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>Curriculum</h3>
        <nav>
          <NavLink to="module-1" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Module 1: Prompt Architecture
          </NavLink>
          <NavLink to="module-2" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Module 2: AI Agents & IDEs
          </NavLink>
          <NavLink to="community" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Community & Live Sessions
          </NavLink>
          <NavLink to="certification" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Certification
          </NavLink>
        </nav>
      </aside>

      <div className="content-section glass-panel">
        <Routes>
          <Route path="/" element={<Navigate to="module-1" replace />} />
          <Route path="module-1" element={
            <CourseContent title="Module 1: Prompt Architecture">
              <p>Welcome to AI Creator University. The foundational skill of the next decade is communicating effectively with machines.</p>
              <h3>The Role-Context-Task Framework</h3>
              <ul>
                <li><strong>Role:</strong> "Act as an expert copywriter..."</li>
                <li><strong>Context:</strong> "...writing a landing page for a new SaaS product..."</li>
                <li><strong>Task:</strong> "...write 3 high-converting headlines under 10 words each."</li>
              </ul>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '10px', marginTop: '1rem', borderLeft: '3px solid var(--accent-cyan)' }}>
                <strong>Assignment:</strong> Rewrite 3 of your worst prompts using the RCT framework.
              </div>
            </CourseContent>
          } />
          
          <Route path="module-2" element={
            <CourseContent title="Module 2: AI Agents & IDEs">
              <p>Writing code is no longer about syntax; it's about architecture and direction.</p>
              <h3>Using Cursor & Antigravity</h3>
              <p>Tools like Antigravity IDE allow you to spawn subagents that can read your entire codebase and implement features automatically.</p>
              <h3>Deploying Autonomous Agents</h3>
              <p>You can set up Python scripts using LangChain to scrape Twitter, summarize news, and auto-post to your newsletter while you sleep.</p>
            </CourseContent>
          } />
          
          <Route path="community" element={
            <CourseContent title="Community & Live Sessions">
              <p>Creation can be lonely. That's why we have a dedicated community of builders.</p>
              
              <div className="glass-panel" style={{ marginTop: '2rem', background: 'rgba(112,0,255,0.1)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--accent-cyan)' }}>Upcoming Live Masterclass</h3>
                <p><strong>Topic:</strong> Automating YouTube Shorts with Python</p>
                <p><strong>Date:</strong> Next Friday @ 2 PM EST</p>
                <button className="btn-primary" style={{ marginTop: '1rem' }}>Join Zoom Room</button>
              </div>
            </CourseContent>
          } />

          <Route path="certification" element={
            <CourseContent title="Certification">
              <p>Prove your knowledge to unlock your official AI Creator University Certificate.</p>
              {!passed ? (
                <Quiz onPass={handlePass} />
              ) : (
                <Certificate />
              )}
            </CourseContent>
          } />
        </Routes>
      </div>
      
      <AITutor />
    </div>
  );
};

export default CourseDashboard;
