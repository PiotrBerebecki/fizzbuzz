QUnit.module( "FizzBuzz", function (assert) {

  QUnit.test('If 1 returns 1', function (assert) {
    assert.equal(fizzbuzz(1), 1, '1 should equal 1');
  });

  QUnit.test('If 2 returns 2', function (assert) {
    assert.equal(fizzbuzz(2), 2, '2 should equal 2');
  });

  QUnit.test('If 3 returns \'Fizz\'', function (assert) {
    assert.equal(fizzbuzz(3), 'Fizz', '3 should equal Fizz');
  });

  QUnit.test('If 4 returns 4', function (assert) {
    assert.equal(fizzbuzz(4), 4, '4 should equal 4');
  });

  QUnit.test('If 5 returns Buzz', function (assert) {
    assert.equal(fizzbuzz(5), 'Buzz', '5 should equal Buzz');
  });

  QUnit.test('If 6 returns \'Fizz\'', function (assert) {
    assert.equal(fizzbuzz(6), 'Fizz', '6 should equal Fizz');
  });

  QUnit.test('If 7 returns 7', function (assert) {
    assert.equal(fizzbuzz(7), 7, '7 should equal 7');
  });

  QUnit.test('If 10 returns Buzz', function (assert) {
    assert.equal(fizzbuzz(10), 'Buzz', '10 should equal Buzz');
  });

  QUnit.test('If 15 returns FizzBuzz', function (assert) {
    assert.equal(fizzbuzz(15), 'FizzBuzz', '15 should equal FizzBuzz');
  });

  QUnit.test('If random returns random', function (assert) {

    function fizzbuzzSolution(n) {
      if (n % (3 * 5) === 0) {
        return 'FizzBuzz';
      }

      if (n % 3 === 0) {
        return 'Fizz';
      }

      if (n % 5 === 0) {
        return 'Buzz';
      }

      return n;
    }

    var randomNumber = Math.floor(Math.random() * 1000);

    assert.equal(fizzbuzzSolution(randomNumber), fizzbuzz(randomNumber), `${randomNumber} should equal ${fizzbuzzSolution(randomNumber)}`);
  });


});
