"use client";

import { useState, useEffect } from 'react';
import s from './styles.module.css';

interface TerminalLine {
  prompt?: string;
  command?: string;
  output: string;
  isTyping?: boolean;
}

export default function TerminalTypewriter() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  // Categorize skills
  const frontend = [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Material UI',
    'Redux Toolkit',
    'Vite',
    'Three.js',
    'Figma'
  ];
  const backend = [
    'Node.js',
    'Express.js',
  ];
  const data = [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Supabase',
    'Firebase'
  ];
  const devops = ['Vercel', 'Docker', 'Linux/Ubuntu', 'GitHub', 'Git'];
  
  const lines: TerminalLine[] = [
    {
      prompt: 'mike@portfolio:~$',
      command: 'whoami',
      output: 'Michael Innella'
    },
    {
      prompt: 'mike@portfolio:~$',
      command: 'cat /etc/roles.txt',
      output: 'Full-Stack Developer | Front-end Engineer | UI/UX Designer'
    },
    {
      prompt: 'mike@portfolio:~$',
      command: 'echo "$MISSION"',
      output: 'I design and build fast, accessible web apps with a clean UI and a pragmatic, ship-first mindset.'
    },
    {
      prompt: 'mike@portfolio:~$',
      command: 'ls /usr/local/skills/frontend/',
      output: frontend.join('  ')
    },
    {
      prompt: 'mike@portfolio:~$',
      command: 'ls /usr/local/skills/backend/',
      output: backend.join('  ')
    },
    {
      prompt: 'mike@portfolio:~$',
      command: 'ls /usr/local/skills/data/',
      output: data.join('  ')
    },
    {
      prompt: 'mike@portfolio:~$',
      command: 'ls /usr/local/skills/devops/',
      output: devops.join('  ')
    }
  ];

  // Check if animation has already played
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasPlayed = sessionStorage.getItem('terminalAnimationPlayed');
      if (hasPlayed === 'true') {
        // Skip animation and show final state
        setSkipAnimation(true);
        setCurrentLineIndex(lines.length);
        setIsComplete(true);
      }
    }
  }, []);

  useEffect(() => {
    if (skipAnimation) {
      // Animation has already played, don't run it again
      return;
    }

    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      // Mark animation as played in sessionStorage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('terminalAnimationPlayed', 'true');
      }
      return;
    }

    const line = lines[currentLineIndex];
    const fullText = line.command || '';
    let charIndex = 0;
    let typingPhase: 'command' | 'output' = 'command';
    let outputText = '';
    let interval: NodeJS.Timeout;

    const typeNextChar = () => {
      if (typingPhase === 'command') {
        if (charIndex <= fullText.length) {
          setCurrentText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          // Command typed, pause then show output
          clearInterval(interval);
          setTimeout(() => {
            typingPhase = 'output';
            charIndex = 0;
            outputText = line.output;
            // Check if this is a skills list (contains multiple items)
            const isSkillsList = currentLineIndex >= 3; // Skills start from index 3
            const speed = isSkillsList ? 15 : 30; // Much slower for skills
            interval = setInterval(typeNextChar, speed);
          }, 500);
        }
      } else if (typingPhase === 'output') {
        if (charIndex <= outputText.length) {
          setCurrentText(fullText + '\n' + outputText.slice(0, charIndex));
          charIndex++;
        } else {
          // Line complete, move to next
          clearInterval(interval);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setCurrentText('');
          }, 1000);
        }
      }
    };

    // Start with command typing speed
    interval = setInterval(typeNextChar, 40);
    
    return () => clearInterval(interval);
  }, [currentLineIndex, skipAnimation, lines.length]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const renderLine = (line: TerminalLine, index: number) => {
    // If animation was skipped, render all lines immediately
    if (skipAnimation) {
      return (
        <div key={index} className={s.line}>
          <span className={s.prompt}>{line.prompt}</span>
          <span className={s.command}> {line.command}</span>
          <br />
          <span className={s.output}>{line.output}</span>
        </div>
      );
    }

    const isCurrentLine = index === currentLineIndex;
    const isRendered = index < currentLineIndex;
    
    if (!isRendered && !isCurrentLine) return null;

    if (isCurrentLine) {
      const parts = currentText.split('\n');
      const command = parts[0] || '';
      const output = parts[1];
      
      return (
        <div key={index} className={s.line}>
          <span className={s.prompt}>{line.prompt}</span>
          <span className={s.command}> {command}</span>
          {/* Only show cursor after command if no output yet */}
          {showCursor && output === undefined && <span className={s.cursor}>█</span>}
          {/* If output exists (even empty string), show it on new line */}
          {output !== undefined && (
            <>
              <br />
              <span className={s.output}>
                {output}
                {showCursor && <span className={s.cursor}>█</span>}
              </span>
            </>
          )}
        </div>
      );
    }

    // Fully rendered line
    return (
      <div key={index} className={s.line}>
        <span className={s.prompt}>{line.prompt}</span>
        <span className={s.command}> {line.command}</span>
        <br />
        <span className={s.output}>{line.output}</span>
      </div>
    );
  };

  return (
    <div className={s.terminal}>
      <div className={s.header}>
        <div className={s.buttons}>
          <span className={s.button} style={{ background: '#ff5f57' }}></span>
          <span className={s.button} style={{ background: '#ffbd2e' }}></span>
          <span className={s.button} style={{ background: '#28ca42' }}></span>
        </div>
        <div className={s.title}>mike@portfolio — bash</div>
      </div>
      <div className={s.body}>
        {lines.map((line, index) => renderLine(line, index))}
        {isComplete && (
          <div className={s.line}>
            <span className={s.prompt}>mike@portfolio:~$</span>
            <span className={s.command}> </span>
            {showCursor && <span className={s.cursor}>█</span>}
          </div>
        )}
      </div>
    </div>
  );
}
