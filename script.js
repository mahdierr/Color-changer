// Ajouter un écouteur d'événement au bouton pour détecter le clic
const Btn = document.getElementById("changeColorBtn")

 Btn.addEventListener("click",myfunction);

// Créer une fonction pour changer la couleur de fond du body
function myfunction(){
    
    document.body.style.backgroundColor  = getRandom();
}

function getRandom(){

    let color = "#"
    const characters = "0123456789ABCDEF"

for (let i=0;i<6;i++)
{
    color += characters[Math.floor(Math.random() * 16)]
    
}

    return color;
}


// (Optionnel) Créer une fonction auxiliaire pour générer une couleur aléatoire