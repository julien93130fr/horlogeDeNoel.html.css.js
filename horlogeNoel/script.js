// tuto horloge JS

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector ('.date');

var affichageHeure = function(){
    // déclarer les variables qui vont etre utilisés

   var today, 
        annee,
        listeMois,
        mois,
        listeJours,
        jourNumero,
        jourNom,
        heures,
        minutes,
        secondes,
        deuxChiffres

        //récuper la date du jour 
        today =  new Date();

        //récupere l'année
        annee = today.getFullYear()

        //récuperer le mois 
        listeMois =  ["Janvier", "Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre" ] 
        
        //getMonth()donne l ' index
        mois  = listeMois[today.getMonth()] ;

        //récupérer le jour du mois 
        jourNumero = today.getDate();

        //récuper les jours 
        listeJours =  ["Dimanche","Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi", ] 

            jourNom = listeJours[today.getDay()]

            //afficher les heures , minutes ,secondes avec 2 chiffres
            deuxChiffres = function(element){
                if(element<10){
                    return element = "0" + element;
                
                }else{
                    return element
                
                } 
            }           


        //récuperer les heures 
        heures = deuxChiffres(today.getHours());

        //récuper les minutes
        minutes = deuxChiffres(today.getMinutes());

        //récuperer les secondes 
        secondes = deuxChiffres(today.getSeconds());

        //affichage de la div du HTML
        heuresDiv.textContent = heures + ":"  + minutes + ":" + secondes;
        dateDiv.textContent = jourNom + "  " + jourNumero + " " +  mois  + "  " + annee;

            // lancer la fonction allumage de l horlorge
            setTimeout(affichageHeure, 1000);


    }    
    
    
    affichageHeure()