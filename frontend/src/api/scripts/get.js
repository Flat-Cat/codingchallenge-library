//__GET_VIEW(ID)________________________________________________________________________________
console.log (location.search) 

let params = (new URL(document.location)).searchParams;
console.log( params.get("id") )

const divTest = document.createElement("div")
    document.body.appendChild(divTest);

const fetchUrl = "/books/" + params.get("id");
//nehme die URL aus dem Browser namens ID und gebe gleich == die zahl 

console.log(fetchUrl)
 fetch (fetchUrl, {
     method: "GET"
 })
 //.then verkettet die obrige aufrufung des objektes.
 .then(responseEntry => {
     return responseEntry.json()})
     //kannst du die daten aus testi in json umwandeln, wenn ja, tue folgendes:
 .then (entry => {

    const header = document.createElement ("h2")
        header.textContent = entry.blogTitle
        divTest.appendChild(header)  

    const body = document.createElement("p")
        body.textContent = entry.blogContent
        divTest.appendChild(body)

    const editButton = document.createElement("button") 
        editButton.textContent = "Edit"      
        editButton.addEventListener(
            "click", event => {
                document.location.href= "/edit?id=" + entry.id
            })
            document.body.appendChild(editButton)
 })
// //__DEL________________________________________________________________________________
// const deleteButton = document.createElement("button") 

// deleteButton.addEventListener(
//     "click", event => {

//     const answer = confirm("Bist du dir sicher?");
// //    console.log(answer);  TRUE OR FALSE

//         if (answer === true){
            
//             fetch ("/blogs/" + params.get("id"), {
//                 method: "DELETE"
//             })
//             .then (() => {
//                 return location.href = "/" ;
// //                return location.reload(); Reloade die vorhandene seite
//             })
//             .catch ((error) => {
//                 return console.log(error);
//             })  
//         } 
// })
//     deleteButton.textContent = "Delete"
// //href = verlinkung zur nächsten seite. also öffne eine neue seite.
//     document.body.appendChild(deleteButton)