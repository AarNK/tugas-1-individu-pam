let no = [1,2,3,4,5,6,7,8,9,10]
let nama = ["bagas","budi","rudi","udin","lesti","billar","kaisar","Doni","rispo","noah"]
let nim = [231, 232, 234, 235, 236, 237, 238, 239, 240, 241, 242]
let nilai = [50, 60, 70, 80, 90, 40, 30 ,20, 10, 100]

for(var i = 0; i <= 9; i++){
    document.write("<td>"+ no[i] + "</td>");
    document.write("<td>"+ nama[i] + "</td>");
    document.write("<td>"+ nim[i] + "</td>");
    document.write("<td>"+ nilai[i] + "</td>");
    
    if(nilai[i] >= 80 ){
        document.write("<td>A</td>");
    }else if(nilai[i] >= 70 && nilai[i] < 80  ){
        document.write("<td>AB</td>");
    }else if(nilai[i] >= 60 && nilai[i] < 70  ){
        document.write("<td>B</td>");
    }else if(nilai[i] >= 50 && nilai[i] < 60  ){
        document.write("<td>BC</td>");
    }else if(nilai[i] >= 40 && nilai[i] < 50  ){
        document.write("<td>C</td>");
    }else if(nilai[i] >= 10 && nilai[i] < 40  ){
        document.write("<td>D</td>");
    }else{
        document.write("<td>E</td>");
    }
    document.write("<tr></tr>")
}