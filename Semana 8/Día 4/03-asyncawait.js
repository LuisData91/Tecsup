
const hornear = async () => {
    // return "Torta Horneada"; //resolve
    throw "Torta quemada"; //reject
}


hornear()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
});