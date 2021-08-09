let answer = [1, 4, 4, 3, 1, 3, 5, 1, 4, 1, 3, 4, "simplicity", "kindness", "valuable", "expextation"]; /*INPUT ANSWER IN ARRAY*/


/*DON'T TOUCH*/
function check() {
    let input = document.getElementsByName('array[]');
    let k = [];
    for (let i = 0; i < input.length; i++) {
        let a = input[i];
        k[i] = a.value;
    }
    
    let right = 0;
    let mistake = 0;
    for (let i = 0; i < answer.length; i++) {
        (answer[i] == k[i]) ? right++ : mistake++;
    }

    document.getElementById("result").innerHTML = "Result";
    document.getElementById("right").innerHTML = "right: " + right;
    document.getElementById("mistake").innerHTML = "mistake: " + mistake;
}



let flag = false;



function mode() {
    if (flag == true) { /*light*/
        document.getElementById("main").style.backgroundColor ="#f0efe0";

        document.body.style.backgroundColor = "#FFFFFF";
        document.getElementById("nav").style.backgroundColor = "#FFFFFF";

        let x = document.getElementById("main");
        let y = x.getElementsByClassName("text");
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = "#0D1117";
        }

        document.getElementById("mode").innerText = "Dark";
        document.getElementById("mode").style.backgroundColor = "#0D1117";
        document.getElementById("mode").style.color = "#f0efe0";

        document.getElementById("submit").style.backgroundColor = "#0D1117";
        document.getElementById("submit").style.color = "#f0efe0";

        flag = false;

    } else { /*dark*/
        document.getElementById("main").style.backgroundColor ="#0D1117";

        document.body.style.backgroundColor = "#27282C";
        document.getElementById("nav").style.backgroundColor = "#27282C";

        let x = document.getElementById("main");
        let y = x.getElementsByClassName("text");
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = "#f0efe0";
        }

        document.getElementById("mode").innerText = "Light";
        document.getElementById("mode").style.backgroundColor = "#f0efe0";
        document.getElementById("mode").style.color = "#27282C";

        document.getElementById("submit").style.backgroundColor = "#f0efe0";
        document.getElementById("submit").style.color = "#0D1117";

        flag = true;
    }
}