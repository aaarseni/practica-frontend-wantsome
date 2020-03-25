// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: "tesla",
    wheels: 4,
};
  
  var bestCar = car;
    bestCar.name = "mercedes";
    delete bestCar.name;
  console.log(bestCar);
  
//Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  
  var myRoom = {table:"wood", chiar:"red", window:"big", door:"duble"}
  var myHome =  myRoom;
console.log(myRoom);
    var bigCase = myRoom;
console.log(bigCase.table.toUpperCase ()+ " " + bigCase.chiar.toUpperCase()+ " " + bigCase.window.toUpperCase()+ " " + bigCase.door.toUpperCase());
    var lowerCase = bigCase;
console.log(bigCase.table.toLowerCase()+ " " + bigCase.chiar.toLowerCase()+ " " + bigCase.window.toLowerCase()+ " " + bigCase.door.toLowerCase());
    var result = lowerCase.join();
console.log(result + table.charAt(0).toUpperCase +  " reprezinta parte din proiectul casei mele.")
    //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
  var shoes = {
      color: "blue",
      type:  "running",
        oneMethod: function(){
            console.log(this.color + " is not good for " + this.type);
        }
  };
  shoes.oneMethod();

  
  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  var myTravel = {
      map: "europe",
      reflex: "nikon",
  }
  var mytravel = prepareForTravel;
  prepareForTravel.prototype.shoe = "trekking";
  prepareForTravel.prototype.glasses = "RayBan";
  var departure = new prepareForTravel;

 var myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  var house = {
      bedroom: "bed",
      bath: "mirror",
  };
    var momHouse = house;

    console.log(momHouse.bedroom + " si " + momHouse.bath + "obiectului momHouse");

  //Ex6
  // Avem obiectul : 
  var myObject = {
  name: "Johnn",
  surname: "Applegate",
  };
  myObject.sort(function (a, b){ 
      var firstName = a.name;
      var lastName = b.surname;
      if(firstName > lastName){
          return -1;
      }
      if (firstName > lastName){
          return 1;
      }
  });
  console.log(myObject);

  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
  
  function food(item1, item2, item3){
    this.item1 = item1.toUpperCase; //am 
    this.item2 = item2.toUpperCase;
    this.item3 = item3.toUpperCase;
  }
  
  var lotOfFood = new food('ceafa', 'ceapa', 'dulciuri');
  var lotOfFood1 = new food('carnat', 'cartof', 'biscuite');
  var lotOfFood2 = new food('salam', 'castravete', 'napoletana');
  
  console.log(lotOfFood);
  console.log(lotOfFood1);
  console.log(lotOfFood2);



  //Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var array =['papuci', 'harbuz' , 'ciocolata', 'pepene', 'apa']
var result= array.length;
console.log(result);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur

var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result = array1.concat(array2);
console.log(result);

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var myArray = [2, 3, 4, 65,];
var result = Array.isArray();
console.log(result);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five"  join
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(' ');
console.log(result);

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos   push
var cars = ['Tesla', 'Dacia'];
var myResult= cars.push ('alfa', 'aro');
console.log(myResult);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat. unshift()
var myResult = cars.pop();
console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
var myResult = cars.unshift('Dodge');
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array () reverse
var myResult = cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
var myResult = cars.splice(2,2,'Ferrari', 'Alfa');
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a, b){
  return a-b;
});
console.log(arrayNumbers);
arrayNumbers.reverse(function(a, b){
  return a-b;
});
console.log(arrayNumbers);un


//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort(function(a,b){
  return a.localeCompare(b);
})
console.log(fruitsArray);