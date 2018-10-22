export class CardTemplate {
  static readonly catalog: CardTemplate [] = [
    // Thank You
    {
      url: 'assets/images/thank-you-butterflies.png',
      title: 'Thank You #1',
      id: 'thank-you-butterflies',
      category: 'thankyou',
      refUrl: 'https://s3.amazonaws.com/my-free-printable-cards.support-files.thank-you-cards/printable-thank-you-cards-00003-a5.pdf'
    },
    {
      url: 'assets/images/thank-you-neon.png',
      title: 'Neon Thank You',
      id: 'thank-you-neon',
      category: 'thankyou',
      refUrl: 'https://pixabay.com/en/thank-you-neon-lights-neon-362164/'
    },
    {
      url: 'assets/images/thank-you-flowers.png',
      title: 'Flowers Thank You',
      id: 'thank-you-flowers',
      category: 'thankyou',
      refUrl: 'https://s3.amazonaws.com/my-free-printable-cards.support-files.thank-you-cards/printable-thank-you-cards-00009-a5.pdf'
    },
    {
      url: 'assets/images/thank-you-apple.png',
      title: 'Apple Thank You',
      id: 'thankyou-apple',
      category: 'thankyou',
      refUrl: 'http://cottage-industrialist.com/blog/2009/5/4/teacher-appreciation.html'
    },
    // Happy Birthday
    {
      url: 'assets/images/birthday-frog.png',
      title: 'Happy Birthday Frog',
      id: 'birthday-frog',
      category: 'birthday',
      refUrl: 'https://pixabay.com/en/happy-birthday-birthday-frog-1211912/'
    },
    {
      url: 'assets/images/birthday-magical.png',
      title: 'Happy Birthday Magical',
      id: 'birthday-magical',
      category: 'birthday',
      refUrl: 'https://pixabay.com/en/happy-birthday-magical-greeting-1456647/'
    },
    {
      url: 'assets/images/birthday-island.png',
      title: 'Happy Birthday Island',
      id: 'birthday-island',
      category: 'birthday',
      refUrl: 'https://www.deviantart.com/frederatic/art/2-guys-on-an-island-758915380'
    },
    {
      url: 'assets/images/birthday-dude.png',
      title: 'Happy Birthday Dude',
      id: 'birthday-dude',
      category: 'birthday',
      refUrl: 'https://www.flickr.com/photos/erictoledo/23156507259'
    },
    // Christmas
    {
      url: 'assets/images/christmas-jingle-bells.png',
      title: 'Christmas Jingle Bells',
      id: 'christmas-jingle-bells',
      category: 'christmas',
      refUrl: 'https://mymerrychristmas.com/the-many-memes-of-christmas/'
    },
    {
      url: 'assets/images/christmas-tree.png',
      title: 'Christmas Tree',
      id: 'christmas-tree',
      category: 'christmas',
      refUrl: 'http://s3.amazonaws.com/my-free-printable-cards.support-files.christmas-cards/printable-christmas-cards-00016-a5.pdf'
    },
    {
      url: 'assets/images/christmas-angels.png',
      title: 'Christmas Angels',
      id: 'christmas-angels',
      category: 'christmas',
      refUrl: 'https://www.pexels.com/photo/christmas-77770/'
    },
    {
      url: 'assets/images/christmas-dolls.png',
      title: 'Christmas Dolls',
      id: 'christmas-dolls',
      category: 'christmas',
      refUrl: 'https://www.publicdomainpictures.net/en/view-image.php?image=237388&picture=christmas-card-vintage-santa'
    },
    // Graduation
    {
      url: 'assets/images/graduation-owl.png',
      title: 'Graduation Owls',
      id: 'graduation-owl',
      category: 'graduation',
      refUrl: 'https://s3.amazonaws.com/my-free-printable-cards.support-files.graduation/printable-graduation-cards-0003-a5.pdf'
    },
    {
      url: 'assets/images/graduation-youdidit.png',
      title: 'Graduation You Did It',
      id: 'graduation-youdidit',
      category: 'graduation',
      refUrl: 'https://s3.amazonaws.com/my-free-printable-cards.support-files.graduation/printable-graduation-cards-0001-a5.pdf'
    },
    {
      url: 'assets/images/graduation-leo.png',
      title: 'Graduation Leo',
      id: 'graduation-leo',
      category: 'graduation',
      refUrl: 'https://imgflip.com/memegenerator/Leonardo-Dicaprio-Cheers'
    },
    {
      url: 'assets/images/graduation-sammy-spartan.png',
      title: 'Graduation Sammy Spartan',
      id: 'graduation-sammy-spartan',
      category: 'graduation',
      refUrl: 'https://i.pinimg.com/564x/10/f0/ec/10f0ec18ad90e30f2046791fce9bc86c.jpg'
    }
  ];

  url: string;
  title: string;
  id: string;
  category: string;
  refUrl: string;
}
