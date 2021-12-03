export default class InternalError extends Error {
  constructor(message: string) {
    super(`An internal error has ocurrs: '${message}'`)
    this.name = 'INTERNAL_ERROR'
  }
}
