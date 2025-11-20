"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Copy, Pause, Play, FastForward, Rewind } from "lucide-react";
import snippets from "@/app/assets/portfolioData/snippets";

// Import Prism core and specific language components
import Prism from "prismjs";
import "prismjs/components/prism-markup"; // For HTML
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";



const SPEED_PRESETS = {
    slow: { typing: 50, deleting: 25 },
    normal: { typing: 20, deleting: 10 },
    fast: { typing: 10, deleting: 5 }
};

const AnimatedCodeBlock = () => {
    const [typedCode, setTypedCode] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [snippetIndex, setSnippetIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState("normal");
    const [fade, setFade] = useState(1);
    const [highlightedLine, setHighlightedLine] = useState(null);
    const [isCopied, setIsCopied] = useState(false);

    const currentSnippet = snippets[snippetIndex];
    const fullCode = currentSnippet.code;
    const { typing: TYPING_SPEED, deleting: DELETING_SPEED } = SPEED_PRESETS[speed];

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(fullCode);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }, [fullCode]);

    useEffect(() => {
        if (isPaused) return;

        let timeout;
        const PAUSE_DURATION = 1000;

        if (!isDeleting && charIndex < fullCode.length) {
            // Typing with fade effect
            timeout = setTimeout(() => {
                setFade(1);
                setTypedCode(fullCode.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                // Highlight current line
                setHighlightedLine(Math.floor(fullCode.slice(0, charIndex + 1).split('\n').length - 1));
            }, TYPING_SPEED);
        } else if (!isDeleting && charIndex === fullCode.length) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
                setHighlightedLine(null);
            }, PAUSE_DURATION);
        } else if (isDeleting && charIndex > 0) {
            // Deleting with fade effect
            timeout = setTimeout(() => {
                setFade(0.7);
                setTypedCode(fullCode.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                setHighlightedLine(Math.floor(fullCode.slice(0, charIndex - 1).split('\n').length - 1));
            }, DELETING_SPEED);
        } else if (isDeleting && charIndex === 0) {
            // Transition to next snippet
            timeout = setTimeout(() => {
                setFade(0);
                setTimeout(() => {
                    setIsDeleting(false);
                    setSnippetIndex((prev) => (prev + 1) % snippets.length);
                    setFade(1);
                }, 300);
            }, PAUSE_DURATION);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, fullCode, isPaused, snippetIndex, TYPING_SPEED, DELETING_SPEED]);

    return (
       <div className="skills-bg   ">
          <div className="max-w-[1200px] relative z-10 mx-auto ">
              <div className="code-block-container bg-purple-950/30  z-10 w-full ">
                  <div className="code-block-header ">
                      <span className="language-label">{currentSnippet.language.toUpperCase()}</span>
                      <div className="controls">
                          <button onClick={() => setIsPaused(!isPaused)} title={isPaused ? "Play" : "Pause"}>
                              {isPaused ? <Play size={16} /> : <Pause size={16} />}
                          </button>
                          <button onClick={() => setSpeed("slow")} disabled={speed === "slow"} title="Slow">
                              <Rewind size={16} />
                          </button>
                          <button onClick={() => setSpeed("normal")} disabled={speed === "normal"} title="Normal">
                              <Play size={16} />
                          </button>
                          <button onClick={() => setSpeed("fast")} disabled={speed === "fast"} title="Fast">
                              <FastForward size={16} />
                          </button>
                          <button onClick={copyToClipboard} title={isCopied ? "Copied!" : "Copy"}>
                              <Copy size={16} />
                              {isCopied && <span className="copy-feedback">Copied!</span>}
                          </button>
                      </div>
                  </div>

                  <div className="code-block ">
                      <Highlight code={typedCode} language={currentSnippet.language} theme={themes.vsDark}>
                          {({ className, style, tokens, getLineProps, getTokenProps }) => (
                              <pre className={className} style={{ ...style, background: "transparent", margin: 0, opacity: fade }}>
              {tokens.map((line, i) => (
                  <div
                      key={i}
                      {...getLineProps({ line })}
                      className={`code-line ${highlightedLine === i ? 'highlighted' : ''}`}
                  >
                      <span className="line-number">{i + 1}</span>
                      <span className="code-content">
                    {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                    ))}
                          {i === tokens.length - 1 && <span className="blinking-cursor">|</span>}
                  </span>
                  </div>
              ))}
            </pre>
                          )}
                      </Highlight>
                  </div>

                  <style jsx>{`
        .code-block-container {
          border-radius: 8px;
          padding: 20px;
          font-family: monospace;
          color: white;
          font-size: 14px;
          line-height: 1.4em;
          margin: 0 auto;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .code-block-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .language-label {
          font-weight: bold;
          color: #61dafb;
        }

        .controls {
          display: flex;
          gap: 10px;
        }

        .controls button {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 5px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .controls button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
        }

        .controls button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .code-block {
          overflow-x: auto;
          height: 500px;
        }

        .code-line {
          display: flex;
          transition: background 0.3s;
        }

        .highlighted {
          background: rgba(255, 255, 255, 0.05);
        }

        .line-number {
          user-select: none;
          width: 2em;
          text-align: right;
          margin-right: 1em;
          color: rgba(255, 255, 255, 0.4);
        }

        .code-content {
          flex: 1;
        }

        .blinking-cursor {
          display: inline-block;
          animation: blink 1s steps(1) infinite;
        }

        .copy-feedback {
          position: absolute;
          background: #61dafb;
          color: #1a1a1a;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          margin-left: 8px;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        @media (max-width: 600px) {
          .code-block-container {
            font-size: 12px;
            padding: 15px;
          }

          .controls {
            gap: 5px;
          }

          .controls button {
            padding: 3px;
          }
        }
      `}</style>
              </div>
          </div>
       </div>
    );
};

export default AnimatedCodeBlock;