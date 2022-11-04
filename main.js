let body = document.getElementById("body");

let backgroundColors = ["yellow", "blue", "green"];

let change = 1;

function changeBackground() {

  switch (change) {
  
    case 1:
      body.classList.remove(backgroundColors[0]);
      body.classList.add(backgroundColors[1]);

      change += 1;
      break;

    case 2:
      body.classList.remove(backgroundColors[1]);
      body.classList.add(backgroundColors[2]);

      change += 1;
      break;

    default:
      body.classList.remove(backgroundColors[2]);
      body.classList.add(backgroundColors[0]);

      change = 1;
  }

}


function createGame(player1, hour, player2) {
  return `
      <li>
        <img src="./assets/${player1}-icon.svg" alt="Bandeira de ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/${player2}-icon.svg" alt="Bandeira da ${player2}">
      </li>
  `;
}

let delay = 0;
function createCard(date, day, games) {
  0
  delay += 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>

    </div>
  `;
}

document.querySelector("#cards").innerHTML =

    createCard(
      '23/11', 'Quarta', 
      createGame("morocco", "07:00" , "croatia") +
      createGame("germany", "10:00" , "japan") +
      createGame("spain", "13:00" , "costaRica") +
      createGame("belgium", "16:00" , "canada")
    )
    +
    createCard(
      '24/11', 'Quinta', 
      createGame("switzerland", "07:00" , "cameroon") +
      createGame("uruguay", "10:00" , "southKorea") +
      createGame("portugal", "13:00" , "ghana") +
      createGame("brazil", "16:00" , "serbia")
    );
