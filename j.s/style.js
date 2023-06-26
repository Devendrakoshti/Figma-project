test = setInterval("count()", .00000001);

test1 = setInterval("count1()", 10);

test2 = setInterval("count2()", 10);
test3 = setInterval("count3()", 10);

set = document.querySelector('#count');

set1 = document.querySelector('#count1');

set2 = document.querySelector('#count2');
set3 = document.querySelector('#count3');

x = 0;
y = 0;
a = 0;
b = 0;

function count() {
    set.innerHTML = ++x;
    if (x == 5000) {
        clearInterval(test);
    }
}

function count1() {
    set1.innerHTML = ++y;
    if (y == 98) {
        clearInterval(test1);
    }
}

function count2() {
    set2.innerHTML = ++a;
    if (a == 123) {
        clearInterval(test2);
    }
}

function count3() {
    set3.innerHTML = ++b;
    if (b == 200) {
        clearInterval(test3);
    }
}