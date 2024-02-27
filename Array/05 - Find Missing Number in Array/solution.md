## Abordagem
Na matemática, sabemos que a soma dos primeiros n números naturais é dada pela fórmula n*(n+1)/2. Portanto, a soma dos primeiros n-1 números naturais é dada por (n-1)*n/2. Se a soma dos primeiros n-1 números naturais é subtraída da soma dos n números naturais, obtemos o número que falta.

1. Inicialize a variável `n` com o tamanho do array + 1, pois o array tem n-1 elementos, sempre iniciando pelo index 0.
2. Então definimos que a soma `sum` é igual a `n*(n+1)/2`.
3. Em seguida, iteramos sobre o array e subtraímos cada elemento da soma.
4. No final, a variável `sum` conterá o número que falta.

## Complexidade
O algoritmo tem complexidade de tempo O(n) devido à iteração sobre o array e complexidade de espaço O(1) devido ao uso de variáveis.
