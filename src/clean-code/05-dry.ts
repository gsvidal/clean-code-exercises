type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(public productName: string = '', public price: number = 0, public size: Size = '') {}

  isProductReady(): boolean {
    // console.log(this);
    for (const key in this) {
      console.log(typeof this[key]);

      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0) throw new Error(`${key} is empty`);
          break;
        case 'number':
          if ((this[key] as number) <= 0) throw new Error(`${key} should be a positive number`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    return this.isProductReady() && `${this.productName} ${this.price} "${this.size}"`;
  }
}

(() => {
  const bluePants = new Product('purple pants', 120, '');
  console.log(bluePants.toString());
})();
