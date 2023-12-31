import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCalcStore = defineStore('calc', () => {
  const figureShown = ref('')
  const prevFigureShown = ref('')
  const secondPrevFigureShown = ref('')
  const operation = ref('')
  // const doubleCount = computed(() => count.value * 2)
  function addDigit(lastFigure: string) {
    figureShown.value += lastFigure
  }
  function savePrevFigure() {
    prevFigureShown.value = figureShown.value
  }
  function resetLast() {
    figureShown.value = ''

  }
  function resetAll() {
    figureShown.value = ''
    prevFigureShown.value = ''
    operation.value = ''
  }

  function setOperation(op: string) {
    operation.value = op
  }
  function getResult() {
    let result = 0
    secondPrevFigureShown.value = figureShown.value
    if (operation.value === '-') {
      result = parseFloat(prevFigureShown.value) - parseFloat(figureShown.value)
      figureShown.value = result.toString()
    }
    else if (operation.value === '+') {
      result = parseFloat(prevFigureShown.value) + parseFloat(figureShown.value)
      figureShown.value = result.toString()
    }
    else if (operation.value === '/') {
      result = parseFloat(prevFigureShown.value) / parseFloat(figureShown.value)
      figureShown.value = result.toString()
    }
    else if (operation.value === 'x') {
      result = parseFloat(prevFigureShown.value) * parseFloat(figureShown.value)
      figureShown.value = result.toString()
    }
    else if (operation.value === '√') {
      result = Math.sqrt(parseFloat(prevFigureShown.value))
      figureShown.value = result.toString()
    }
    else if (operation.value === '%') {
      result = parseFloat(prevFigureShown.value)/100
      figureShown.value = result.toString()
    }
  }
function printStoreValues(){
  console.log(figureShown.value, prevFigureShown.value, operation.value);

}
  return { figureShown, prevFigureShown, operation, secondPrevFigureShown, addDigit, savePrevFigure, resetLast, resetAll, setOperation, getResult, printStoreValues }
})

