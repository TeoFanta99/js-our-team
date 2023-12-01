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
        "foto" : "foto di Wayne Barnett",
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "foto di Angela Caroll"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "foto di Walter Gordon"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "foto di Angela Lopez",
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "foto di Scott Estrada"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "foto di Barbara Ramos"
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

    const newElement = generaUnElemento("div", "card");
    const nameMember = generaUnElemento("p", "nome");
    const roleMember = generaUnElemento("p", "ruolo");
    const descriptionMember = generaUnElemento("div", "descrizione");

    let memberIesimo = newArray[i];
    let nomeMemberIesimo = memberIesimo.nome;
    let ruoloMemberIesimo = memberIesimo.ruolo;
    console.log(nomeMemberIesimo + ", " + ruoloMemberIesimo);

    descriptionMember.append(nomeMemberIesimo);
    descriptionMember.append(ruoloMemberIesimo);
    newElement.append(descriptionMember);
    mainGrid.append(newElement);
   
};








// STAMPARE le informazioni sul DOM
