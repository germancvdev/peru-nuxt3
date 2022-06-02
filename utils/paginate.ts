export const totalPage = (count: number, size: number): number =>
  Math.ceil(count / size);
export const totalSkip = (page: number, size: number): number =>
  (page - 1) * size;
