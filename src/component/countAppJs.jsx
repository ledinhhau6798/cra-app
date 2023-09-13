import React from "react";

function CountApp() {
    let count = 0;
    const handleIncreamentCount = () => {
        count = count + 1;
        document.getElementById('h_1').innerText = `Count: ${count}`;
    }
    const handleReductCount = () => {
        count = count - 1;
        document.getElementById('h_1').innerText = `Count: ${count}`;
    }
    return (
        <div>
            <h1 id="h_1">Count: 0</h1>
            <button onClick={handleIncreamentCount}>tăng Count</button>
            <button onClick={handleReductCount}>giảm Count</button>
        </div>
    )
}

export default CountApp;