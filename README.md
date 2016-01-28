# Project

Lino Miltenburg

Titel: Correlatie vleesconsumptie en darmkanker

Een paar maanden geleden kwam de Wereld Gezondheids Organisatie met het bericht dat het eten van vlees een vergroting van de kans op darmkanker oplevert. In aanvulling op dit artikel wil ik de correlatie tussen de wereldwijde vleesconsumptie en het voorkomen van darmkanker visualiseren. In de visualisatie is de wereldwijde vleesconsumptie tussen 1993 en 2002 te zien en de darmkanker incidentie van 2002. Dit product kan gebruikt worden om de lezer van het artikel te laten zien of er een correlatie is en om de lezer informatie te verschaffen over de vleesconsumptie in het land waarin hij of zij woont. Het heeft dus zowel een informatieve als een waarschuwende functie.

Het dashboard ziet er als volgt uit. Te beginnen met een wereldkaart die aan de hand van een colourmap de vleesconsumptie over de wereld in 2002 weergeeft. Hovering over de landen geeft de naam van het land en de daadwerkelijke hoeveelheid vlees per persoon weer in een tooltip. Er is gekozen voor een kleurpalet van heel licht rood naar donker rood naarmate er een hogere vleesconsumptie is. Daarnaast bevindt zich onder de wereldkaart een slider waarin een specifiek jaar geselecteerd kan worden. De waarde van de slider wordt doorgegeven aan de wereldkaart en die past zich daarop aan. De twee andere grafieken worden niet aangepast aan de slider omdat daarvoor te weinig data voorhanden is. 
![alt tag](https://github.com/linomiltenburg/Programmeerproject/blob/master/doc/Wereldkaart.png)

Ten tweede wordt er rechts daarvan een aflopende barchart weergegeven die de incidentie van darmkanker per land weergeeft (zie figuur Barchart). Echter zijn hier slechts 70 landen in opgenomen aangezien er voor dat aantal maar data voorhanden was. Er is een link tussen de visualisaties, waardoor het klikken op een van de landen van de wereldkaart zorgt voor een selectie van de bar van het desbetreffende land. De interactie en variabele die doorgegeven worden staat weergegeven in het figuur Technical design. 

![alt tag](https://github.com/linomiltenburg/Programmeerproject/blob/master/doc/Barchart.png)

Tenslotte is er een derde grafiek die de correlatie van de vleesconsumptie en de darmkanker-incidentie weergeeft (zie figuur Scatterplot). Dit word gedaan door een scatterplot weer te geven met op de x-as de vleesconsumptie en op de y-as de darmkanker-incidentie van het betreffende land. Ook de scatterplot staat in connectie met de wereldkaart en de barchart. Bij het selecteren van een land in de wereldkaart wordt namelijk eveneens de stip geselecteerd van het desbetreffende land. Daarnaast is er een wisselwerking tussen de scatterplot en de barchart. Bij selecteren in de ene grafiek ligt hetzelfde land op in de andere. De interactie en variabele die doorgegeven worden staat weergegeven in het figuur Technical design.
![alt tag](https://github.com/linomiltenburg/Programmeerproject/blob/master/doc/Scatterplot.png)

De data voor deze visualisatie is verkregen op de site van de WHO en The Guardian. Hier zijn csv files te downloaden. De url's zijn hier onder weergegeven.

http://www-dep.iarc.fr/WHOdb/WHOdb.htm
http://www.theguardian.com/environment/datablog/2009/sep/02/meat-consumption-per-capita-climate-change

Referentielijst:
barchart with tooltip: http://bl.ocks.org/Caged/6476579
slider datamap: https://github.com/MasterMaps/d3-slider
scatterplot: http://bl.ocks.org/weiglemc/6185069

Copyright (c) 2016 Lino Miltenburg
