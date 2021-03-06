function handlePositives(e) {
    let result;
    try {
        let input = document.getElementById("challenge1").value;

        let res = input.split(" ").map(function (item) {
            return parseFloat(item);
        });

        result = positives(res);
    } catch (error) {
        result = "Unexpected Input";
    }
    document.getElementById("output1").innerHTML = result;
}
function handleMerge(e) {
    let result;
    try {
        let input1 = document.getElementById("challenge2-1").value;
        let input2 = document.getElementById("challenge2-2").value;

        let res1 = input1.split(" ");
        let res2 = input2.split(" ");

        result = mergeArrays(res1, res2);
    } catch (error) {
        result = "Unexpected Input";
    }

    document.getElementById("output2").innerHTML = result;
}
function handleObjectCheck(e) {
    let result;
    try {
        let input1 = document.getElementById("challenge3-1").value; // {"hello":"heelll","test" : "teeest"}
        let input2 = document.getElementById("challenge3-2").value; // hello
        let input3 = document.getElementById("challenge3-3").value;

        obj = JSON.parse(input1);
        if (input2 in obj) result = "Found!";
        else result = "Not Found !";
    } catch (error) {
        result = "Unexpected Input : Enter A Valid Object !";
    }

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
function handleCapitalizeFirst(e) {
    let n;
    try {
        let input1 = document.getElementById("challenge5-1").value;

        n = input1.split(" ").map((caps) => {
            return caps.charAt(0).toUpperCase() + caps.slice(1);
        }).join(' ');
    } catch (error) {
        result = "Unexpected Input";
    }

    document.getElementById("output5").innerHTML = n;
}

function handleBubbleSort(e) {
    try {
        let input1 = document.getElementById("challenge6-1").value;
        let obj = JSON.parse(input1);

        let bubbleSort = (inputArr) => {
            let len = inputArr.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (inputArr[j] > inputArr[j + 1]) {
                        let tmp = inputArr[j];
                        inputArr[j] = inputArr[j + 1];
                        inputArr[j + 1] = tmp;
                    }
                }
            }
            return inputArr;
        };

        if (!Array.isArray(obj)) result = "Please enter an array";
        else {
            result = bubbleSort(obj);
        }
    } catch (error) {
        result = "Unexpected Input : Enter A Valid Object !";
    }

    document.getElementById("output6").innerHTML = result;

}

function positives(arr) {
    return arr.filter((item) => { return item > 0 });
}
function mergeArrays(arr, arr2) {
    return arr.concat(arr2);
} 
