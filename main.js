var lineCounters = [0, 0, 0, 0, 0, 0];
var firstLine = "public static void main(String [] args){";
var secondLine = 'System.out.println("Welcome to Marwan Al Khasawnehs portfolio!!");';
var thirdLine = "}";
var fourthLine = "public boolean isQualified(){"
var fifthLine = "return true;";
var sixthLine = "}";
var speed = 50; 

function code(){
    if(lineCounters[0] < firstLine.length){
        document.getElementById("upper-code").innerHTML += firstLine.charAt(lineCounters[0]);
        lineCounters[0]++;
    }

    if(lineCounters[0] == firstLine.length && lineCounters[1] < secondLine.length){
        document.getElementById("upper-code-second-line").innerHTML += secondLine.charAt(lineCounters[1]);
        lineCounters[1]++;
    }

    if(lineCounters[0] == firstLine.length &&
        lineCounters[1] == secondLine.length &&
        lineCounters[2] < 1){
            document.getElementById("upper-code-third-line").innerHTML += thirdLine;
            lineCounters[2]++;
        }

    if(lineCounters[3] < fourthLine.length){
        document.getElementById("lower-code").innerHTML += fourthLine.charAt(lineCounters[3]);
        lineCounters[3]++;
    }

    if(lineCounters[3] == fourthLine.length && lineCounters[4] < fifthLine.length){
        document.getElementById("lower-code-second-line").innerHTML += fifthLine.charAt(lineCounters[4]);
        lineCounters[4]++;
    }

    if(lineCounters[3] == fourthLine.length &&
        lineCounters[4] == fifthLine.length &&
        lineCounters[5] < 1){
            document.getElementById("lower-code-third-line").innerHTML += thirdLine;
            lineCounters[5]++;
        }

    setTimeout(code, speed); 
}


window.onload = code;