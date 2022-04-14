const CAS = require('cas')

const cas = new CAS({
  base_url: 'https://login.gatech.edu/cas',
  service: 'live-it-up'
})

// Login authentication function to grab user credentials from GT CAS authentication
exports.casLogin = (req, res) => {
  const ticket = req.params('ticket')
  if (ticket) {
    cas.validate(ticket, (err, status, gtUsername) => {
      if (err) {
        res.send({ error: err })
      } else {
        res.send({ status: status, gtUsername: gtUsername })
      }
    })
  } else {
    res.redirect('/')
  }
}
