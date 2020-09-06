const age = 17;
const isFemale = false;
const driverStatus = 'jaap';

// ======= Age Controle =============
if (age >= 18) {
    console.log('Jij mag naar binnen komen voor een biertje.');
} else {
    console.log('de rest moet allemmaal opzouten');
}


// ======= Gender Controle =============
if (isFemale) {
    console.log('Welcome :-)');
} else {
    console.log('wacht eens ff, jij bent geen vrouw :-(');
}

// ======= Veilig thuis aankomen =============
if (driverStatus === 'bob') {
    console.log('Natuurlijk mag jij rijen knakker :-)');
} else if (driverStatus != 'bob') {
    console.log('Ben je gek geworden, ga maar lopen :-(');
}