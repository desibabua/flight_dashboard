export function promiseWrapper<T>(promise: Promise<T>): () => T {
  let status = "pending";
  let result: T;

  const newPromise = promise
    .then(
      (value) => {
        status = "success";
        result = value;
      },
      (error) => {
        status = "error";
        result = error;
      }
    )
    .catch((err) => {
      status = "error";
      result = err;
    });

  return () => {
    switch (status) {
      case "pending":
        throw newPromise;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
}
