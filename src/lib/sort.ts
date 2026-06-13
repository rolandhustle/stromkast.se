export const svCollator = new Intl.Collator('sv');

export function byTitle<T extends { data: { title: string } }>(a: T, b: T): number {
  return svCollator.compare(a.data.title, b.data.title);
}
