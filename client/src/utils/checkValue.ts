export const isEqual = <T>(firstTarget: T, secondTarget: T): boolean =>
  firstTarget === secondTarget;

export const isFirstBiggerThanAfter = <T>(
  firstTarget: T,
  secondTarget: T
): boolean => firstTarget > secondTarget;
