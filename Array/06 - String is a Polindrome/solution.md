## Abordagem
Utilizamos três soluções diferentes para resolver este problema:

### Solução 1
- Apenas analisamos se a string original é igual à string invertida. Primeiro usamos o método `split` para transformar a string em um array de caracteres, depois usamos o método `reverse` para inverter o array e, por fim, usamos o método `join` para transformar o array em uma string novamente. Se a string original for igual à string invertida, retornamos `true`, caso contrário, retornamos `false`.

### Complexidade
- Complexidade de tempo: O(n), onde n é o tamanho da string.
- Complexidade de espaço: O(n), onde n é o tamanho da string.

---

### Solução 2
1. Inicializamos duas variáveis, `left` com valor 0, se referindo ao primeiro caractere da string, e `right` com valor `s.length - 1`, se referindo ao último caractere da string.
2. Enquanto `left` for menor que `right`, verificamos se o caractere na posição `left` é igual ao caractere na posição `right`. Se não for, retornamos `false`.
3. Se `left` for igual a `right`, significa que já verificamos todos os caracteres da string e que a string é um palíndromo, então retornamos `true`.
4. Se o caractere na posição `left` for igual ao caractere na posição `right`, incrementamos `left` e decrementamos `right` e continuamos o loop.

### Complexidade
- Complexidade de tempo: O(n), onde n é o tamanho da string.
- Complexidade de espaço: O(1), pois não utilizamos estruturas de dados auxiliares.

---

### Solução 3
- Utilizamos a mesma abordagem da solução 2, porém utilizando `chatAt` para acessar os caracteres da string.

### Complexidade
- Complexidade de tempo: O(n), onde n é o tamanho da string.
- Complexidade de espaço: O(1), pois não utilizamos estruturas de dados auxiliares.

