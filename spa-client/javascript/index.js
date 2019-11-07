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
    memories = [
    {
        title: "First memory",
        child_id: "1",
        category: "First category",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        title: "Second memory",
        child_id: "2",
        category: "Second category",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        title: "Third memory",
        child_id: "3",
        category: "Third category",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
    ]

    memories.forEach(memory => {
        addMemory(memory)
    })
}

const handleSubmission = e => {
    e.preventDefault()
    memory = {
        title: e.target.title.value,
        child: e.target.child.value,
        category: e.target.category.value,
        content: e.target.content.value
    }
    addMemory(memory)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#memory-form').addEventListener('submit', handleSubmission)
    loadMemories()
})