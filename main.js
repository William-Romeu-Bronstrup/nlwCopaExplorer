function createGame(player1, hour, player2) {
  return `
      <li>
        <img src="./assets/${player1}-icon.svg" alt="Bandeira de ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/${player2}-icon.svg" alt="Bandeira da ${player2}">
      </li>
  `;
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>

    </div>
  `;
}

document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="NLW Copa Logo" />
      </header>

      <main id="cards">

        ${createCard(
          '23/11', 'Quarta', 
          createGame("morocco", "07:00" , "croatia") +
          createGame("germany", "10:00" , "japan") +
          createGame("spain", "13:00" , "costaRica") +
          createGame("belgium", "16:00" , "canada")
        )}

        ${createCard(
          '24/11', 'Quinta', 
          createGame("switzerland", "07:00" , "cameroon") +
          createGame("uruguay", "10:00" , "southKorea") +
          createGame("portugal", "13:00" , "ghana") +
          createGame("brazil", "16:00" , "serbia")
        )}

      </main>
`;
