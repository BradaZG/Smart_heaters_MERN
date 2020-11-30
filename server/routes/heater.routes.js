const express = require('express');
const Router = express.Router();

const Heater = require('../models/heater.model.js');

Router.route('/').get((req, res) => {
  Heater.find()
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

Router.route('/add').post((req, res) => {
  const { client_name, address } = req.body;

  const newHeater = new Heater({
    client_name,
    address,
  });

  newHeater
    .save()
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

Router.route('/:id').get((req, res) => {
  const idSearch = req.params.id;
  Heater.findById(idSearch)
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

Router.route('/update/:id').post((req, res) => {
  const idSearch = req.params.id;
  Heater.findById(idSearch)
    .then((heater) => {
      const { client_name, address } = req.body;

      heater.client_name = client_name;
      heater.address = address;

      heater
        .save()
        .then((response) => {
          res.status(200).json({ response, success: true });
        })
        .catch((error) => {
          res.status(400).json({ error, success: false });
        });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

Router.route('/addHeaterReading/:id').post((req, res) => {
  const idSearch = req.params.id;
  Heater.findById(idSearch)
    .then((heater) => {
      const { temperature } = req.body;
      const now = new Date();

      heater.readings = [
        ...heater.readings,
        { temperature: temperature, timestamp: now },
      ];

      heater.save().then((response) => {
        res.status(200).json({ response, success: true });
      });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

Router.route('/delete/:id').delete((req, res) => {
  const idSearch = req.params.id;
  Heater.findByIdAndDelete(idSearch)
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

module.exports = Router;
