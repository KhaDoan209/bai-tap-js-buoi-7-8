var numberArray = new Array();
var notiAll = document.querySelectorAll(".noti");

for(i = 0; i < notiAll.length; i++){
    notiAll[i].classList = " alert alert-success col-12 mt-3 text-wrap";
    notiAll[i].innerHTML ="👉"
}

function addToArray(){
    var number = document.querySelector("#number").value;
    var noti = document.querySelector("#noti");
    
    if (number == "") {
        noti.classList = "alert alert-danger col-12 mt-3 text-wrap";
        noti.innerHTML = "Vui lòng nhập dữ liệu"
    }
    else{
        numberArray.push(Number(number));
        noti.classList = "alert alert-success col-12 mt-3 text-wrap";
        noti.innerHTML = "👉" + numberArray;
    
    } 
}

function sortArray(array){
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) { 
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }  
}
return array;
}

// Bài tập 1

function totalCount(){
    let sum = 0;
    let noti = document.querySelector("#noti-bai-1");
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i] > 0) {
            sum += numberArray[i];
        }
    } 
    noti.innerHTML = "👉 Tổng là: "+sum;
}


// Bài tập 2

function countPositiveNumb(){
    let count = 0;
    let noti = document.querySelector("#noti-bai-2");
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i]>0) {
            count++;
        }
    } 
    noti.innerHTML = "👉 Có "+ count + " số dương";
}

// Bài tập 3

function findTheSmallestNumber(){
    let noti = document.querySelector("#noti-bai-3");
    let smallest = numberArray[0];
    let minIndex = 0;
    for (let i = 1; i < numberArray.length; ++i) {
        if (smallest > numberArray[i]) { 
            smallest = numberArray[i];
            minIndex = i;
        }
    }
    noti.innerHTML = "👉 Số nhỏ nhất là " + smallest;
}


// Bài tập 4 

function findTheSmallestPositiveNumber(){
    let notFound = true;
    let noti = document.querySelector("#noti-bai-4");

    sortArray(numberArray);
    for(let i = 0; i < numberArray.length; i ++){
        if(numberArray[i] > 0){
            var smallestPositive = numberArray[i];
            noti.innerHTML = "👉 Số dương nhỏ nhất là " + smallestPositive;
            notFound = false;
            break;
        }
        else
            continue
    }
    if(notFound) noti.innerHTML = "👉 Không tìm thấy"
    

}


// Bài tập 5
function findTheLastPositiveNumber(){
    let lastPositiveExisted = false;
    let noti = document.querySelector("#noti-bai-5");
    sortArray(numberArray);
    for(let i = numberArray.length-1;i > 0; i--){
        if(numberArray[i]%2 == 0){ 
            noti.innerHTML="👉 Số chẵn nhỏ nhất là: " + numberArray[i];
            lastPositiveExisted = true;
            break;
        }
        else continue;
        
    }
    if(!lastPositiveExisted) noti.innerHTML="👉 Không tìm thấy";
}

// Bài tập 6

function swapPosition() {
    var number_1 = document.querySelector("#place-1").value;
    var number_2 = document.querySelector("#place-2").value;
    var noti = document.querySelector("#noti-bai-6");
    let canSwap = false;
    if (number_1 == "" || number_2 == "")
         noti.innerHTML = "👉 Vui lòng nhập vị trí của hai số muốn đổi";
    else if ((number_1 < numberArray.length)  && (number_2 < numberArray.length)) {
        let temp = numberArray[number_1]
        numberArray[number_1] = numberArray[number_2];
        numberArray[number_2] = temp;
        canSwap = true;
        noti.innerHTML = "👉 Vị trí mới: " + numberArray
    }
    else if(!canSwap) noti.innerHTML = "👉 Không thể đổi chỗ, vui lòng kiểm tra lại vị trí của " + number_1 + " và "+ number_2;
}

// Bài tập 7 
function arrangeArray(){
    var noti = document.querySelector("#noti-bai-7");
    sortArray(numberArray);
    noti.innerHTML = "👉 Mảng đã sắp xếp: " + numberArray;

}

// Bài tập 8

function findPrimeNumber(){
    var noti = document.querySelector("#noti-bai-8");
    for(let i = 0; i < numberArray.length; i++){
        if (isPrime(numberArray[i])) {
            noti.innerHTML = "👉 Số nguyên tố đầu tiên là " + numberArray[i];
           break;
        } 
        else
         noti.innerHTML = "👉 Không có số nguyên tố trong mảng";
    } 
}

function isPrime(number) {
    if (number < 2) return false;
  
    for (var i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
  
    return true;
  }

  // Bài tập 9

function countInteger(){
    var noti = document.querySelector("#noti-bai-9");
    var count = 0;
    for (let i = 0; i < numberArray.length; i++) {
            if (Number.isInteger(numberArray[i])) {
                count++;
            }
    }
    noti.innerHTML = "👉 Có " + count + " số nguyên trong mảng";
}

// Bài tập 10 

function compareNumber(){
    var noti = document.querySelector("#noti-bai-10");
    var positive = 0;
    var negative = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i]>0) 
            positive++;
        
        else if (numberArray[i]<0)
            negative++;

        else 
            continue;        
    }

    if (positive > negative) 
        noti.innerHTML = "👉 Số dương nhiều hơn số âm";
    else
        noti.innerHTML = "👉 Số âm nhiều hơn số dương";
}