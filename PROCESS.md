Maandag 11 januari.
Vandaag begonnen aan de code van de visualisaties. Allereerst de data gefinetuned aan de hand van wat geschreven python code om de data gereed te maken voor gebruik met d3. Vervolgens de index.html aangemaakt en vervolgens het javascript bestand van de datamap aangemaakt aan de hand van de datamaps jQuery plugin die gebruik maakt van d3 en SVG. Onder de worldmap is er een begin gemaakt aan de barchart.

Dinsdag 12 januari.
Op dinsdag ben ik verder gegaan aan de barchart. Ik heb er aan de hand van voorgeprogrammeerde tooltip een tooltip toegevoegd dir het desbetreffende land en de daarbij horende waarde weergeeft. Daarnaast heb ik de bars aflopend gemaakt. Dit heb ik handmatig aangepast in de csv-file omdat ik op het internet geen handige tool vond.

Woensdag 13 januari.
Vandaag heb ik besloten om aan de wereldkaart aan te laten passen aan een geselecteerd jaar. Daarvoor heb ik twee mogelijkheden voor gevonden. Een slider en buttons met het jaartal erop. Bij de buttons liep ik net als bij de slider tegen het probleem dat ik met moeite het jaartal gescraped kreeg.

Donderdag 14 januari.
Vandaag heb ik voor een slider gekozen en ben ik een manier gaan bedenken om het jaartal te scrapen. De waarde die de slider namelijk teruggeeft is het percentage van de slider waar de button zich bevindt. Door middel van mijn updateSlider() functie in javascript heb ik deze percentages kunnen omzetten in jaartallen.

Woensdag 20 januari.
Vandaag heb ik mijn slider afgerond. Door middel van een onclick en onmousmove event. Het duurde even voor ik hem helemaal werkend had. Hiervoor moest ik ook het onclick en onmousmove event op de de kaders onder en boven de slider toepassen. Daarnaast is de dictionary aangepast die nu informatie heeft voor 10 jaar. Morgen ga ik aan de slag met de interactiviteit tussen de verschillende visualisaties.

Donderdag 21 januari.
Vandaag ben ik begonnen aan de interactiviteit tussen de verschillende visualisaties. Als er op een land op de map wordt geklikt, wordt de drieletterige code doorgegeven. Deze code wordt vervolgens omgezet in de landnaam zodat de bar ingekleurd kan worden van het desbetreffende land.

Vrijdag 22 januari.
Ondertussen ben ik aan de slag gegaan met de scatterplot en heb ik de data aanpassen met een python code. Hier kwam ik niet voor problemen te staan. Tijdens de presentatie kreeg ik een goede tip omtrent de interactiviteit tussen de verschillende visualisaties. Er is namelijk helemaal geen functie nodig om de drieletterige code om te zetten naar de volledige landnaam maar deze kan direct verkregen worden door geography.properties.name te noteren in plaats van geography.id.

Maandag 25 januari.
Ik ben vandaag veel bezig geweest met de onderlinge interactie tussen de visualisaties. Het probleem waar ik tegen aanliep was dat de bar die is gehighlight niet wegging op het moment dat een andere bar geselecteerd werd door op een land of stip in de scatterplot te klikken. uiteindelijk is dit gelukt door de bar die is geselecteerd op te slaan in een variabelen en te zorgen dat die variabele weer oranje wordt gekleurd op het moment dat er een nieuw bar geselecteerd wordt.
