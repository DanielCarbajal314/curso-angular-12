import { SnakePipe } from './snake.pipe';

describe('SnakePipe', () => {
  it('create an instance', () => {
    const pipe = new SnakePipe();
    expect(pipe).toBeTruthy();
  });


  it('revome HTML', () => {
    const pipe = new SnakePipe();
    expect(pipe.transform('<div>AAA</div>')).toEqual('AAA');
  });

  it('revome nested HTML', () => {
    const pipe = new SnakePipe();
    expect(pipe.transform('<div><a>AAA</a></div>')).toEqual('AAA');
  });

  it('revome nested HTML concatenated', () => {
    const pipe = new SnakePipe();
    expect(pipe.transform('<div><a>AAA</a></div><div><a>AAA</a></div>')).toEqual('AAA AAA');
  });

  it('return empty when null', () => {
    const pipe = new SnakePipe();
    expect(pipe.transform(undefined)).toEqual('');
  });

});
