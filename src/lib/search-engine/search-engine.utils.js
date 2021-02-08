export function compareResults(result1, result2) {
    return (result1.id > result2.id ? 1 : -1)
}

export function identifyResult(result) {
    return result.id;
}