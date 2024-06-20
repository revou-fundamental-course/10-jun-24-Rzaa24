# 10-jun-24-Rzaa24
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.box {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

input[type="number"],
input[type="text"],
textarea {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 200px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

button:focus {
    outline: none;
}

button + button {
    margin-left: 10px;
}

@media (max-width: 600px) {
    input[type="number"],
    input[type="text"],
    textarea {
        width: 90%;
    }
}
