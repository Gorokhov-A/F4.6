export const categories: any = {
  SD: 'Salad',
  DG: 'Dressing',
  MN: 'Main',
  SP: 'Soup',
  DT: 'Dessert',
  DK: 'Drink',
}

export function getTitle(data: string): string {
  return data.toLowerCase().split(' ').join('-')
}

export function getCategory(data: string): string {
  return categories[data]
}
