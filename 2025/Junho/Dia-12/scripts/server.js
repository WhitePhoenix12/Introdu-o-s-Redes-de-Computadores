const WebSocket = require('ws');

function getIpLimpo(ip){
    if(!ip) return 'Desconhecido';

    if(ip === '::1') return '127.0.0.1'; //Essa parte aqui vale comentário

    // Aqui em cima tem um if para transformar o IPV6 localhost padrão "::1"
    // no IPV4 localhost padrão "127.0.0.1" , isso não era nem necessário, mas, como o webSocket só trabalha com IPV6
    // e em aula o senhor trabalhou com IPV4, achei muito estranho e até confuso deixar o IPV6, por isso a troca

    if(ip.startsWith('::ffff:')) return ip.substring(7); //Essa também

    // Essa aqui também é bem desnecessária, o que acontece aqui é que se o ip começar com "::ffff:", que é um
    // IPV4 mapeado em IPV6, ele retorna só o IPV4 (tudo depois dos sete primeiros caracteres). Necessário isso?
    // Não, na real isso é meio papagaiada, mas deixa o código mais padronizado e uniforme (deixa o código fofis 😳)

    return ip;
}

const wss = new WebSocket.Server({ port: 9000});

wss.on('connection', (ws, req) => {
    
    const IPcru = req.socket.remoteAddress;
    const ip = getIpLimpo(IPcru);

    const port = req.socket.remotePort; 
    console.log(`\nNovo Guri entrou no balaio: ${ip}:${port}\n`);

    ws.on('message', (message) => {
        console.log(`Mensagem de ${ip}:${port} - ${message}`)
        ws.send(`Servidor recebeu: ${message}`);
    });

    ws.on('close', () => {
        console.log(`\nEsse guri daqui vazou: ${ip}:${port}`);
    });

});

console.log('Servidor WebSocket rodando na porta 9000');