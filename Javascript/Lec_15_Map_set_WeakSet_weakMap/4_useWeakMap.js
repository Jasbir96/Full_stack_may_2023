let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        // processing
        let futDate = Date.now() + 2000;
        while (Date.now() < futDate) {
        }

        let result = obj;
        cache.set(obj, result);
        return result;
    }

    return cache.get(obj);
}
// module.exports
module.exports = {
    process, cache
};