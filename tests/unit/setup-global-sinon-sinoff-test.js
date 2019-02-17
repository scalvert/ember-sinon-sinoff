import { module, test } from 'qunit';
import setupSinonSinoff from 'ember-sinon-sinoff/test-support/setup-global-sinon-sinoff';
import {
  createSandbox,
  restoreSandbox,
} from 'ember-sinon-sinoff/test-support/sinon-sinoff';

module('Unit | ember-sinon-sinoff | Setup in testStart/testDone', function() {
  test(`configuring setup/restore`, function(assert) {
    assert.expect(4);

    let testStartCalled = false;
    let testDoneCalled = false;

    let qunit = {
      testStart(callback) {
        testStartCalled = true;
        assert.equal(callback, createSandbox);
      },

      testDone(callback) {
        testDoneCalled = true;
        assert.equal(callback, restoreSandbox);
      },
    };

    setupSinonSinoff(qunit);

    assert.ok(testStartCalled, 'testEnvironment.testStart is called');
    assert.ok(testDoneCalled, 'testEnvironment.testDone is called');
  });
});
