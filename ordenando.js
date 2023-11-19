// ordenando.js

// Função para trocar os valores de duas posições de um vetor
const swap = (array, pos1, pos2) => {
    const temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}

// Função para embaralhar os elementos de um vetor
const shuffle = (array, numberOfSwaps) => {
    for (let i = 0; i < numberOfSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
}

// Função para ordenar um vetor com o algoritmo Bubble Sort
const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

// Função para ordenar um vetor com o algoritmo Selection Sort
const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
}

// Função para ordenar um vetor com o algoritmo Quick Sort
const quick_sort = (array, start, end) => {
    if (start < end) {
        const pivotIndex = particionamento(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
}

// Função de apoio ao Quick Sort para encontrar o pivô
const particionamento = (array, start, end) => {
    const pivot = array[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, end);
    return i + 1;
}
// Função add para adicionar o valor à lista
function add() {
    const valorInput = document.getElementById('valor');
    const listaValores = document.getElementById('valores');

    const node = document.createElement('li');
    const valorText = document.createTextNode(valorInput.value);

    node.appendChild(valorText);
    listaValores.appendChild(node);

    valorInput.value = ''; // Limpar o campo de entrada após adicionar
}

// Função ordenar para ordenar a lista de valores
function ordenar() {
    const listaValores = document.getElementById('valores');
    const listaAlgoritmo = document.getElementById('algoritmo');
    const valoresArray = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));

    let algoritmo;
    switch (listaAlgoritmo.value) {
        case 'bubble':
            algoritmo = bubble_sort;
            break;
        case 'selection':
            algoritmo = selection_sort;
            break;
        case 'quick':
            algoritmo = quick_sort;
            break;
        default:
            algoritmo = bubble_sort; // Usar Bubble Sort por padrão
    }

    algoritmo(valoresArray);

    listaValores.innerHTML = valoresArray.map(item => `<li>${item}</li>`).join('');
}

// Função misturar para embaralhar os valores da lista
function misturar() {
    const listaValores = document.getElementById('valores');
    const valoresArray = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));

    shuffle(valoresArray);

    listaValores.innerHTML = valoresArray.map(item => `<li>${item}</li>`).join('');
}