const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

router.get('/', (req, res) => {
  return res.render('main', 
  {
    title: 'WTF IS DIIIIT',
    layout: 'index'
  })
})

module.exports = router