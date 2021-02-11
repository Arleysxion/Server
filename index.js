const http = require('http')

const student = [{firstName:"Harvy Arley", lastName:"Gil Bonilla", profession:"Engineer"},
                 {firstName:"Daniela", lastName:"Calle", profession:"Engineer"},
                 {firstName:"Laura", lastName:"Monsalve", profession:"Engineer"},
                 {firstName:"Monica", lastName:"Gonzalez", profession:"Engineer"},
                 {firstName:"Brianith", lastName:"Navarro", profession:"Engineer"},
                 {firstName:"Alejandro", lastName:"Becerra", profession:"Engineer"},
                 {firstName:"Laura", lastName:"Ramos", profession:"Engineer"},
                 {firstName:"Diana", lastName:"Rojas", profession:"Engineer"},
                 {firstName:"Cristian", lastName:"Moreno", profession:"Engineer"}]

const header = {
  'Content-type': 'application/json'
}

const app = http.createServer((req, res)=>{
  res.writeHead(200, header)
  res.end(JSON.stringify(student))
})

app.listen(4000)

console.log('Server running', 4000)
