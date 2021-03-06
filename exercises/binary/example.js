// classy solution, eh?

class Binary {
  constructor(binary) {
    this.binary = binary.match(/^[01]*$/) ? parseInt(binary, 2) : 0;
  }
  toDecimal() {
    const out = Number(this.binary.toString(10));
    return isNaN(out) ? 0 : out;
  }
}

export default Binary;
