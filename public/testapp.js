document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);

    //////for checking firebase connectionabove console


    ///DB connection
    const db = firebase.firestore();
    const post = db.collection("user").doc("hPH8pKkEO1AER27ifddB");

    const ref = db.collection("user");
    const query = ref.where("name", "==", "vv");

    query.get().then(doc => {
        doc.forEach(doc => {
            data = doc.data()
            document.write(data.name)
        })
    })





});



function googlelogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write('hello' + user.displayName);
            console.log(user);
        })
        .catch(console.log);

}