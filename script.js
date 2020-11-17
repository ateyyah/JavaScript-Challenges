
function handlePositives(e){
    let input = document.getElementById("challenge1").value;

    let res = input.split(" ").map(function(item) {
        return parseFloat(item);
    });
    
    let final = positives(res);
    document.getElementById("output").innerHTML = final;
}

function positives(arr) {
    return arr.filter((item) => {  return item > 0 });
} 
