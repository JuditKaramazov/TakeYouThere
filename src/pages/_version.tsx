export default function Version() {
  return `${process.env.COMMIT_HASH}`
}
