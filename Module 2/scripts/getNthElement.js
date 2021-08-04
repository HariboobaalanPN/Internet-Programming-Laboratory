function getNthElement()
{
    var input=document.getElementById("inputstr").value;
    var k=document.getElementById("Nvalue").value;
    var intArray=input.toString().split(" ").map(x => parseInt(x));
    intArray.sort((a, b) => a - b);
    const set=new Set(intArray);
    var uniqueArray=Array.from(set);
    if(k>uniqueArray.length)
    {
        alert("Not Sufficient array elements");
    }
    else{
        alert("The "+k+"th largest element from the unsorted array is "+uniqueArray[uniqueArray.length-k]);
        return false;
    }
}