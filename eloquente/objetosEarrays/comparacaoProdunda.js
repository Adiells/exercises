function deepEqual(v1, v2) {
    if (v1 === v2) {
        return true
    }

    if (typeof v1 === 'object' && v1 !== null && typeof v2 === 'object' && v2 !== null) {
        let keys1 = Object.keys(v1)
        let keys2 = Object.keys(v2)

        if (keys1.length !== keys2.length){
            return false
        }

        for (let key of keys1) {
            if (!keys2.includes(key) || !deepEqual(v1[key], v2[key])) {
                return false
            }
        }
        return true
    }
    return false
}