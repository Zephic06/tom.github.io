<template>
    <main class="computer-page">
        <h1>Computer</h1>
        <p>de werking van de computer uitgelegt door het proces van invoer, verwerking, uitvoer en opslag beschreven</p>

    <div class="uitleg-computer">
        <h2>De werking van een computer kan worden uitgelegd aan de hand van vier belangrijke stappen: invoer, verwerking, opslag en uitvoer. Dit wordt vaak aangeduid als het "invoer-verwerkings-uitvoer"-model.</h2>

        

        <div class="computer-lijst">
        <li>Invoer:
            Invoer is het eerste stadium van de computerwerking. Het is het proces waarin gegevens en instructies de computer binnenkomen. Dit kan op verschillende manieren gebeuren, zoals via een toetsenbord, muis, touchscreen, microfoon, camera, scanner of andere invoerapparaten. Invoerapparaten zetten fysieke acties of gegevens om in een digitale vorm die de computer kan begrijpen.</li>
        <li>Verwerking:
            Verwerking is het hart van de computerwerking. Zodra de gegevens en instructies zijn ingevoerd, worden ze verwerkt door de centrale verwerkingseenheid (CPU) van de computer. De CPU voert berekeningen uit, neemt beslissingen en voert programma's uit. Dit proces omvat het ophalen van gegevens uit het geheugen, het uitvoeren van bewerkingen en het opslaan van tijdelijke resultaten. De CPU werkt met behulp van het besturingssysteem en softwaretoepassingen.</li>
        <li>Opslag:
            Opslag houdt in dat gegevens worden bewaard voor toekomstig gebruik. Computers hebben verschillende soorten opslagapparaten, waaronder harde schijven, solid-state drives (SSD's), RAM (Random Access Memory), USB-sticks en optische schijven. Gegevens die zijn opgeslagen, kunnen worden opgehaald en verwerkt wanneer dat nodig is. Dit maakt het mogelijk om programma's en bestanden op te slaan en toegang te krijgen tot eerder ingevoerde gegevens.</li>
        <li>Uitvoer:
            Uitvoer is het laatste stadium van de computerwerking. Hier worden de resultaten van de verwerking zichtbaar of hoorbaar gemaakt voor de gebruiker. Dit kan gebeuren via beeldschermen, luidsprekers, printers, enzovoort. Uitvoerapparaten vertalen de digitale informatie terug naar een begrijpelijke vorm voor de mens.</li>
        </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/5ZNMitC9tPY?si=OUnsiAl9Js0MKsHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    

    </main>
</template>

<style lang="scss" scoped>
.uitleg-computer{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 2rem;


    h2{
        text-align: center;
        font-weight: 100;
        margin-bottom: 2rem;
    }


        
        

    .computer-lijst{
        margin-left: 60%;



        li{
            margin-bottom: 0.5cm;
        }
    }
}

    iframe{
        position:absolute;
        margin-right: 45%;
        margin-top: 10%;
        }


</style>