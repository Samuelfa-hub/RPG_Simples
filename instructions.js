/*Entendido! Sem problemas. O objetivo é que o desafio seja interessante e motivador para você. Se o tema de finanças não é o ideal, vamos trocá-lo por algo mais lúdico, mas que utilize exatamente os mesmos conceitos avançados que o desafio anterior exigia.
Que tal construir um pequeno jogo? É uma ótima maneira de aplicar lógica de programação de forma divertida.
Desafio Avançado (Aulas 40-50+): Mini-RPG - Simulador de Batalha
Objetivo: Criar um simulador de batalha de turnos no console, onde um herói, controlado por você, luta contra um monstro. Este projeto é perfeito para usar Classes para modelar os personagens e métodos de array para gerenciar itens e ações.
Conceitos em Foco:
- Classes e Construtores: Para criar os "modelos" do Herói e do Monstro.
- Objetos: As instâncias das suas classes (o seu herói específico e o monstro que ele enfrenta).
- Arrays de Objetos: Para gerenciar o inventário do herói (poções, etc.).
- Métodos map, filter, reduce (e find): Para interagir com o inventário.
- Lógica de Jogo (while loop): Para manter a batalha acontecendo turno após turno.
- Funções de Callback e Arrow Functions (=>): Para usar com os métodos de array.
Estrutura do Desafio:
Passo 1: A Classe Personagem
Vamos começar criando uma classe genérica que servirá tanto para o Herói quanto para o Monstro.
1. Crie uma classe chamada Personagem.
2. O constructor deve receber: nome, hp (pontos de vida), e forcaAtaque.
3. Adicione um método atacar(alvo):
    - Este método deve receber outro Personagem como alvo.
    - Ele deve chamar o método receberDano do alvo, passando a forcaAtaque do personagem atual.
    - Exiba uma mensagem no console, como "[Nome do atacante] atacou [Nome do alvo]!".
4. Adicione um método receberDano(dano):
    - Este método deve subtrair o dano do hp do personagem.
    - Exiba uma mensagem informando o dano recebido e o HP restante.
Passo 2: A Classe Heroi (Herança)
O Herói é um tipo especial de Personagem que tem um inventário. Aqui você pode aplicar o conceito de herança.
1. Crie uma classe Heroi que estende (extends) a classe Personagem.
2. No constructor do Heroi:
    - Chame o super() para passar nome, hp e forcaAtaque para a classe Personagem.
    - Adicione uma nova propriedade: inventario = []. O inventário será um array para guardar objetos de itens.
3. Adicione um método usarItem(nomeDoItem):
    - Aqui entram os métodos de array!
    - Use this.inventario.find(item => item.nome === nomeDoItem) para encontrar o item no inventário.
    - Se o item for encontrado:
        - Aplique o efeito do item (ex: se for uma poção de cura, this.hp += item.poderDeCura).
        - Remova o item do inventário. Uma boa forma de fazer isso é usar .filter() para criar um novo inventário sem o item usado. Ex: this.inventario = this.inventario.filter(item => item.nome !== nomeDoItem);
    - Se não encontrar, mostre uma mensagem de "Item não encontrado".
Passo 3: Criar os Combatentes e Itens
Agora, vamos criar os objetos para a nossa batalha.
1. Crie os Itens: Crie alguns objetos simples para representar os itens.
    JavaScript
    const pocaoCura = { nome: "Poção de Cura", tipo: "cura", poder: 30 };
    const pocaoForca = { nome: "Poção de Força", tipo: "forca", poder: 10 };
2. Crie as Instâncias: Use a palavra-chave new para criar seu herói e o monstro.
    JavaScript
    const heroi = new Heroi("Aragorn", 100, 15);
    const monstro = new Personagem("Orc", 80, 10);
3. Adicione Itens ao Herói:
    JavaScript
    heroi.inventario.push(pocaoCura);
    heroi.inventario.push(pocaoCura); // Ele pode ter mais de uma!
    heroi.inventario.push(pocaoForca);
Passo 4: O Loop da Batalha
Este é o coração do jogo, onde as ações acontecem em turnos.
1. Crie um loop while que continue enquanto o HP do herói E o HP do monstro forem maiores que zero.
2. Dentro do loop:
    - Turno do Jogador: Peça ao jogador para escolher uma ação (ex: "atacar" ou "usar item").
        - Se for "atacar", chame heroi.atacar(monstro).
        - Se for "usar item", peça o nome do item e chame heroi.usarItem(nomeDoItem).
    - Verifique se o monstro foi derrotado após o ataque do herói. Se sim, quebre o loop (break).
    - Turno do Monstro: Se o monstro ainda estiver vivo, ele ataca. Chame monstro.atacar(heroi).
    - Verifique se o herói foi derrotado. Se sim, quebre o loop.
    - Mostre o status atual (HP de ambos) no final de cada turno completo.
3. Fora do loop: Anuncie o vencedor com base em quem ainda tem HP.
Desafio Bônus:
1. Múltiplos Monstros: Crie um array de monstros e faça o herói lutar contra eles um por um ou todos de uma vez.
2. Inventário com map: Crie um método mostrarInventario() que usa .map() para transformar o array de objetos do inventário em um array de strings formatadas (ex: "Poção de Cura (cura 30 HP)") e depois exiba no console.
3. Sistema de Experiência: Dê pontos de experiência (XP) ao herói quando ele derrotar um monstro e faça-o subir de nível, aumentando seu hp e forcaAtaque.
Este desafio tem uma sensação de "jogo" mais familiar, mas por baixo dos panos, ele usa exatamente a mesma lógica de programação avançada, focada em classes, objetos e métodos de array. Divirta-se!
*/ 