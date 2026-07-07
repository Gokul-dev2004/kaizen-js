function login(){
    let name = document.getElementById("name").value
    let pwd = document.getElementById("pwd").value

    if(name == "Gokul" || name == "gokul" || name == "GOKUL"){
        document.getElementById("us").innerHTML = "&nbsp;"
        
        if(pwd == "abc@123"){
            document.getElementById("ps").innerHTML = "&nbsp;"
            window.location.href = "./page.html"
        }
        else{
            document.getElementById("ps").innerHTML = "In-correct password"
        }
    }
    else{
        document.getElementById("us").innerHTML = "In-valid user"
        document.getElementById("ps").innerHTML = "&nbsp;"
    }
}