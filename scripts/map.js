var mymap = L.map('map').setView([45.1796, 5.74497], 15);
L.tileLayer('//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.fr/copyright-article-13/">OpenStreetMap</a>/',
}).addTo(mymap);

L.marker([45.1796, 5.74497], {title: "MJC"}).addTo(mymap); // Marqueur mjc
L.marker([45.178149, 5.745343], {title: "BUS C5 Saint-Augustin"}).addTo(mymap); // Marqueur C5
L.marker([45.181767, 5.745194], {title: "BUS 12 Jeanne d'arc"}).addTo(mymap); // Marqueur 12
