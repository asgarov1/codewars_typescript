export function solution(str: string, ending: string): boolean {
    return str.endsWith(ending);
  }

console.log(solution('abc', 'bcces'));
