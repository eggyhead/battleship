const { firestore } = require('../../fire')
/*create
-user sign up
-user sign-in
-user start NEW game
    -num players
-user add opponent

*/

export const userSignUp = (userInfoObj) => {
    if (userInfoObj[email] && userInfoObj[password]) {
        firestore.collection("users").add(userInfoObj)
        .then((user) => `Successfully added ${user.id}`)
    } else {
        console.error('Please enter a valid email and password')
    }  
}

/*read
-user get current game
-user get next card

*/

/*update
-user play next card
*/

/*delete
*/


/**
 * constructor(props) {
        super(props) 
        this.state = {
            cities: []
        }
        this.getSFData = this.getSFData.bind(this)
        //this.handleCityChange = this.handleCityChange.bind(this)
        this.addCity = this.addCity.bind(this)
        this.deleteCity = this.deleteCity.bind(this)
        this.addRating = this.addRating.bind(this)
        this.clickMe = this.clickMe.bind(this)
    }

    componentDidMount() {
        var citiesRef = firestore.collection("cities");
        var restaurantRef = firestore.collection("restaurants");

        citiesRef.doc("SF").set({
            name: "San Francisco", state: "CA", country: "USA",
            capital: false, population: 860000 })
        citiesRef.doc("LA").set({
            name: "Los Angeles", state: "CA", country: "USA",
            capital: false, population: 3900000 });
        citiesRef.doc("DC").set({
            name: "Washington, D.C.", state: null, country: "USA",
            capital: true, population: 680000 });
        citiesRef.doc("TOK").set({
            name: "Tokyo", state: null, country: "Japan",
            capital: true, population: 9000000 });
        citiesRef.doc("BJ").set({
            name: "Beijing", state: null, country: "China",
            capital: true, population: 21500000 });
        
        restaurantRef.doc("arinell-pizza").set({
            name: 'Arinell Pizza',
            avgRating: 4.65,
            numRatings: 683
        })
        

    }

    addCity() {
        firestore.collection("cities").doc("CHI").set({
            name: "Chicago", state: "IL", country: "USA",
            capital: false, population: 100000
        })
    }

    deleteCity() {
        firestore.collection("cities").doc("CHI").delete().then(() => console.log("deleted"))
    }

    getSFData() {
        let docRef = firestore.collection("cities").doc("SF")
        docRef.onSnapshot(doc => console.log("triggering update!"))

        docRef.get().then(doc => {
            if (doc.exists) {
                console.log("Doc data: ", doc.data())
            } else {
                console.log("No such document!")
            }
        }).catch(error => console.error(error))
    }

    getCapitalData() {
        firestore.collection("cities").where("capital", "==", true)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data())
            })
        })
        .catch(error => console.error(error))
    }

    clickMe() {
        let rating = 4;
        
        let restaurantRef = firestore.collection("restaurants").doc("arinell-pizza");
        let ratingRef = restaurantRef.collection("ratings").doc()

        return firestore.runTransaction(transaction => {
            return transaction.get(restaurantRef).then(res => {
                if (!res.exists) {
                    throw "Document does not exist!"
                }
                console.log(res.data())
                let newNumRatings = res.data().numRatings + 1;
                console.log(newNumRatings)
                let oldRatingTotal = res.data().avgRating * res.data().numRatings;
                let newAvgRating = (oldRatingTotal + rating) / newNumRatings;

                transaction.update(restaurantRef, {
                    numRatings: newNumRatings,
                    avgRating: newAvgRating
                })
                console.log('ratingRef ', ratingRef)
                transaction.set(ratingRef, {rating: rating})

            })
        })
        
    }

    addRating(evt) {
        let rating = evt.target.rating.value
        console.log(rating)
        let ratingRef = restaurantRef.doc("arinell-pizza").collection('ratings').doc();


        return firestore.runTransaction(transaction => {
            return transaction.get(restaurantRef).then(res => {
                if (!res.exists) {
                    throw "Document does not exist!"
                }

                let newNumRatings = res.data().numRatings + 1;
                let oldRatingTotal = res.data().avgRating * res.data().numRatings;
                let newAvgRating = (oldRatingTotal + rating) / newNumRatings;

                transaction.update(ratingRef, {
                    numRatings: newNumRatings,
                    avgRating: newAvgRating
                })

                transaction.set(ratingRef, {rating: rating})

            })
        })
    }

    // removeCity()


    // handleClick() {
    //     var docData = {
    //         stringExample: "Hello world!",
    //         booleanExample: true,
    //         numberExample: 3.14159265,
    //         dateExample: new Date("December 10, 1815"),
    //         arrayExample: [5, true, "hello"],
    //         nullExample: null,
    //         objectExample: {
    //             a: 5,
    //             b: {
    //                 nested: "foo"
    //             }
    //         }
    //     };
    //     firestore.collection("data").doc("one").set(docData).then(function() {
    //         console.log("Document successfully written!");
    //     });
    // }

    // updateData() {
    //     let dataRef = firestore.collection("data").doc("one")

    //     return dataRef.update({
    //         stringExample: "Hello again!"
    //     })
    //     .then(() => console.log("Document successfully updated!"))
    //     .catch(error => console.error(error))
    // }

        render() {
            return (
                <div>
                <h1>Testing</h1>
                <button onClick={this.getSFData}>Click me to get data for SF</button>
                <button onClick={this.getCapitalData}>Click me to get data for capitals</button>
                <button onClick={this.addCity}>Click me to add Chicago</button>
                <button onClick={this.deleteCity}>Click me to delete Chicago</button>
                <button onClick={this.clickMe}>Click me!</button>
                <form onSubmit={this.addRating}>
                <input type="text" name="rating" />
                </form>
                </div>
            )
            
        }
 */