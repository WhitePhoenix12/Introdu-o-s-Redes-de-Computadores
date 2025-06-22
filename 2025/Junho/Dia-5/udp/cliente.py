import socket

def Send_message(host: str, port: int, message: str, name: str):
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    client_socket.sendto(message, (host, port))

    


if __name__=='__main__':
    HOST = '10.20.22.186' # ENDEREÇO IP DO SERVIDOR
    PORT = 9000 # PORTA DO SERVIDOR
    while True:
        name = input('Enter your name: ')
        message = input('Type your message: ').encode('utf-8')

        body_message = f"{name}!={message}".split()
        Send_message(HOST, PORT, body_message)


