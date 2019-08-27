export default (...funcs) => (component) => funcs.reduceRight((acc, func) => func(acc), component);
