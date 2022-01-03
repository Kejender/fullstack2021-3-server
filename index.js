require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('build'))
const Person = require('./models/person')

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

let persons = []

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
  Person.find({}).then(persons => {
    console.log('persons', persons.length)
    response.send(`<h1>Phonebook length ${persons.length} ${Date()}</h1>`)
  })

})

app.get('/api/persons/:id', (request, response, next) => {
  console.log('id', request.params.id)
  
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))  
 })

  app.delete('/api/persons/:id', (request, response, next) => {

    console.log('delete')
    
    Person.findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })

  app.post('/api/persons', (request, response, next) => {

    const body = request.body
    console.log('post', body)

    if (body.name === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
  
    const person = new Person({
      name: body.name,
      number: body.number,
      important: body.important || false,
      date: new Date(),
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
  })

  app.put('/api/persons/:id', (request, response, next) => {

    console.log('put')
    const body = request.body
    console.log('post', body)
  
    if (body.name === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
    
    const person = {
      name: body.name,
      number: body.number
    }
          
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedNote => {
        response.json(updatedNote)
      })
      .catch(error => next(error))
   })

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})