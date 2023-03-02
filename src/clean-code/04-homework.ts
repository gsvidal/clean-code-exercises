(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    return fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela';
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColors = 'red' | 'yellow' | 'purple';

  function getFruitsByColor(color: FruitColors): string[] {
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error('the color must be: red, yellow, purple');
    }

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    return !isFirstStepWorking
      ? 'First step broken.'
      : !isSecondStepWorking
      ? 'Second step broken.'
      : !isThirdStepWorking
      ? 'Third step broken.'
      : !isFourthStepWorking
      ? 'Fourth step broken.'
      : 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('manzana'), fruit: 'manzana' }); // true
  console.log({ isRedFruit: isRedFruit('ciruela'), fruit: 'ciruela' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
