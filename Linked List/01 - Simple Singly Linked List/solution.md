## Abordagem
1. Criamos uma classe chamada `Node` que contém um valor e um ponteiro para o próximo nó e recebe um valor como argumento.
2. Na classe `Node`, definimos um construtor que inicializa o valor `value` como o valor passado por argumento e o ponteiro `next` como `null`, pois o nó ainda não está ligado a nenhum outro nó.
3. Criamos uma classe chamada `SinglyLinkedList` e definimos um construtor com `head` como o primeiro nó da lista, que inicialmente é `null`, pois a lista está vazia. `tail` como o último nó da lista, que inicialmente é `null`, pois a lista está vazia. `length` como o tamanho da lista, que inicialmente é `0`, pois a lista está vazia.
4. Na classe `SinglyLinkedList`, definimos um método `push` que recebe um valor como argumento. O método cria um novo nó a partir da classe `Node`que criamos anteriormente. Fazemos uma verificação para saber se a lista está vazia, se estiver, o `head` aponta para o novo né o o `tail` para o `head`, pois é o primeiro nó da lista. Se a lista não estiver vazia, o `tail` aponta para o novo nó e o `tail` é atualizado para o novo nó.
4. Após a verificação da lista, incrementamos o `length` e retornamos a lista.

## Complexidade
- Complexidade de tempo: O(1), pois a inserção é feita no final da lista, sem a necessidade de percorrer a lista.
- Complexidade de espaço: O(1), pois utilizamos apenas variáveis e não estruturas de dados auxiliares.
