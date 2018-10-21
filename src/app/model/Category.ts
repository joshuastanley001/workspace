export class Category{
  static readonly categories: Category [] = [
    {
      id: 'all',
      title: 'All'
    },
    {
      id: 'birthday',
      title: 'Birthday'
    },
    {
      id: 'christmas',
      title: 'Christmas'
    },
    {
      id: 'graduation',
      title: 'Graduation'
    },
    {
      id: 'thankyou',
      title: 'Thank You'
    }
  ];

  id:string;
  title:string;
}
