const input = document.getElementById("input");
const button = document.getElementById("button");
const show = document.getElementById("show");

const tarefas = []

const addItem = () => {
    for(let i = 0; i < tarefas.length; i += 1) {
        show.innerHTML += `<input type="checkbox">${tarefas[i].item}<button>Remover</button><br>`;
    }
}

const remover = () => {
    console.log("oi")
    tarefas.splice(0, 1)
}

const press = () => {
    const result = input.value;
    tarefas.push({
        item: result,
        done: false
    })
    console.log(tarefas)
    addItem();
}

button.onclick = press;