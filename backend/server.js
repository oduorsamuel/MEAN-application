import express from "express";
import cors from "cors";
//for Cross-Origin Resource Sharing
import bodyparser from "body-parser";
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
import mongoose from "mongoose";
import Assets from './models/assets'
import Asset from "./models/assets";
import Issue from "./models/issues";


const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/assets');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to MongoDB');
});
//get request
router.route('/assets').get((req, res) => {
    Asset.find((err, assets) => {
        if (err)
            console.log(err)
        else
            res.json(assets);


    })
});
router.route('/graph').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err)
        else
            res.json(issues);


    })
});
//single request
router.route('/assets/:id').get((req, res) => {
    Asset.findById(req.params.id, (err, asset) => {
        if (err)
            console.log(err)
        else
            res.json(asset)
    });
});

//posting
router.route('/assets/add').post((req, res) => {
    let Asset = new Assets(req.body);
    Asset.save()
        .then(asset => {
            res.status(200).json({ 'Asset': 'added succesfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

//Updating endpoint
router.route('/assets/update/:Id').post((req, res) => {
    Assets.findById(req.params.Id, (err, asset) => {
        if (!asset)
            // return next(new Error('could not load document'));
            return (err)
        else {
            asset.deviceName = req.body.deviceName;
            asset.responsible = req.body.responsible;
            asset.description = req.body.description;
            asset.department = req.body.department;
            asset.status = req.body.status;
            asset.save().then(asset => {
                res.json('update done');
            }).catch(err => {
                res.status(400).send('update failed');
            });
        }
    });
});
router.route('/assets/delete/:id').get((req, res) => {
    Assets.findByIdAndRemove({ _id: req.params.id }, (err, asset) => {
        if (err)
            res.json(err)
        else
            res.json('removed successfully')

    })
})

app.use('/', router);
app.listen(4000, () => console.log('Server running on port 4000'));
