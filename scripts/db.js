const menu = [
  { "name": "Bruschetta al Pomodoro","id":"0","amount":"0" , "url": "./assets/img/dishes/brusc.png", "category": "Antipasto", "description": "Geröstetes Brot mit Tomaten, Basilikum und Olivenöl", "price": 6.50 },
  { "name": "Carpaccio di Manzo","id":"1","amount":"0" , "url": "./assets/img/dishes/carpaccio.png", "category": "Antipasto", "description": "Dünn geschnittenes Rindfleisch mit Rucola und Parmesan", "price": 12.90 },
  { "name": "Insalata Caprese","id":"2","amount":"0" , "url": "./assets/img/dishes/insalata.png", "category": "Antipasto", "description": "Tomaten, Mozzarella und Basilikum mit Balsamico", "price": 9.50 },

  { "name": "Spaghetti Carbonara","id":"3","amount":"0" , "url": "./assets/img/dishes/carbonara.png", "category": "Primo", "description": "Pasta mit Guanciale, Pecorino und Ei", "price": 13.90 },
  { "name": "Tagliatelle al Pesto","id":"4","amount":"0" , "url": "./assets/img/dishes/pesto.png", "category": "Primo", "description": "Frische Tagliatelle mit Basilikum-Pesto", "price": 12.50 },
  { "name": "Risotto ai Funghi","id":"5","amount":"0" , "url": "./assets/img/dishes/risotto.png", "category": "Primo", "description": "Cremiges Risotto mit Waldpilzen", "price": 14.90 },
  { "name": "Lasagne alla Bolognese","id":"6","amount":"0" , "url": "./assets/img/dishes/lasagne.png", "category": "Primo", "description": "Klassische Lasagne mit Ragù und Béchamel", "price": 13.50 },

  { "name": "Saltimbocca alla Romana","id":"7","amount":"0" , "url": "./assets/img/dishes/saltimbocca.png", "category": "Secondo", "description": "Kalbfleisch mit Salbei und Prosciutto", "price": 19.90 },
  { "name": "Pollo alla Cacciatora","id":"8","amount":"0" , "url": "./assets/img/dishes/cacciatora.png", "category": "Secondo", "description": "Geschmortes Hähnchen in Tomaten-Wein-Sauce", "price": 17.50 },
  { "name": "Branzino al Forno","id":"9","amount":"0" , "url": "./assets/img/dishes/branzino.png", "category": "Secondo", "description": "Im Ofen gebackener Wolfsbarsch mit Kräutern", "price": 22.90 },
  { "name": "Melanzane alla Parmigiana","id":"10","amount":"0" , "url": "./assets/img/dishes/melanzane.png", "category": "Secondo", "description": "Auberginenauflauf mit Tomaten und Parmesan", "price": 14.50 },

  { "name": "Patate al Rosmarino","id":"11","amount":"0" , "url": "./assets/img/dishes/patate.png", "category": "Contorno", "description": "Rosmarinkartoffeln aus dem Ofen", "price": 5.90 },
  { "name": "Verdure Grigliate","id":"12","amount":"0" , "url": "./assets/img/dishes/verdure.png", "category": "Contorno", "description": "Gegrilltes Gemüse der Saison", "price": 6.90 },

  { "name": "Tiramisu","id":"13","amount":"0" , "url": "./assets/img/dishes/tiramisu.png", "category": "Dolce", "description": "Klassisches Dessert mit Mascarpone und Espresso", "price": 6.50 },
  { "name": "Panna Cotta ai Frutti di Bosco","id":"14","amount":"0" , "url": "./assets/img/dishes/panacotta.png", "category": "Dolce", "description": "Sahnedessert mit Beerensauce", "price": 6.90 },
  { "name": "Cannoli Siciliani","id":"15","amount":"0" , "url": "./assets/img/dishes/cannoli.png", "category": "Dolce", "description": "Knusprige Teigröllchen mit Ricottafüllung", "price": 7.20 }
]
const categories = ["Antipasto", "Primo", "Secondo", "Contorno","Dolce"]

let basketData= [];