function average(table) {
    var sum = 0;
    for (var i = 0; i < table.length; i++) {
        sum += table[i];
    }
    return table.length === 0 ? 0 : sum / table.length;
}