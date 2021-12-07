function filterOut(str, value) {
    let filtered = "";
    for (let char of str) {
        filtered += (char == value) ? "" : char;
    }
    return filtered;
}

export { filterOut };