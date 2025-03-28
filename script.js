async function sendMessage(){
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

    // Fazer scrool automático para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    // Configuração do endpoint e chave da API
    const endpoint = "https://kaue-m8rymvaj-swedencentral.openai.azure.com";
    const apiKey = "DaKLUeme827QdEw3sc6WNjcKlvU6gnXP05VTIEei7QZ6N3hS6eVKJQQJ99BCACfhMk5XJ3w3AAAAACOGdoiC";
    const deploymentId = "gpt-35-turbo"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verefique a versão na documentação 



}