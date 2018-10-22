export class CardTemplate {
  static readonly catalog: CardTemplate [] = [
    {
      url: '/src/assets/images/thank-you-1.gif',
      title: 'Thank You #1',
      id: 'thank-you-1',
      category: 'thankyou',
      refUrl: ''
    },
    {
      url: '/src/assets/images/thank-you-1.gif',
      title: 'Thank You #2',
      id: 'thank-you-2',
      category: 'thankyou',
      refUrl: ''
    },
    {
      url: '/src/assets/images/thank-you-1.gif',
      title: 'Thank You #3',
      id: 'thank-you-3',
      category: 'thankyou',
      refUrl: ''
    }
  ];

  url: string;
  title: string;
  id: string;
  category: string;
  refUrl: string;
}
