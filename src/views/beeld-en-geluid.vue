<template>
    <main class="beeld-page">
        <h1>Beeld en geluid opslaan</h1>
        <p>Beeld en geluid worden opgeslagen op verschillende manieren, afhankelijk van het medium en de technologie die wordt gebruikt. Hier is een beknopte uitleg over hoe ze doorgaans worden opgeslagen:</p>

        <div class="uitleg-beeld-en-geluid">

        <div class="oplsagbeeld">
            <h2>Opslag van Beeld:</h2>
            <p>Beelden worden doorgaans opgeslagen in digitale vorm, wat betekent dat ze worden omgezet in een reeks getallen die elektronisch kunnen worden opgeslagen en verwerkt. Hier is hoe het werkt:</p>
            <h3>1. Pixels:</h3>
            <li>Beelden worden opgedeeld in kleine elementen genaamd "pixels" (picture elements), die elk een kleurwaarde bevatten. Elke pixel vertegenwoordigt een enkele kleur op een specifieke locatie in de afbeelding.</li>
            <h3>2. Kleurinformatie:</h3>
            <li>Elke pixel slaat kleurinformatie op in de vorm van rode, groene en blauwe waarden (RGB) in het geval van kleurenfoto's. Voor zwart-witafbeeldingen wordt alleen de helderheidswaarde opgeslagen.</li>
            <h3>3. Resolutie:</h3>
            <li>De resolutie van een afbeelding verwijst naar het aantal pixels dat horizontaal en verticaal wordt weergegeven. Hoe hoger de resolutie, hoe gedetailleerder de afbeelding, maar ook hoe groter het bestand.</li>
            <h3>4. Bestandsindelingen:</h3>
            <li>Afbeeldingen kunnen worden opgeslagen in verschillende bestandsindelingen, zoals JPEG, PNG, GIF, en meer. Elk formaat heeft zijn eigen compressietechnieken en eigenschappen.</li>
        </div>

        <div class="opslaggeluid">
            <h2>Opslag van Geluid:</h2>
            <p>Geluid wordt ook in digitale vorm opgeslagen, meestal als een reeks van opeenvolgende monsters van het geluidssignaal. Hier is hoe dat gebeurt:</p>
            <h3>1. Analoge naar Digitaal Conversie:</h3>
            <li>Geluid begint als een analoog signaal (bijvoorbeeld geluidsgolven in de lucht) en wordt omgezet in een digitaal signaal door middel van een proces dat "analoge naar digitale conversie" wordt genoemd. Hierbij wordt het continue geluidssignaal gesampled op regelmatige intervallen.</li>
            <h3>2. Sampling Rate en Bitdiepte:</h3>
            <li>Geluidsopnamen worden gesampled met een bepaalde sampling rate (bijv. 44.1 kHz) en met een bepaalde bitdiepte (bijv. 16 bits). De sampling rate bepaalt hoe vaak per seconde geluid wordt vastgelegd, terwijl de bitdiepte de precisie van elke monster beschrijft.</li>
            <h3>3. Opslag als Digitale Bestanden:</h3>
            <li>De resulterende samples worden opgeslagen als digitale geluidsbestanden, zoals WAV, MP3, of AAC, waarbij elke sample wordt gecodeerd in digitale vorm.</li>
            <h3>4. Compressie (optioneel):</h3>
            <li>Geluidsbestanden kunnen worden gecomprimeerd om opslagruimte te besparen. Compressiealgoritmen verwijderen redundante informatie, maar kunnen ook enige kwaliteitsverlies veroorzaken.</li>
        </div>
        
        <img src="../assets/audio-file-formats-vector-6819237.jpg" alt="">

        </div>
    </main>
</template>

<style lang="scss" scoped>

.uitleg-beeld-en-geluid{
    display: flex;
    flex-direction: column;
    

    img{
        width: 20rem;
        height: 20rem;
    }
}

</style>