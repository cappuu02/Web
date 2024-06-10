const express = require('express')
const app = express()
const port = 3001


const prodotti_model = require('./prodottiModel')
<<<<<<< Updated upstream
const ordine_model = require('./ordineModel')
=======
const ordini_model = require('./ordiniModel')
>>>>>>> Stashed changes
const utenti_model = require('./utentiModel')
const user_stats_model = require('./user_statsModel')
const indirizzi_model = require('./indirizziModel')
const email_sender = require('./email_sender')
<<<<<<< Updated upstream
=======
const fatture_model = require('./fattureModel')
>>>>>>> Stashed changes
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

app.post('/send-email', (req,res) => {
<<<<<<< Updated upstream
  email_sender.sendEmail(req.body)
});
=======
  if (req.body.hasOwnProperty('log')) {
  email_sender.sendEmail(req.body)
  }
  if (req.body.hasOwnProperty('rec')) {
  email_sender.sendEmail1(req.body)
  }
  if (req.body.hasOwnProperty('pass')) {
  email_sender.sendEmail2(req.body)
  }if (req.body.hasOwnProperty('phone')) {
    email_sender.sendEmail3(req.body)
    }

  });
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
app.get('/ordine', (req, res) => {
   ordine_model.getOrdine()
=======
app.get('/ordini', (req, res) => {
   ordini_model.getordini()
>>>>>>> Stashed changes
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

<<<<<<< Updated upstream
app.post('/ordine', (req, res) => {
  ordine_model.createOrdine(req.body)
=======
app.post('/ordini', (req, res) => {
  if (req.body.hasOwnProperty('get')) {
  ordini_model.getordiniUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
}if (req.body.hasOwnProperty('create')) {
  ordini_model.createordini(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
}
})

app.delete('/ordini/:id', (req, res) => {
  ordini_model.deleteordini(req.params.id)
>>>>>>> Stashed changes
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

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
  } if(req.body.hasOwnProperty('login')) {
    utenti_model.checkUtenti(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } if(req.body.hasOwnProperty('rec')) {
    utenti_model.checkEmail(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } if(req.body.hasOwnProperty('newPass')) {
    utenti_model.checkupPass(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
    }
<<<<<<< Updated upstream
=======
    if(req.body.hasOwnProperty('change')) {
      utenti_model.checkEmailChange(req.body)
        .then(response => {
          res.status(200).send(response);
        })
        .catch(error => {
          res.status(500).send(error);
        });
      }
      if(req.body.hasOwnProperty('emailupdate')) {
        utenti_model.emailUpdate(req.body)
          .then(response => {
            res.status(200).send(response);
          })
          .catch(error => {
            res.status(500).send(error);
          });
        }
>>>>>>> Stashed changes
}
);


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

app.post('/prodotti', (req, res) => {
  sgMail.send(msg)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/indirizzi', (req, res) => {
  indirizzi_model.getIndirizzi()
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

<<<<<<< Updated upstream
=======
app.post('/indirizzi', (req, res) => {
  if (req.body.hasOwnProperty('create')) {
    
    indirizzi_model.createIndirizzi(req.body)
    
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } if (req.body.hasOwnProperty('update')) {
    indirizzi_model.updateIndirizzi(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }if (req.body.hasOwnProperty('newTel')) {
    indirizzi_model.updateTelefono(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }if (req.body.hasOwnProperty('telCheck')) {
    indirizzi_model.checkTelefono(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
})

app.get('/fatture', (req, res) => {
  fatture_model.getFatture()
  .then(response => {
    
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/fatture', (req, res) => {
  if (req.body.hasOwnProperty('create')) {
    
    fatture_model.createFatture(req.body)
    
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } if (req.body.hasOwnProperty('update')) {
    fatture_model.updateFatture(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
})

>>>>>>> Stashed changes

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})



