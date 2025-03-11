export class AssertionError extends Error {}

export function assert(assertion, message = "Error") {
  if (assertion !== true) {
    throw new AssertionError(message);
  }
}

export function assertEqual(expected, actual) {
  assert(
    expected === actual,
    `Expected : ${String(expected)} - Actual: ${String(actual)}`
  );
}

export function test(description, testFunction) {
  try {
    testFunction();
    console.log("---", description, ": OK");
  } catch (e) {
    console.error("+++ Error +++ in ", description);
    console.error(e);
  }
}
