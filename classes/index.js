class VerifyError extends Error {
  constructor(message) {
    super(message);
    this.name = "VerifyError";
    this.status = 401;
  }
}

export default VerifyError;
