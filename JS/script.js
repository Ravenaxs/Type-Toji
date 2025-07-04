// Array com curiosidades sobre Toji Fushiguro
const curiosidades = [
  "Toji Fushiguro não possui energia amaldiçoada, o que o torna invisível para feiticeiros.",
  "Ele foi rejeitado pela Família Zenin por não ter energia amaldiçoada.",
  "Toji é conhecido como 'O Assassino de Feiticeiros' por sua habilidade letal.",
  "Apesar de ser um anti-herói, Toji tem uma história trágica e complexa.",
  "Toji é pai de Megumi Fushiguro, uma revelação importante na história.",
  "Ele usa armas amaldiçoadas para combater feiticeiros poderosos.",
  "Sua força física é impressionante mesmo sem energia amaldiçoada."
];

// Função para mostrar uma curiosidade aleatória no elemento #curiosidade
function mostrarCuriosidade() {
  const indice = Math.floor(Math.random() * curiosidades.length);
  const textoCuriosidade = curiosidades[indice];
  
  const elementoCuriosidade = document.getElementById('curiosidade');
  elementoCuriosidade.textContent = textoCuriosidade;
}
