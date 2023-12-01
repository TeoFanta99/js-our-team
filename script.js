/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/


// GENERARE un array di oggetti con le informazioni dei membri del team con nome, ruolo, foto
const newArray = [

    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg",
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    }

];

// STAMPARE le informazioni in console
console.log(newArray);

// SELEZIONARE gli elementi del DOM
const mainGrid = document.getElementById("grid");

// FUNZIONE che permetta di generare elementi e di assegnare una classe
function generaUnElemento (tagtype, classname) {
    const element = document.createElement(tagtype);
    element.classList.add(classname);
    return element
};

// GENERARE gli elementi con ciclo for e con la funzione appena creata
for (let i = 0; i < newArray.length; i++) {
 
    let memberIesimo = newArray[i];
    let nomeMemberIesimo = memberIesimo.nome;
    let ruoloMemberIesimo = memberIesimo.ruolo;
    let fotoMemberIesimo = memberIesimo.foto;

    mainGrid.innerHTML += 
        `<div class="card">
            <img class="profile-img" src="${fotoMemberIesimo}" alt="">
            <div class="descrizione">
                <span class="name">${nomeMemberIesimo}</span>
                <span class="role">${ruoloMemberIesimo}</span>
            </div>
        </div>`
   
};