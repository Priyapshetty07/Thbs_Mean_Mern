//es 5 
function Numbers(p1, p2, p3, p4, p5) {

    console.log(`
    P1 = ${p1}
    P2 = ${p2}
    P3 = ${p3}
    P4 = ${p4}
    P5 = ${p5}
    `);

    if (p4 == undefined) {
        p4 = 4;
    }

    if (p5 == undefined) {
        p5 = 5;
    }
    console.log(`
    P1 = ${p1}
    P2 = ${p2}
    P3 = ${p3}
    P4 = ${p4}
    P5 = ${p5}
    `);
    return p1 + p2 + p3 + p4 + p5;
}
Numbers(1, 2, 3);

//es6

 function numbersES6(p1, p2, p3, p4 = 6, p5 = 7) {

    console.log(`
    P1 = ${p1}
    P2 = ${p2}
    P3 = ${p3}
    P4 = ${p4}
    P5 = ${p5}
    `);
return p1 + p2 + p3 + p4 + p5;
}
numbersES6(1, 2, 3, 4, 5);


