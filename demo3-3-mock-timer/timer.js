export default (callback) => {
    setTimeout(()=> {
        callback();
    },2000);
}