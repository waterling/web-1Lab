let rand = function(){
    arr = []
    for (let i = 0; i < 1000; i++){
        arr.push(Math.random() * 1000)
    }
    return arr
}

let min = function(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= min){
            min = arr[i]
        }
    }
    return min
}

let max = function(arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= max){
            max = arr[i]
        }
    }
    return max
}

let median = function(arr){
    return arr[Math.round(arr.length / 2)]
}

let quickSort = function (arr){
    if (arr.length < 2){
        return arr
    }

    let pivot = arr[Math.floor(Math.random() * arr.length)]
    let pivot_index = arr.indexOf(pivot)
    arr.splice(pivot_index, 1)

    let left = []
    let right = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([pivot]).concat(quickSort(right))
}

// Создание массива
arr = rand()
// Вывод массива
console.log('Массив: ' + arr)
// Длина массива
console.log('Длина массива: ' + arr.length)
// Максимальный элемент
console.log('Максимальный элемент: ' + max(arr))
// Минимальный элемент
console.log('Минимальный элемент: ' + min(arr))

// Быстрая сортировка
let sortArr = quickSort(arr)
console.log('Отсортированный массив: ' + sortArr)

// Медиана
console.log('Медиана: ' + median(sortArr))

// Подсчитываем теги
function getTags(){
    let tags = Array.from(document.querySelectorAll('*')).map(node => node.tagName)    
    let dict = new Map()
    for (let i = 0; i < tags.length; i++){
        if (!dict.has(tags[i]))
            dict.set(tags[i], 0)
        dict.set(tags[i], dict.get(tags[i]) + 1)
    }
    console.log(dict)
}