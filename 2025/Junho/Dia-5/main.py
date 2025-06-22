class Pessoa:
    def _init_(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        print(f'Olá, meu nome é {self.nome} e trenho {self.idade} anos')



nome = 'leandro'
idade = 20
verdadeiro = True
falso = False
frutas = {'maçã', 'banana', 'laranja', 0}

dicionario = {
    'Aluno 1' : "Geleia",
    'Aluno 2' : "Bode",
    0: "Valor 0",
    'frutas' : frutas,
}

def funcao_exemplo():
    print('Função exemplo executando')

for fruta in frutas:
    print('Fruta', fruta)

if(verdadeiro):
    print('Verdadeiro')
else:
    print('Falso')

while(idade < 30):
    print('Idade:', idade)

    print(dicionario['Aluno 1'])

    idade = 100

array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

sigma = 0

for sigma in array:
    print('Número: ', sigma)

descricao = """
TEXTO ENORME, ENORME, ENORME, ENORME E ENORME MESMO AJSFAIOJFAIOFJAÇOISF
"""

print(descricao)

