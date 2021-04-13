// odd - even reporter
for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is een even getal');
    } else {
        console.log(i + ' is een oneven getal');
    }
}

// tafeltjes
for (i = 1; i <= 10; i++) {
    console.log ("tafeltje van " + i);
    for (j = 1; j <= 10; j++) {
        console.log (j + "x" + i + " = "+ j*i );
    }
}

// the grade assigner
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

for (i = 60; i <=100 ; i++) {
    console.log('Voor '+i+ ' punten krijg je een ' + assignGrade(i));
}