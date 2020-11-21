document.getElementById("startbutton").addEventListener("click",function test(){
    
    //My timer function
    var time =60
    var timer =function(){
        var changetime =document.getElementById("time")//plug it into the HTML
            changetime.textContent = time
            time--;

            
             //if (time === 0){// game over rule
                // } 
    }

    var startCountdown =setInterval(timer,1000);// starts the countdown  

    //end of my timer function

    //variables for buttons

    var button1 = document.getElementById("button1")
    var button2 = document.getElementById("button2")
    var button3 = document.getElementById("button3")
    var button4 = document.getElementById("button4")
     
    function wrong(){
        clearInterval(startCountdown);
        window.alert("Wrong! -10secs, try again");

        time= time-9

        timer()

        startCountdown=setInterval(timer,1000);
    }

    //creating buttons             
    function createbuttons(){

        //get rid of the startbutton....
        var killstartbutton =document.getElementById("startbutton");

        killstartbutton.parentNode.removeChild(killstartbutton);

        //button1
        var buttonboard =document.getElementById("buttons");
            
        var createbutton1 = document.createElement("BUTTON");

        createbutton1.id ="button1";
            
        var writebutton1 =document.createTextNode('Quotations ""');
            
        createbutton1.appendChild(writebutton1);
            
        buttonboard.appendChild(createbutton1);

        //button2
        var createbutton2 = document.createElement("BUTTON");

        createbutton2.id ="button2";

        var writebutton2 =document.createTextNode('Parentheses ()');

        createbutton2.appendChild(writebutton2);

        buttonboard.appendChild(createbutton2);

        //button3
        var createbutton3 = document.createElement("BUTTON");

        createbutton3.id ="button3";

        var writebutton3 =document.createTextNode('Brackets {');

        createbutton3.appendChild(writebutton3);

        buttonboard.appendChild(createbutton3);

        //button4
        var createbutton4 = document.createElement("BUTTON");

        createbutton4.id ="button4";

        var writebutton4 =document.createTextNode('Underscore _');

        createbutton4.appendChild(writebutton4);

        buttonboard.appendChild(createbutton4);



    }

    

    


    //End of my function list

    

    createbuttons()// create question buttons

    //question2

    function question2(){

        var question = document.getElementById("question")
        var q2 =question.innerHTML ='The push() function does what?'

    }


    //question1
    function question1(){

        var question = document.getElementById("question")

        var q1 =question.innerHTML ='What symbol holds the conditions in an "if" statement?'

    
        document.getElementById("button1").addEventListener("click", function(){
            wrong()
        });

        document.getElementById("button2").addEventListener("click", function(){
            question2()
        });

        document.getElementById("button3").addEventListener("click", function(){
            wrong()
        });
        
        document.getElementById("button4").addEventListener("click", function(){
            wrong()
        });


    }

question1()

});
 









