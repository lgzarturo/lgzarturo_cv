const frases = [
    "Don’t comment bad code — rewrite it.",
    "Talk is cheap. Show me the code.",
    "Learn little by little, start with the basics",
    "Write code for humans, not just for machines",
    "Good design adds value quickly",
    "Experiment and learn from your mistakes",
    "Enjoy programming",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
    "First, solve the problem. Then, write the code.",
    "Premature optimization is the root of all evil.",
    "Make it work, make it right, make it fast.",
    "Clean code always looks like it was written by someone who cares.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to go fast, is to go well.",
    "Simplicity is the ultimate sophistication.",
    "Code is poetry.",
    "In programming, the hard part isn’t solving problems, but deciding what problems to solve.",
    "The best error message is the one that never shows up.",
    "Code never lies, comments sometimes do.",
    "The only way to go fast, is to go well."
];
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

export default function Quote() {
    return (
        <div className="flex-1 flex justify-end items-center">
            <a href="/" className="ml-6 text-lg italic text-purple-700 font-semibold animate-fade-in-delay">
                {fraseAleatoria}
            </a>
        </div>
    );
}