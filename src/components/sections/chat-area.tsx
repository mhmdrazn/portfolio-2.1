import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TextMorph } from '@/components/ui/text-morph';
import { Textarea } from '@/components/ui/textarea';
import ContentMutation from '@/mutation/content.mutation';

const ChatArea = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('Say something...');
    const { addContentMutation } = ContentMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        if (!content.trim()) {
            return;
        }

        try {
            await addContentMutation.mutateAsync(content);
        } finally {
            setContent('');
            setLoading(false);
        }
    };

    return (
        <div className="md:max-w-lg max-w-md w-full h-fit flex flex-col items-start gap-2">
            <TextMorph className="text-lg font-semibold text-background/70">{text}</TextMorph>
            <div className="flex flex-col gap-2 w-full">
                <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
                    <Textarea
                        id="guestbook-message"
                        onChange={(e) => {
                            setContent(e.target.value);
                            setText(e.target.value);
                        }}
                        placeholder="Type your message here..."
                    />
                    <Button disabled={loading} type="submit" className="w-full anim">
                        {loading ? 'Sending...' : 'Send'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ChatArea;
