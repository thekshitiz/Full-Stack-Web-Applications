import http from 'http'
import todos from './todos.js' // Import todos
import { getRequestData } from './utils.js' // Import getRequestData function

const port = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {
    if (req.url === '/api/v1/todos' && req.method === 'GET') {
        // Handle GET request
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(todos)) // Send todos as JSON response
    } else if (req.url === '/api/v1/todos' && req.method === 'POST') {
        // Handle POST request
        try {
            const req_body = await getRequestData(req)
            const newTodo = JSON.parse(req_body)
            todos.push(newTodo) // Add new todo to the list
            res.writeHead(201, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(todos))
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Invalid JSON data' }))
        }
    } else if (
        req.url.match(/\/api\/v1\/todos\/[0-9]+/) &&
        req.method === 'DELETE'
    ) {
        const id = req.url.split('/')[4] // Extract ID from URL
        const todo = todos.find((t) => t.id === parseInt(id)) // Find todo by ID
        if (!todo) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Todo not found' }))
        } else if (todo) {
            // Assuming 'todo' is defined earlier in the code
            const index = todos.indexOf(todo) // Get index of todo
            todos.splice(index, 1) // Remove todo from the list
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Todo deleted successfully' }))
        }
    } else {
        // Handle all other routes
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use.`)
    } else {
        console.error(err)
    }
})
