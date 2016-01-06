# Project

Lino Miltenburg

Titel: Correlatie vleesconsumptie en darmkanker

Een paar maanden geleden kwam de Wereld Gezondheids Organisatie met het bericht dat het eten van vlees een vergroting van de kans op darmkanker oplevert. In mijn visualisatie wil ik daarom de correlatie tussen de vleesconsumptie en het voorkomen van darmkanker visualiseren. Dit product kan gebruikt worden om de lezer van het artikel te laten zien dat er een correlatie is en om de lezer informatie te verschaffen over de vleesconsumptie in het land waarin hij of zij zich bevindt. Het heeft dus zowel een informatieve als een waarschuwende functie.

In de bijgevoegde foto is een schets te zien van de visualisatie. De pagina begint met een wereldkaart die de vleesconsumptie weergeeft aan de hand van een colour map. Naast de wereldkaart komt een linegraph die de vleesconsumptie van het geselecteerde land in de kaart laat zien. Onder de wereldkaart komt een barchart met de incidentie van darmkanker per land, aflopend van de hoogste icidentie naar de laagste. Tenslotte ga ik een sctatterpolot maken van de vleesconsumptie (x-as) en de darmkanker incidentie (y-as), die de daardwerkelijke correlatie gaat aantonen.

De data voor deze visualisatie kan ik verkrijgen op de site van de WHO en The Guardian. Hier zijn csv files te downloaden. Deze data zal wel nog enigszins gefintuned moeten worden voor gebruik. De data over de darmkanker per land is niet te downloaden, dus die zal ik eerst moeten scrapen van de internetpagina.

Het dashboard bevat vier verschillende onderdelen. De wereldkaart, line grap over de voedselconsumptie van het geselcteerde land over 20 jaar, de barchart met de darmkanker incidentie van alle landen en de scatterplot tussen vleesconsumptie en darmkanker incidentie. De linegraph past zich aan aan de selctie van de wereldkaart. De landen van de wereldkaart, de bars in de barchart en de punten in de scatterplots zijn gelinkt en hovering in een van de charts zorgt ook voor oplichting in de andere charts.

Ik verwacht geen gebruik van externe componenten. Met D3 moet ik mijn visualisatie kunnen volbrengen.

http://chartsbin.com/view/12730. Dit is een vergelijkbare visualisatie als de mijne. Ook hier is een wereldkaart weergegeven die de voedselconsumptie weergeeft. De technische aspecten heb ik niet kunnen achterhalen, maar ik weet al hoe dit zelf te moeten aanpakken met d3.
