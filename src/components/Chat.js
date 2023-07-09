import React, { useState } from "react";

function Chat() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleClick = () => {
        const chatRequest = {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: input
                }
            ]
        }

        fetch(`http://localhost:8080/chat`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(chatRequest)
        })
            .then((response) => response.text())
            .then((data) => setOutput(data));
    };

    return (
        <div className="App">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>
                Send
            </button>
            <div>
                {output}
            </div>
        </div>
    );
}

export default Chat;
