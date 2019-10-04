export function add (a, b) {
    return a + b ;
}
export function add1 (a, b) {
    return a + b + 1 ;
}

export function minus(a,b) {
    return a - b;
}
export function multi (a, b) {
    return a * b;
}

try {
    module.exports = {
        add,
        minus,
        multi
    }
} catch(e) {
    
}
