const express = require('express');
const ejs = require('ejs');
const app = express();

const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res,next) => {
    res.redirect('login');
})

app.get('/login',(req,res,next) => {
    res.render('login',{
        error:"",
        data:req.body
    })
});

app.post('/login',(req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;
    if(username == "admin" && password == "password"){
        res.redirect('dashboard');
    }else{
        res.render('login',{
            error:"Invalid credentials"
        });
    }
});

app.get('/register',(req,res,next) => {
    res.render('register',{
        error:"",
        data:req.body
    })
});

app.post('/register',(req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;
    if(username.length >=5 && password.length >=5){
        res.redirect('dashboard');
    }else{
        res.render('register',{
            error:"Minimum length of username and password is five characters."
        });
    }
});

app.get('/dashboard',(req,res,next) => {
    res.render('dashboard',{
        data:req.body
    })
});

app.listen(PORT,() => console.log(`listening on port ${PORT}`))