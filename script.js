$(".d4-n").text(1);
// let test = $(".d4-n").text();
// console.log(test);
// let testNumber = parseInt(test);
// console.log(testNumber);
// $(".d4-n").text(testNumber);
// console.log($(".d4-n").text())

$(".up").click(function() {
    let testNumber = parseInt($(".d4-n").text());
    testNumber++;
    $(".d4-n").text(testNumber);
})

$(".down").click(function() {
    let testNumber = parseInt($(".d4-n").text());
    if (testNumber === 1) {
        return;
    }
    testNumber--;
    $(".d4-n").text(testNumber);
})

$(".roll").click(function() {
    let numberOfDice = parseInt($(".d4-n").text());
    let result = 0;
    for (let i = 0; i < numberOfDice; i++) {
        let math = Math.floor(Math.random() * 4) + 1;
        result += math;
    }
    $(".display").text(result);
})