
function handlePositives(e) {
    let input = document.getElementById("challenge1").value;

    let res = input.split(" ").map(function (item) {
        return parseFloat(item);
    });

    let final = positives(res);
    document.getElementById("output1").innerHTML = final;
}
function handleMerge(e) {
    let input1 = document.getElementById("challenge2-1").value;
    let input2 = document.getElementById("challenge2-2").value;

    let res1 = input1.split(" ");
    let res2 = input2.split(" ");

    let final = mergeArrays(arr1, arr2);
    document.getElementById("output2").innerHTML = final;
}
function handleObjectCheck(e) {
    let input1 = document.getElementById("challenge3-1").value; // {"hello":"heelll","test" : "teeest"}
    let input2 = document.getElementById("challenge3-2").value; // hello
    let input3 = document.getElementById("challenge3-3").value;

    obj = JSON.parse(input1);
    console.log(obj);
    if (input2 in obj) result = "Found!";
    else result = "Not Found !";

    document.getElementById("output3").innerHTML = result;
}
function handleTypeCheck(e) {
    let input1 = document.getElementById("challenge4-1").value;

    try {
        obj = JSON.parse(input1);
        if (Array.isArray(obj)) result = "Array !";
        else result = "Not Array !";
    } catch (error) {
        result = "Not Array !";
    }

    document.getElementById("output4").innerHTML = result;
}

function positives(arr) {
    return arr.filter((item) => { return item > 0 });
}
function mergeArrays(arr, arr2) {
    return arr.concat(arr2);
} 
