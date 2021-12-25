import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebse from "../Pages/Login/Firebase/firebase.initialize";

//initialization
initializeFirebse();

// firebase functionalities
const useFirebase = () => {


    // States
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // Database relate states
    const [admin, setAdmin] = useState(false);


    // AUTH
    const auth = getAuth();


    // Provider
    const googleProvider = new GoogleAuthProvider();


    // Google Sign In
    const handleGoogleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setError(null);

                // Send data to Database
                const user = result.user;
                saveToDb(user.displayName, user.email, 'PUT');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Email Registration and Update Name
    const handleEmailRegistration = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError(null)
                // Checking registration success 
                if (result?.user?.email) {
                    // Updating Profile
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        // Setting User Name on Update Success || Not waiting for observer
                        const newUser = { displayName: name, email: email };
                        setUser(newUser);
                        saveToDb(name, email, 'POST');
                        history.push('/');
                        //
                    }).catch((error) => {
                        setError(error.message)
                    })
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    // Email Sign In
    const handleEmailSignIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError(null)
                const destination = location?.state?.from || '/';
                history.push(destination);
                // Sign in success
                // const user = result.user;

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => { setIsLoading(false) });
    }


    // Sign Out
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setError(null);
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        })
            .finally(() => { setIsLoading(false) });
    }


    // Observer || User Login || User Logout
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false);
        });
        return unsubscribed;
    }, []);



    // Create user in database
    const saveToDb = (name, email, method) => {

        const user = { displayName: name, email: email };

        // Add User in the database
        fetch('https://pure-badlands-75944.herokuapp.com/user', {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId > 0) {
                    window.alert('Account Successfully created and added to the database')
                }
            })


    };


    // Look for admin
    useEffect(() => {
        fetch(`https://pure-badlands-75944.herokuapp.com/checkIsAdmin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin);
            })

    }, [user?.email]);


    // Return

    return {
        user,
        error,
        admin,
        setError,
        isLoading,
        handleGoogleSignIn,
        handleEmailRegistration,
        handleEmailSignIn,
        handleSignOut
    }
}

export default useFirebase;