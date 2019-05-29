
function tableau2()
{

var array  =[["Basic handling fee",Handling],
         ["Concession fee",Concession],
          ["Basic Supervision fee" , Supervision],
["G P U use " ," €100.00/ Hour"],

    ["Supervision fee", Supervision]],


table = document.getElementById("table2");

for (var i=1; i<array.length;i++)
{ var newRow=table .insertRow(table .length);
for(var j=0;j<table .rows[i].cells.length;j++)
{table .rows[i].cells[j].innerHTML=array[i-1][j];}}



}




 
    function displayquote() {
       
            document.getElementById('quote').style.visibility = 'visible';
     
    }




function tableau()
{




var array  =[["Landing",  "Per movement", Landing],
         ["Parking",  "Per day",Parking],
          ["Approach" , "Per movement",Approach],
          ["Lighting" , "Per use",Lighting],
        ["Pax Tax (Dest: Europe & Africa)" , "Per pap",paxeu]  ,
       ["Pax Tax (Dest: America & M.East)" , "Per pap",paxus]  ,
  ["Lighting", "if used",Lighting]],


table= document.getElementById("table");



for (var i=1; i<array.length;i++)
{ var newRow=table.insertRow(table.length);
for(var j=0;j<table.rows[i].cells.length;j++)
{table.rows[i].cells[j].innerHTML=array[i-1][j];}}



}





