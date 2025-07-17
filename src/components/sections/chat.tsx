import React from 'react';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconSend } from '@tabler/icons-react';
import { TextMorph } from '@/components/ui/text-morph';

function Chat() {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);

    const handleSend = async () => {
        if (!text.trim()) return;

        setLoading(true);
        setResponse(null);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text }),
            });

            if (!response.body) {
                throw new Error('No response body');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            let finalText = '';
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                finalText += decoder.decode(value, { stream: true });
                setResponse(finalText);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:max-w-lg max-w-md w-full h-fit flex flex-col items-start gap-2 mt-2">
            <TextMorph className="text-lg font-semibold text-background/70">{text}</TextMorph>
            <div className="flex flex-row gap-2 w-full">
                <Input
                    type="text"
                    value={text}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSend();
                    }}
                    onChange={(e) => setText(e.target.value)}
                    placeholders={[
                        'Does Razan has a girlfriend?',
                        'Who is Razan?',
                        'What is Razan doing right now?',
                    ]}
                    disabled={loading}
                />
                <Button
                    disabled={loading}
                    onClick={handleSend}
                    type="submit"
                    className="w-fit anim"
                >
                    {loading ? 'Thinking...' : <IconSend />}
                </Button>
            </div>
            {response && (
                <div className="anim pt-2">
                    <h1 className="text-xs text-background/50">Response</h1>
                    <div className="mt-1 text-sm text-background/80 w-full text-justify">
                        {response}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat;
