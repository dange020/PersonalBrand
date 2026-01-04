import { useState, useEffect, useRef } from 'react';
import { commands, welcomeMessage } from '../data/commands';
import './Terminal.css';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', content: welcomeMessage }
    ]);
    const [input, setInput] = useState('');
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim();
        const newHistory = [...history, { type: 'input', content: cmd }];

        if (!trimmedCmd) {
            setHistory(newHistory);
            return;
        }

        setCmdHistory(prev => [trimmedCmd, ...prev]);
        setHistoryIndex(-1);

        if (trimmedCmd === 'clear') {
            setHistory([{ type: 'output', content: welcomeMessage }]);
            return;
        }

        if (commands[trimmedCmd]) {
            newHistory.push({ type: 'output', content: commands[trimmedCmd].output });
        } else {
            newHistory.push({
                type: 'error',
                content: `comando no encontrado: ${trimmedCmd}. Escribe 'help' para ver los comandos disponibles.`
            });
        }

        setHistory(newHistory);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < cmdHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(cmdHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(cmdHistory[newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const availableCommands = Object.keys(commands);
            const match = availableCommands.find(c => c.startsWith(input));
            if (match) {
                setInput(match);
            }
        }
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal-window" onClick={focusInput}>
            <div className="terminal-header">
                <div className="window-buttons">
                    <span className="btn close"></span>
                    <span className="btn minimize"></span>
                    <span className="btn maximize"></span>
                </div>
                <span className="window-title">pablo_carrasco — -zsh — 80x24</span>
            </div>
            <div className="terminal-body">
                {history.map((entry, index) => (
                    <div key={index} className={`history-entry ${entry.type}`}>
                        {entry.type === 'input' ? (
                            <div className="input-line">
                                <span className="prompt">➜  ~</span>
                                <span className="cmd-text">{entry.content}</span>
                            </div>
                        ) : (
                            <div className="output-content">{entry.content}</div>
                        )}
                    </div>
                ))}

                <div className="input-line current">
                    <span className="prompt">➜  ~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        spellCheck="false"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;
