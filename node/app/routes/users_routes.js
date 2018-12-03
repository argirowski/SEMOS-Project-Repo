var ObjectID = require('mongodb').ObjectID


// FINDING A USER
module.exports = function(app, db){
  app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)};
    db.db().collection('users').findOne(details, (err, item) => {
      if(err){
        res.send({'error': 'An error has occured'});
      }else {
        res.send(item)
      }
    })
  })

// DELETING AN OBJECT:
app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  const details = {'_id': new ObjectID(id)};
  db.db().collection('users').remove(details, (err, item) => {
    if(err){
      res.send({'error': 'An error has occured'});
    }else {
      res.send('Note: ' +id+ ' is deleted!')
    }
  })
})

//UPDATING USER:
app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const details = {'_id': new ObjectID(id)};
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name};
  db.db().collection('users').update(details, user, (err, item) => {
    if(err){
      res.send({'error': 'An error has occured'});
    }else {
      res.send(item)
    }
  })
})

  //CREATING A USER
  app.post('/users', (req, res) => {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name}
    db.db().collection('users').insert(user, (err, result) => {
      if(err){
        res.send({'error': 'An error has occured'})
      } else {
        res.send(result.ops[0])
      }
    })
  })
}