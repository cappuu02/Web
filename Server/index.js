const express = require('express')
const app = express()
const port = 3001


const prodotti_model = require('./prodottiModel')
const ordine_model = require('./ordineModel')
const utenti_model = require('./utentiModel')
const user_stats_model = require('./user_statsModel')

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/prodotti', (req, res) => {
  prodotti_model.getProdotti()
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/prodotti', (req, res) => {
  prodotti_model.createProdotti(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/prodotti/:id', (req, res) => {
  prodotti_model.deleteProdotti(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.put("/prodotti/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  prodotti_model
    .updateProdotti(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/ordine', (req, res) => {
   ordine_model.getOrdine()
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/ordine', (req, res) => {
  ordine_model.createOrdine(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/ordine/:id', (req, res) => {
  ordine_model.deleteOrdine(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.put("/ordine", (req, res) => {
  const body = req.body;
  ordine_model
    .updateOrdine(body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/utenti', (req, res) => {
  utenti_model.getUtenti()
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/utenti', (req, res) => {
  if (req.body.hasOwnProperty('reg')) {
    
    utenti_model.createUtenti(req.body)
    
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } else {
    utenti_model.checkUtenti(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
});


app.put("/utenti", (req, res) => {
  const body = req.body;
  utenti_model
    .updateUtenti(body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/user_stats', (req, res) => {
  user_stats_model.getUser_stats()
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/user_stats', (req, res) => {
  if (req.body.hasOwnProperty('create')) {
    
    user_stats_model.createUser_stats(req.body)
    
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } if (req.body.hasOwnProperty('log')) {
    user_stats_model.updateUser_stats(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})



