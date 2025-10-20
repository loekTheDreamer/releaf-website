export interface Information {
  iconName: string;
  imagePath: string;
  description: string;
}

export const telcoInformations: Information[] = [
  {
    iconName: 'replace',
    imagePath: '/svgs/replace.svg',
    description: 'Replace marketing costs with profit generation'
  },
  {
    iconName: 'reduce',
    imagePath: '/svgs/reduce.svg',
    description: 'Reduce turnover dramatically'
  },
  {
    iconName: 'increase',
    imagePath: '/svgs/increase.svg',
    description: 'Increase Annual Revenue Per User without raising prices'
  }
];

export const userInformations: Information[] = [
  {
    iconName: 'subsidize',
    imagePath: '/svgs/subsidize.svg',
    description: 'Subsidize costs for device, plan, and data'
  },
  {
    iconName: 'earn',
    imagePath: '/svgs/earn.svg',
    description: 'Earn rewards with real-world value'
  },
  {
    iconName: 'zero',
    imagePath: '/svgs/zero.svg',
    description: 'Zero effort required'
  }
];
