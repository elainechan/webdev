function shuffle(arr) {
    console.log(`shuffle() was called`);  
    var currentIndex = arr.length, 
        temporaryValue, 
        randomIndex ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}

function nakedValues(arrayOfObjects, zeroOrOne) {
    console.log(`nakedValues() was called`);
    var twoDArray = arrayOfObjects.map( (entry, i) => {
        return Object.values(arrayOfObjects[i]);
    });
    var oneDArray = twoDArray.map(entry => {
        return entry[zeroOrOne];
    });
    return oneDArray;
}

function getImgURL(str) { // takes filename as input and returns full URL
    console.log(`getImgURL() was called`)
    let root = `https://github.com/elainechan/webdev/blob/master/quiz/`;
    let file = str.replace(/^[.(?=/)]/, root); // replace dot with url root
    let url = file.concat(`?raw=true`); // concat url with retrieve code
    return url;
}