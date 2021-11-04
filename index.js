/**
 * Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
Consigli del giorno:
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in una funzione.
 */

/**
 * 1. Formare un array di oggetti con le info di tutti i membri del team.
 * 2. Far stampare nell'html tutte le card dei membri del team.
 * 3. Creare una funzione che permetta agli utenti di inserire nuovi membri del team.
 */

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);
console.table(team);

const cardsContainer = document.querySelector('.team-container');

for(let i = 0; i < team.length; i++) {
    const cardItem = team[i];

    cardsContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${cardItem.photo}"
            alt="${cardItem.name}"
            />
        </div>
        <div class="card-text">
            <h3>${cardItem.name}</h3>
            <p>${cardItem.role}</p>
        </div>
    </div>`;
}

const addNewMemberBtn = document.getElementById('addMemberButton');
console.log(addNewMemberBtn);
addNewMemberBtn.addEventListener('click', function() {

const name = document.getElementById('name').value;
console.log(name);
const role = document.getElementById('role').value;
console.log(role);
const photo = document.getElementById('image').value;
console.log(photo);

    addNewMember(name, role, photo);
});


/**
 * Add new members from user input
 */

function addNewMember (name, role, photo) {
    cardsContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${photo}"
            alt="${name}"
            />
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>`;
}