const express = require("express");
const app = express();
const firebase = require('firebase/app');
const PORT = 3000;
const {getDatabase, ref, get, update} = require('firebase/database');

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB5-Gs1Y8AHH2pD6cVM0h7Skv_lDk_ZBwo",
    authDomain: "lampwithesp32.firebaseapp.com",
    projectId: "lampwithesp32",
    storageBucket: "lampwithesp32.appspot.com",
    messagingSenderId: "448902725351",
    appId: "1:448902725351:web:ded5ad9c3f3db6faffec42"
}, 'firebaseApp');

const db = getDatabase(firebaseApp);


app.post('/setLumin',function(req,res){
    let lumin = req.query.lumin;
    update(ref(db, `/`), {
        lumin:lumin,
      });
      res.send("adicionado!");
})

app.get('/getLumin',async function(req,res){
    // Get a database reference to our posts
    await get(ref(db, `luminosity`)).then((snapshot) => {
        if (snapshot.exists()) {
            res.send(snapshot.val().toString());
        }
    });
})

app.post('/setMotion',function(req,res){
    let motion = req.query.motion;
    update(ref(db, `/`), {
        motion:motion,
      });
      res.send("adicionado!");
})

app.get('/getMotion',async function(req,res){
    await get(ref(db, `motion`)).then((snapshot) => {
        if (snapshot.exists()) {
            res.send(snapshot.val().toString());
        }
    });
})

app.post('/setMode',function(req,res){
    let mode = req.query.mode;
    update(ref(db, `/`), {
        mode:mode,
      });
      res.send("adicionado!");
})

app.get('/getMode',async function(req,res){
    await get(ref(db, `mode`)).then((snapshot) => {
        if (snapshot.exists()) {
            res.send(snapshot.val().toString());
        }
    });
})

app.listen(PORT, () => {
    console.log("server is running");
})