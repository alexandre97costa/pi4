
// Este ip é usado em todos os pedidos ao backend e
// está aqui para evitar redundância 🤓

// Quando se mudar para o heroku, basta mudar este
// valor e os pedidos http funcionam todos na mesma 🤯

// Alternativamente, pode-se trocar a palavra "localhost"
// pelo ip do teu PC. Isto permite que consigas ver a app no
// tlm ou noutro pc, desde que estejam ligados à mesma net

// Para saberes o teu ip local:
// 1 - Vai à linha de comandos (Windows + R e depois escreve "cmd", sem as aspas)
// 2 - Na linha de comandos escreve "ipconfig", sem as aspas
// 3 - Copia os números que aparecerem à frente de "IPv4 Address"
// 4 - Devem ser parecidos com 192.168.241.167, mas o valor muda frequentemente

// ! Não faças commit de alterações feitas a este ficheiro

const ip = 'http://localhost:4011'
export default ip