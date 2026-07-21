import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Video, MessageSquare } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="animate-fade-in text-gradient-purple">
          Master the Future of Creation
        </h1>
        <p className="animate-fade-in delay-1">
          A comprehensive, step-by-step learning platform that teaches you how to leverage AI agents, prompt engineering, and automated media generation to scale your content.
        </p>
        <div className="animate-fade-in delay-2">
          <Link to="/checkout" className="btn-primary">
            Unlock Full Access for $9.99 AUD
          </Link>
        </div>
        
        <div className="animate-fade-in delay-3" style={{ marginTop: '4rem', width: '100%', maxWidth: '1000px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(112,0,255,0.4)', border: '1px solid var(--glass-border)' }}>
          <img src="/hero_user.png" alt="AI Creator Command Center" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      <section className="features-grid animate-fade-in delay-3">
        <div className="glass-panel">
          <div style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}><Brain size={40} /></div>
          <h3>Prompt Architecture</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Stop talking to AI like a human. Learn the frameworks to get production-ready outputs every single time.</p>
        </div>

        <div className="glass-panel">
          <div style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}><Cpu size={40} /></div>
          <h3>AI Agents & IDEs</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Deploy autonomous agents to write code, manage tasks, and run your backend operations while you sleep.</p>
        </div>

        <div className="glass-panel">
          <div style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}><Video size={40} /></div>
          <h3>Generative Media</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Create stunning videos, lifelike voiceovers, and hyper-realistic images using cutting-edge models.</p>
        </div>

        <div className="glass-panel">
          <div style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}><MessageSquare size={40} /></div>
          <h3>Built-in AI Tutor</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Get stuck? Your personalized AI tutor is embedded directly in the course to help you debug and brainstorm.</p>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="animate-fade-in delay-3" style={{ margin: '6rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.8rem' }} className="text-gradient-cyan">Powered by Next-Gen AI Workflows</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '0.5rem' }}>Learn how to orchestrate multi-agent systems and automated creation pipelines.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div className="glass-panel" style={{ padding: '1rem', overflow: 'hidden' }}>
            <img src="/workflow_matrix.png" alt="AI Workflow Matrix" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
          </div>
          <div className="glass-panel" style={{ padding: '1rem', overflow: 'hidden' }}>
            <img src="/tutor_avatar.png" alt="AI Tutor Avatar" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
