function complexFunction(a, b, c, d) {
    if (a > b) {
        if (c > d) {
            return a + c;
        } else if (a > d) {
            return a - d;
        } else {
            return d - c;
        }
    } else {
        if (b > c) {
            return b * 2;
        } else if (d > a) {
            return d / 2;
        } else {
            return a + b + c + d;
        }
    }
}

module.exports = complexFunction;
