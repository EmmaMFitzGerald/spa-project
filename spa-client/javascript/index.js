let memories = []
const memoryContainer = document.querySelector('.memories-lists')

const addMemory = memory => {
    memoryContainer.innerHTML += `
    <div class="card">
    <div class="card-content">
    <span class="card-title">${memory.title}</span>
    <p>Child: ${memory.child_id} </p>
    <p>${memory.category}</p>
    <p>
        ${memory.content}
    </p>
    </div>
    </div>
    `
}

const loadMemories = params => {
    data = fetch('http://localhost:3000/memories').then(response => {
        memories = response.json()
        memories.then(data => {
            data.forEach(memory => {
                addMemory(memory)
            })
        })
    })
}

const handleSubmission = e => {
    e.preventDefault()
    const memory = {
        title: e.target.title.value,
        child: e.target.child.value,
        category: e.target.category.value,
        content: e.target.content.value
    }
    fetch('http://localhost:3000/memories',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memory)
    }).then(res => {
        return res.json()
    })
        .then(data => {
        addMemory(data)
        e.target.reset()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#memory-form').addEventListener('submit', handleSubmission)
    loadMemories()
})