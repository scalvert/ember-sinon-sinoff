import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupSinonSinoff from 'ember-sinon-sinoff/test-support/setup-sinon-sinoff';

module('Unit | ember-sinon-sinoff | Validates helper with hooks', function(
  hooks
) {
  setupTest(hooks);
  setupSinonSinoff(hooks);

  hooks.beforeEach(function(assert) {
    assert.ok(this.sandbox);
  });

  test('Fake test name', function(assert) {
    assert.expect(1);
  });
});
