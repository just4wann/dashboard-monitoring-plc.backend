export default function timeGenerator(): string {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}
