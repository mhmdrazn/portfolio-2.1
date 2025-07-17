import React from 'react';
import { Terminal, AnimatedSpan, TypingAnimation } from './terminal';

function TerminalAnim() {
    return (
        <div className="w-full max-w-xl">
            <Terminal>
                <TypingAnimation delay={1000}>&gt; whoami</TypingAnimation>

                <AnimatedSpan delay={2500} className="text-background/60">
                    $mhmdrazn@designer:~ [v2.0]
                </AnimatedSpan>

                <AnimatedSpan delay={2900} className="text-background/60">
                    → Role: Pixel Alchemist ⎯ Code Curious
                </AnimatedSpan>

                <AnimatedSpan delay={3300} className="text-background/60">
                    → Status: Designing with ❤️ since 2021
                </AnimatedSpan>

                <br />

                <TypingAnimation delay={4100}>&gt; skills --show</TypingAnimation>

                <AnimatedSpan delay={5900} className="text-background/60">
                    → Design : Figma | Sketch | Maze | Frammer
                </AnimatedSpan>

                <AnimatedSpan delay={6300} className="text-background/60">
                    → Languages: JavaScript | TypeScript | Dart | Python | Java | etc.
                </AnimatedSpan>

                <AnimatedSpan delay={6700} className="text-background/60">
                    → Framework: NextJS | TailwindCSS | Flutter
                </AnimatedSpan>

                <br />

                <TypingAnimation delay={7300}>&gt; systemctl start personality</TypingAnimation>

                <AnimatedSpan delay={10300} className="text-background/60">
                    → Empathy Engine: Always running
                </AnimatedSpan>

                <AnimatedSpan delay={10700} className="text-background/60">
                    → Pixel Perfectionist: v2.0 (calibrated)
                </AnimatedSpan>

                <AnimatedSpan delay={11100} className="text-background/60">
                    → Coffee → Creativity Pipeline: Optimized
                </AnimatedSpan>

                <br />

                <TypingAnimation delay={11500} className="text-muted-foreground">
                    Success! Project initialization completed.
                </TypingAnimation>

                <TypingAnimation delay={16000} className="text-muted-foreground">
                    Now enjoy your day.
                </TypingAnimation>
            </Terminal>
        </div>
    );
}

export default TerminalAnim;
