# Linked List (ou Lista Encadeada)

## Introdução
Linked List é uma estrutura de dados linear que armazena elementos em qualquer lugar da memória. Cada elemento é chamado de nó e contém um valor(data) e um ponteiro(next) para o próximo nó. O primeiro nó é chamado de cabeça (head) e o último nó é chamado de cauda (tail). A cauda aponta para `null` ou `nil`, indicando que é o último nó da lista.

([Linked List Representation](https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png))

## Vantagens
- Tamanho dinâmico: A lista encadeada pode crescer ou diminuir dinamicamente, sem a necessidade de especificar o tamanho no início.
- Inserção e exclusão eficientes: A inserção e exclusão de elementos em uma lista encadeada são mais eficientes do que em um array, pois não é necessário realocar os elementos, apenas ajustar os ponteiros.
- Memória eficiente: A lista encadeada aloca memória apenas para os elementos que contém, enquanto um array aloca memória para um tamanho fixo, mesmo que não esteja cheio, evitando assim o desperdício de memória.
- Implementação: Vários tipos de estruturas de dados podem ser implementados usando listas encadeadas, como pilhas, filas, árvores, etc.


## Tipos de Linked List

### Singly Linked List
Cada nó contém um valor e um ponteiro para o próximo nó.

([Singly Linked List Representation](https://media.geeksforgeeks.org/wp-content/uploads/singly-linkedlist.png))

#### Características
- Cada nó contém um valor e um ponteiro para o próximo nó.
- A lista começa com um nó chamado cabeça (head), referente ao primeiro nó da lista e a cauda (tail), referente ao final da lista, que aponta para o endereço `null` ou `nil`.
- A inserção e exclusão de elementos é feita no início, no final ou no meio da lista.
- A busca de um elemento é feita de forma sequencial, começando pela cabeça e indo até a cauda.

#### Aplicações
- Memory management: Singly Linked List pode ser usada para implementar memory pools, onde a memória é alocada e desalocada dinamicamente, de acordo com a necessidade.
- Indexação de dados em bancos de dados: Singly Linked List pode ser usada para indexar dados em bancos de dados, permitindo velocidade de acesso e manipulação de dados.
- Representação de expressões matemáticas: Singly Linked List pode ser usada para representar expressões matemáticas, onde cada nó contém um operador e um operando.
- Sistemas operacionais: Singly Linked List pode ser usada para gerenciar processos em sistemas operacionais, onde cada nó contém informações sobre o processo e um ponteiro para o próximo processo.

#### Complexidade
- Inserção e exclusão: O(1)
- Busca: O(n)

#### Vantagens
- Tamanho dinâmico: Singly Linked List pode crescer ou diminuir dinamicamente, sem a necessidade de especificar o tamanho no início.
- Cache friendly: Singly Linked List é mais cache friendly do que um array, pois os elementos estão espalhados na memória, evitando erros de cache e melhorando o desempenho.
- Space efficient: Singly Linked List aloca memória apenas para os elementos que contém e a referência para o próximo nó, enquanto um array aloca memória para um tamanho fixo, mesmo que não esteja cheio, evitando assim o desperdício de memória.

#### Desvantagens
- Busca lenta: A busca de um elemento é feita de forma sequencial, começando pela cabeça e indo até a cauda, o que pode ser lento em comparação com um array, onde a busca é feita diretamente pelo índice.
- Acesso aleatório: Singly Linked List não suporta acesso aleatório, pois a busca de um elemento é feita de forma sequencial, começando pela cabeça e indo até a cauda.
- Espaço extra: Singly Linked List aloca memória extra para armazenar a referência para o próximo nó, o que pode ser um desperdício de memória em comparação com um array, onde a memória é alocada apenas para os elementos que contém.
- Parallel processing: Singly Linked List não suporta paralelismo, pois atualizar ou buscar um nó requer acesso sequencial, o que não pode ser feito facilmente em um ambiente paralelo.
- Dificuldade de inversão: Singly Linked List é difícil de inverter, pois cada nó contém apenas um ponteiro para o próximo nó, o que requer a criação de uma nova lista.

---

### Doubly Linked List
Cada nó contém um valor, um ponteiro para o próximo nó e um ponteiro para o nó anterior.

([Doubly Linked List Representation](https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/03/DLL1.png))

### Circular Linked List
A cauda aponta para a cabeça, formando um ciclo.

([Circular Linked List Representation](https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/03/CircularList.png))

