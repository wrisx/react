const Wrisx = require('./wrisx-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Wrisx.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(wrisxs => {
      res.json(wrisxs);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, title, details } = req.body;

  const wrisx = new Wrisx({ id, title, details });
  wrisx
    .save()
    .then(() => {
      res.json(wrisx);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, title, details } = req.body;

  Wrisx.findOne({ id })
    .then(wrisx => {
      wrisx.title = title;
      wrisx.details = details;
      wrisx.save().then(res.json(wrisx));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Wrisx.findOneAndRemove({ id })
    .then(wrisx => {
      res.json(wrisx);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
