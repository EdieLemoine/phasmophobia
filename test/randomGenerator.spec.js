import { RandomGenerator } from '@/services/RandomGenerator';

describe('RandomGenerator', () => {
  it('works with array of strings', () => {
    const generator = new RandomGenerator(['one', 'two', 'three']);

    expect(generator.generate()).toBeTruthy();
    expect(generator.generate()).toBeTruthy();
    expect(generator.generate()).toBeTruthy();
    expect(generator.generate()).toBe(null);
    expect(generator.generate()).toBe(null);
  });

  it('works with array of objects', () => {
    const generator = new RandomGenerator([
      { name: 'one', limit: 1 },
      { name: 'two', limit: Infinity },
      { name: 'three', limit: 1 },
    ]);

    const generated = [];

    for (let i = 0; i < 5; i++) {
      generated.push(generator.generate());
    }

    expect(generated.sort()).toEqual([
      'one',
      'three',
      'two',
      'two',
      'two',
    ]);
  });
});
