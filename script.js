
var c=0;
function incre()
{
    c++;
    document.getElementById("count").textContent=c;
    document.getElementById("even-odd").textContent=even_odd(c);
    

}
function decre()
{ 
    c--;
    document.getElementById("count").textContent=c;
    document.getElementById("even-odd").textContent=even_odd(c);
  
}
function reset()
{
    document.getElementById("count").textContent=0;
}
function even_odd(input_number)
{
    var return_value="";
    if (Number(input_number)%2==0)
    {
        return_value="even";
    }
    else
    {
        return_value="odd";
    }
    
    return return_value;
}
