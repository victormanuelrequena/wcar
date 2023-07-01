export default function sleeper(ms: number) {
    return function (x: number) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}