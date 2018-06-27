const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// app.use(function(req, res, next) {
// 	res.header('Access-Control-Allow-Credentials', 'true');
// 	next();
// });

const adapter = new FileAsync('./data/db.json');

low(adapter)
    .then(db => {

        app.get('/forms', (req, res) => {
            const post = db.get('forms').value();

            res.json(post)
        });

        app.put('/forms/:id', (req, res) => {
            let id = req.params.id;
            console.log(id);
            console.log(req.body)
            db.get('forms')
                .find({id})
                .assign(req.body) // or .defaults depending on what you want to do
                .write();

            let forms = db.get('forms');
            
            console.log(forms);
            res.json(forms);

            // let forms = db.get('forms').value();

            // forms = forms.map(form => {
            //     if (form.id === id) {
            //         return res.body;
            //     } else {
            //         return form;
            //     }
            // })

            // let form = forms
            //     .push(req.body)
            //     .first()
            //     .assign({ id: Date.now().toString() })
            //     .write()
            //     .then(post => {
            //         console.log(post);
            //         res.json(post)
            //     })
        });

        app.get('/', (req, res) => {
            const post = db.get('dictionary').value();

            res.json(post)
        });

        // POST /dictionary
        app.post('/', (req, res) => {
            db.get('dictionary')
                .push(req.body)
                .first()
                .assign({ id: Date.now().toString() })
                .write()
                .then(post => {
                    console.log(post);
                    res.json(post)
                })
        });

        // Set db default values
        return db.defaults({ dictionary: [] }).write()
    })
    .then(() => {
        app.listen(3000, () => console.log('listening on port 3000'))
    });