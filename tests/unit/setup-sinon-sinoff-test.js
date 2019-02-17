import { module, test } from 'qunit';
import setupSinonSinoff from 'ember-sinon-sinoff/test-support/setup-sinon-sinoff';
import {
  createSandbox,
  restoreSandbox,
} from 'ember-sinon-sinoff/test-support/sinon-sinoff';

module('Unit | ember-sinon-sinoff | With global access', function() {
  test(`configuring setup/restore`, function(assert) {
    assert.expect(4);

    let beforeEachCalled = false;
    let afterEachCalled = false;

    let hooks = {
      beforeEach(callback) {
        beforeEachCalled = true;
        assert.equal(callback, createSandbox);
      },

      afterEach(callback) {
        afterEachCalled = true;
        assert.equal(callback, restoreSandbox);
      },
    };

    setupSinonSinoff(hooks);

    assert.ok(beforeEachCalled, 'hooks.beforeEach is called');
    assert.ok(afterEachCalled, 'hooks.afterEach is called');
  });
});

module('Unit | ember-sinon-sinoff | Validates helper with hooks', function(
  hooks
) {
  setupSinonSinoff(hooks);

  hooks.beforeEach(function(assert) {
    assert.ok(this.sandbox);
  });

  test('Fake test name', function(assert) {
    assert.expect(1);
  });
});
