document.getElementById("startbutton").addEventListener("click",function test(){
    
    function wrong(){
        clearInterval(startCountdown);
        window.alert("Wrong! -10secs, try again");

        time= time-10

        timer()

        startCountdown=setInterval(timer,1000);
        }

        //this function clones the buttons. As a side effect, it removes the listeners. Since remove event listener wasn't working....
        function clearbuttons(){

        var button1old = document.getElementById("button1");
        var button1new = document.getElementById("button1").cloneNode(true);
        button1old.parentNode.replaceChild(button1new, button1old);
    
        var button2old = document.getElementById("button2");
        var button2new = document.getElementById("button2").cloneNode(true);
        button2old.parentNode.replaceChild(button2new, button2old);
    
        var button3old = document.getElementById("button3");
        var button3new = document.getElementById("button3").cloneNode(true);
        button3old.parentNode.replaceChild(button3new, button3old);
    
        var button4old = document.getElementById("button4");
        var button4new = document.getElementById("button4").cloneNode(true);
        button4old.parentNode.replaceChild(button4new, button4old);
    
        }
    

    function gameover(){

        clearInterval(startCountdown);

        score = time *1000

        //post game over message
        document.getElementById("time").setAttribute("class","gameover")
        document.getElementById("time").textContent= "Game Over"
        document.getElementById("time").style.color = "var(--primarycolor)"

        var initials =window.prompt("Good job please enter your initials")

        var myInitials = window.localStorage.setItem('initials',initials)
        var myScore = window.localStorage.setItem('score',score)

        myInitials
        myScore

        document.getElementById("question").style.visibility ="hidden"

        //remove buttons
        
        var killstartbutton1 =document.getElementById("button1");

        killstartbutton1.parentNode.removeChild(killstartbutton1);

        var killstartbutton2 =document.getElementById("button2");

        killstartbutton2.parentNode.removeChild(killstartbutton2);

        var killstartbutton3 =document.getElementById("button3");

        killstartbutton3.parentNode.removeChild(killstartbutton3);

        var killstartbutton4 =document.getElementById("button4");

        killstartbutton4.parentNode.removeChild(killstartbutton4);

        //create startbutton

        var buttondiv =document.getElementById("buttons");

        var createButtonstart = document.createElement("BUTTON");

        createButtonstart.id ="startbutton";
            
        var writeStartbutton =document.createTextNode('Try Again?');
            
        createButtonstart.appendChild(writeStartbutton);
            
        buttondiv.appendChild(createButtonstart);

        document.getElementById("startbutton").addEventListener("click", function(){
            test()
        });
        
    }



    //My timer function
    var time =60
    var timer =function(){
        var changetime =document.getElementById("time")//plug it into the HTML
            changetime.textContent = time
            time--;

            
             if (time === -2){
                 gameover()

              } 
    }

    var startCountdown =setInterval(timer,1000);// starts the countdown  

    //end of my timer function

    //variables for buttons

    var button1 = document.getElementById("button1")
    var button2 = document.getElementById("button2")
    var button3 = document.getElementById("button3")
    var button4 = document.getElementById("button4")
     
    

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

    

    // create question buttons


    //question7

    function question7(){

        clearbuttons()

        var question = document.getElementById("question");
        var q2 =question.innerHTML ="For Variable X, How would I show an increment to X ?"

        document.getElementById("button1").textContent = "X--";
        document.getElementById("button2").textContent = "X++";
        document.getElementById("button3").textContent = "X=X+X";
        document.getElementById("button4").textContent = "X=+X"

        document.getElementById("button1").addEventListener("click", function(){
            wrong()
         }); 
 
        document.getElementById("button2").addEventListener("click", function(){
            gameover()
        });

        document.getElementById("button3").addEventListener("click", function(){
            wrong()
        });
        
        document.getElementById("button4").addEventListener("click", function(){
            wrong()
        });

        
        
    }

    //question6

    function question6(){

        clearbuttons()

        var question = document.getElementById("question");
        var q2 =question.innerHTML ="What does the function 'slice()' do?"

        document.getElementById("button1").textContent = "Removes a selected position in an array";
        document.getElementById("button2").textContent = "Cuts out a function from a sheet";
        document.getElementById("button3").textContent = "Stops Event Bubbling";
        document.getElementById("button4").textContent = "Removes a variable";

        document.getElementById("button1").addEventListener("click", function(){
            question7()
         }); 
 
        document.getElementById("button2").addEventListener("click", function(){
            wrong()
        });

        document.getElementById("button3").addEventListener("click", function(){
            question6()
        });
        
        document.getElementById("button4").addEventListener("click", function(){
            wrong()
        });

    }


    //question5
    function question5(){

        clearbuttons()


        var question = document.getElementById("question");
        var q2 =question.innerHTML ='In the bubbling, what is the deepest nested event referred as?'

        document.getElementById("button1").textContent = "Event";
        document.getElementById("button2").textContent = "The DOM";
        document.getElementById("button3").textContent = "Target";
        document.getElementById("button4").textContent = "Event Listener ";

        document.getElementById("button1").addEventListener("click", function(){
            wrong()
         }); 
 
 
         document.getElementById("button2").addEventListener("click", function(){
             wrong()
         });
 
         document.getElementById("button3").addEventListener("click", function(){
             question6()
         });
         
         document.getElementById("button4").addEventListener("click", function(){
             wrong()
         });

    }



    //question4

    function question4(){
        
        clearbuttons()

        var question = document.getElementById("question");
        var q2 =question.innerHTML ='What is the minimum amount of arguments "window.localstorage()" will hold?'

        document.getElementById("button1").textContent = "1";
        document.getElementById("button2").textContent = "2";
        document.getElementById("button3").textContent = "3";
        document.getElementById("button4").textContent = "It doesn't need any ";

        document.getElementById("button1").addEventListener("click", function(){
            wrong()
         }); 
 
 
         document.getElementById("button2").addEventListener("click", function(){
             question5()
         });
 
         document.getElementById("button3").addEventListener("click", function(){
             wrong()
         });
         
         document.getElementById("button4").addEventListener("click", function(){
             wrong()
         });

    }

   //question3

   function question3(){

       clearbuttons()

       var question = document.getElementById("question");
        var q2 =question.innerHTML ='"For" and "While" are considered?'

        document.getElementById("button1").textContent = "Arrays";
        document.getElementById("button2").textContent = "Functions";
        document.getElementById("button3").textContent = "Reassignments";
        document.getElementById("button4").textContent = "Loops";

        document.getElementById("button1").addEventListener("click", function(){
            wrong()
         }); 
 
 
         document.getElementById("button2").addEventListener("click", function(){
             wrong()
         });
 
         document.getElementById("button3").addEventListener("click", function(){
             wrong()
         });
         
         document.getElementById("button4").addEventListener("click", function(){
             question4()
         });


     }



    //question2
    function question2(){

        clearbuttons()
    
        var question = document.getElementById("question")
        var q2 =question.innerHTML ='What does the Push() Function do?';
    
        document.getElementById("button1").textContent = "Pushes content into an array";
        document.getElementById("button2").textContent = "It removes data from an array";
        document.getElementById("button3").textContent = "Pushes a string into an integer";
        document.getElementById("button4").textContent = "removes [i] in for(i=0; i<25);";

        document.getElementById("button1").addEventListener("click", function(){
           question3()
        }); 


        document.getElementById("button2").addEventListener("click", function(){
            wrong()
        });

        document.getElementById("button3").addEventListener("click", function(){
            wrong()
        });
        
        document.getElementById("button4").addEventListener("click", function(){
            wrong()
        });



    }



    //this function clones the buttons. As a side effect, it removes the listeners. Since remove event listener wasn't working....
    function clearbuttons(){

    var button1old = document.getElementById("button1");
    var button1new = document.getElementById("button1").cloneNode(true);
    button1old.parentNode.replaceChild(button1new, button1old);

    var button2old = document.getElementById("button2");
    var button2new = document.getElementById("button2").cloneNode(true);
    button2old.parentNode.replaceChild(button2new, button2old);

    var button3old = document.getElementById("button3");
    var button3new = document.getElementById("button3").cloneNode(true);
    button3old.parentNode.replaceChild(button3new, button3old);

    var button4old = document.getElementById("button4");
    var button4new = document.getElementById("button4").cloneNode(true);
    button4old.parentNode.replaceChild(button4new, button4old);

    }

    //question1
    function question1(){

        createbuttons()

        document.getElementById("question").style.visibility ="visible"
        document.getElementById("time").removeAttribute("class","gameover")
        document.getElementById("time").textContent= time
        document.getElementById("time").style.color = "var(--secondarycolor)"


        function wrong(){
            clearInterval(startCountdown);
            window.alert("Wrong! -10secs, try again");
    
            time= time-9
    
            timer()
    
            startCountdown=setInterval(timer,1000);
        }

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
 









