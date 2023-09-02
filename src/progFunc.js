export const progFunc = (start, difference, n) => {
    var progarr = [];
    for (var i = 0; i < n; i++) {
      var term = start + i * difference;
      progarr.push(term);
    }
    return progarr;
}
