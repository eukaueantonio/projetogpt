async function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value;

    if (!userMessage) return;

    // Adicionar mensagem do usuário 
    const userDiv = document.getElementById("div");
    userDiv.className = "user-message message";
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);

    // Limpar o campo de entrada 
    userInput.value = "";

    // Fazer scroll automático para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // Configuração do endpoint e chave da API
    const endpoint = "https://kaue-m8rymvaj-swedencentral.openai.azure.com";
    const apiKey = "DaKLUeme827QdEw3sc6WNjcKlvU6gnXP05VTIEei7QZ6N3hS6eVKJQQJ99BCACfhMk5XJ3w3AAAAACOGdoiC";
    const deploymentId = "gpt-35-turbo"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verefique a versão na documentação 

    // URL par aa chamada da API
    const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

    // Configuração do corpo da requisição
    const data = {
        message: [{ role: "user", content: userMessage }],
        max_tokens: 50
    };

    // Cabeçalhos da requisição
    const headers = {
        "Content-Type": "aplication/json",
        "api-key": apiKey
    };

    try {
        //Faz requisição com fetch
        const response = await fetch(url,{
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)

        });

        if (response.ok) {
            const result = await response.json();
            const botMessage = result.choices[0].message.content;

            // Adicionar a resposta do bot
            const botDiv = document.createElement("div");
            botDiv.className = "bot-message message";
            botDiv.textContent = botMessage;
            chatBox.appendChild(botDiv);

            // Faz scroll automático para a última mensagem
            chatBox.scrollTop = chatBox.scrollHeight;

        } else {
            console.error("Error na requisição", response.status, response.statusText);

            const botDiv = document.createElement("div");
            botDiv.className = "bot-message message";
            botDiv.textContent = "Erro ao se comunicar com o serviço";
            chatBox.appendChild(botDiv);
        }

    } catch (error) {
        console.error("Error :", error);

        const botDiv = document.createElement("div");
        botDiv.className = "bot-message message";
        botDiv.textContent = "Erro ao se comunicar com o serviço";
        chatBox.appendChild(botDiv);
    };
}