function add (a, b) {
    return a + b ;
}


function minus(a,b) {
    return a - b;
}
function multi (a, b) {
    a * b;
}

try {
    module.exports = {
        add,
        minus,
        multi
    }
} catch(e) {
    
}
