import { createSandbox, restoreSandbox } from './sinon-sinoff';

/**
 * Allows for creating and restoring a global sinon sandbox per test. This is
 * done via the `QUnit.testStart` and `QUnit.testDone` methods.
 *
 * @export
 * @param {Object} An object containing optional options
 * @public
 */
export default function setupSinonSinoff(testEnvironment = self.QUnit) {
  testEnvironment.testStart(createSandbox);
  testEnvironment.testDone(restoreSandbox);
}
