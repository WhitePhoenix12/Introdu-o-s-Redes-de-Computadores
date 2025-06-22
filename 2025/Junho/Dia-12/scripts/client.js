const socket = new WebSocket('ws://localhost:9000');

socket.addEventListener('open', () => {
    console.log('Conectado ao servidor WebSocket');
});

socket.addEventListener('message', event => {
    console.log('Mensagem do servidor:', event.data);
});

socket.addEventListener('close', () => {
    console.log('Desconectado do Servidor');
});

socket.addEventListener('error', err => {
    console.log('Erro no WebSocket', err);
});

document.getElementById('btnEnviar').addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if(!nome || !mensagem){
        alert("Por favor né amigo, preenche os dois pra nós aí!");
        return;
    }

    const mensagemFinal = `[${nome}]: ${mensagem}`;

    if(socket.readyState === WebSocket.OPEN){
        socket.send(mensagemFinal);
        console.log('Mensagem enviada: ', mensagemFinal);
        alert('Mensagem enviada com sucesso (deu bom fi)!!!');
    } else{
        alert('WebSocket não está conectado.');
    }

    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
});