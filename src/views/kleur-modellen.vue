<template>
    <main class="kleurmodellen-page">
        <h1>kleur-modellen</h1>
        <p>de kleurmodellen RGB en CMY-K behandelt, inclusief een uitleg over pixels en resolutie</p>

        <div class="uitleg-kleur">
            <h3>RGB en CMYK zijn twee verschillende kleurmodellen die worden gebruikt in grafisch ontwerp, fotografie en afdrukken. Ze zijn bedoeld voor verschillende toepassingen en werken op verschillende principes. Hier is een uitleg van beide kleurmodellen, samen met informatie over pixels en resolutie:</h3>

            <div class="uitlegRGB">
                <h2>RGB (Rood-Groen-Blauw):</h2>
                    <p>RGB is een additief kleurmodel dat wordt gebruikt in digitale schermen, zoals computermonitors, televisies en camera's. In het RGB-model worden kleuren gecreëerd door verschillende hoeveelheden rood, groen en blauw licht te combineren. De basisgedachte hierachter is dat wanneer je volledige intensiteit van elk van deze drie kleuren toevoegt, je wit licht krijgt. De afwezigheid van alle kleuren resulteert in zwart.</p>
                    <li>Rood (Red), Groen (Green), Blauw (Blue): Dit zijn de drie primaire kleuren in het RGB-model. Door verschillende intensiteiten van deze kleuren te mengen, kun je een breed scala van kleuren produceren.</li>
                    <li>Pixels: Een pixel (afkorting voor "picture element") is de kleinste eenheid van een digitaal beeld. Elk pixel kan een kleur vertegenwoordigen volgens het RGB-model. Een afbeelding op een scherm is opgebouwd uit miljoenen pixels die samen een beeld vormen.</li>
                    <li>Resolutie: De resolutie van een scherm of afbeelding wordt gemeten in pixels per inch (PPI) of dots per inch (DPI). Het geeft aan hoeveel pixels er in een bepaald gebied zijn. Hoe hoger de resolutie, hoe scherper en gedetailleerder de afbeelding kan zijn.</li>
            </div>

            <div class="uitlegCMYK">   
                <h2>CMYK (Cyaan, Magenta, Geel, Zwart):</h2>
                    <p>CMYK is een subtractief kleurmodel dat voornamelijk wordt gebruikt in de drukindustrie. In tegenstelling tot het additieve RGB-model, werkt het CMYK-model door kleuren af te trekken van een witte achtergrond. De vier kleuren, cyaan, magenta, geel en zwart (key), worden in verschillende verhoudingen gecombineerd om verschillende kleuren te produceren.</p>
                    <li>Cyaan, Magenta, Geel, Zwart: Deze kleuren worden gebruikt in de drukindustrie om gedrukte afbeeldingen te produceren. Zwart wordt "key" genoemd omdat het verantwoordelijk is voor het definiëren van de belangrijkste details en contouren in afdrukken.</li>
                    <li>Pixels: Net als in het RGB-model zijn pixels ook aanwezig in digitale afbeeldingen die bedoeld zijn voor afdrukken in CMYK-kleuren. Elke pixel bevat informatie over de hoeveelheid cyaan, magenta, geel en zwart die nodig is om de gewenste kleur te produceren.</li>
                    <li>Resolutie: In de afdrukwereld wordt resolutie gemeten in dots per inch (DPI). Een hogere DPI-waarde resulteert in een scherpere afdruk. Bij het omzetten van een RGB-afbeelding naar CMYK, moet je rekening houden met kleurconversie en verlies van helderheid, omdat het kleurbereik van CMYK kleiner is dan dat van RGB.</li>
            </div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/9hirYMZ7PQc?si=dBzNuCx1d4LOPWy6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>



    </main>
</template>

<style lang="scss" scoped>

h3{
    margin-top: 5rem;
    text-align: center;
    margin-left: 5rem;
    margin-right: 5rem;
    font-size: 15px;
    margin-bottom: 0.5rem;
}

.uitleg-kleur{
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .uitlegRGB, .uitlegCMYK{
        width: 40%;
        position: relative;
        left: 50rem;

        h2{
            padding-top: 2rem;
        }

        p{
            padding-top: 0.5rem;
        }

        li{
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
        }
    }

    iframe{
        position:absolute;
        margin-left: 6rem;
    }
}

</style>