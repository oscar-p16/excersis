//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(count) {
    this.count = count;
    this.rows = []
    this.f = [];
    for(var n = 0; n < count; ++n) {
      var row = [];
      for(var k = 0; k <= n; ++k) {
        row.push(this.binomial(n, k));
      }
      this.rows.push(row);
    }
  }
  get lastRow() {
    return this.rows[this.rows.length-1];
  }

  set rows(rows) {
    this._rows = rows;
  }
  get rows() {
    return this._rows;
  }

  binomial(n, k) {
    return this.factorial(n) / (this.factorial(k) * this.factorial(n-k));
  }

  factorial (n) {
    if (n == 0 || n == 1)
      return 1;
    if (this.f[n] > 0)
      return this.f[n];
    return this.f[n] = this.factorial(n-1) * n;
  } 
}