<template>
    <main class="about-page">
        <h1>Binair Stelsel</h1>
        <p>het binair stelsel uitgelegt en een embedded link naar Binary Bonanza voor verdere exploratie.</p>

        <div class="binair-uitleg">
            <h1>Het binaire stelsel, ook wel het tweetallige stelsel genoemd, is een wiskundig stelsel dat bestaat uit slechts twee cijfers: 0 en 1. In tegenstelling tot het decimale stelsel, dat we dagelijks gebruiken en bestaat uit tien cijfers (0-9), gebruikt het binaire stelsel slechts twee cijfers om getallen te vertegenwoordigen. Dit stelsel vormt de basis voor de werking van computers en digitale elektronica, omdat het gemakkelijk kan worden geïmplementeerd met behulp van elektronische schakelingen die slechts twee toestanden kunnen aannemen: aan (1) en uit (0).</h1>
            <h2>Hier is een beknopte uitleg van hoe het binaire stelsel werkt:</h2>
            <div class="binair-list">
            <div class="container1b">
            <h3>1. Binaire cijfers:</h3><p>In het binaire stelsel worden de cijfers 0 en 1 gebruikt om getallen te representeren. Deze cijfers worden "bits" (afkorting voor "binary digits") genoemd.</p>
            </div>
            <div class="container2b">
            <h3>2. Binair naar decimaal:</h3><p>Om een binair getal naar een decimaal getal te converteren, kun je de volgende formule gebruiken:</p><li>Elk cijfer in een binair getal vertegenwoordigt een bepaalde macht van 2. Van rechts naar links nemen de machten van 2 toe met elke positie.</li><li>Bijvoorbeeld: 1010 in binaire notatie komt overeen met 10 in decimale notatie. Het werkt als volgt: 12^3 + 02^2 + 12^1 + 02^0 = 8 + 0 + 2 + 0 = 10.</li>
            </div>
            <div class="container3b">
            <h3>3. Decimaal naar binair:</h3><p>Om een decimaal getal naar een binair getal te converteren, kun je herhaaldelijk delen door 2 en de resten opschrijven totdat het quotient 0 is. De resten lees je van onder naar boven om het binair equivalent te krijgen. Hier is een voorbeeld:</p><li>Voor het getal 14:</li><li>14 / 2 = 7 met een rest van 0</li><li>7 / 2 = 3 met een rest van 1</li><li>3 / 2 = 1 met een rest van 1</li><li>1 / 2 = 0 met een rest van 1</li><li>De resten in omgekeerde volgorde zijn 1110, wat overeenkomt met 14 in binaire notatie.</li>
            </div>
            </div>
        </div>


        <iframe src="https://games.penjee.com/binary-bonanza/game.php" width="700" height="500" frameborder="no" scrolling="no" ></iframe>
    </main>
</template>

<style lang="scss" scoped>
.binair-uitleg{
    h1{
        font-size: 15px;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    .binair-list{
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        
        h3{
            font-weight: 600;
        }

        p{
            font-weight: 500;
        }

        .container1b, .container2b, .container3b{
            padding-top: 1rem;
            padding-bottom: 0.5rem;
            padding-right: 50%;
        }
    }
}



</style>