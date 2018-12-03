//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';

// Router Setup
import express from 'express';
const pageRouter = express.Router();

let sendJSON = (response, data) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(data));
  response.end();
};

const content = [
  {
    deckTitle: 'My Deck of Stuff',
    records: [
      {
        title: 'Card 1',
        copy: 'Card 1 Copy Here...',
        media: {
          alt: 'This is a picture',
          title: 'This is the title of the picture',
          href: 'https://placehold.it/200x100'
        },
        links: [
          {
            type: 'primary',
            title: 'Click Me',
            href: 'https://www.foo.com'
          },
          {
            type: 'secodary',
            title: 'Not Me',
            href: 'https://www.bar.com'
          }
        ]
      },
      {
        title: 'Card 2',
        copy: 'Card 2 Copy Here...',
        media: {
          alt: 'This is a picture',
          title: 'This is the title of the picture',
          href: 'https://placehold.it/200x100'
        },
        links: [
          {
            type: 'primary',
            title: 'Click Me',
            href: 'https://www.foo.com'
          },
          {
            type: 'secodary',
            title: 'Not Me',
            href: 'https://www.bar.com'
          }
        ]
      },
      {
        title: 'Card 3',
        copy: 'Card 3 Copy Here...',
        media: {
          alt: 'This is a picture',
          title: 'This is the title of the picture',
          href: 'https://placehold.it/200x100'
        },
        links: [
          {
            type: 'primary',
            title: 'Click Me',
            href: 'https://www.foo.com'
          },
          {
            type: 'secodary',
            title: 'Not Me',
            href: 'https://www.bar.com'
          }
        ]
      }
    ]
  },
  {
    deckTitle: 'My Other Deck of Stuff',
    records: [
      {
        title: 'Card 1',
        copy: 'Card 1 Copy Here...',
        media: {
          alt: 'This is a picture',
          title: 'This is the title of the picture',
          href: 'https://placehold.it/200x100'
        },
        links: [
          {
            type: 'primary',
            title: 'Click Me',
            href: 'https://www.foo.com'
          },
          {
            type: 'secodary',
            title: 'Not Me',
            href: 'https://www.bar.com'
          }
        ]
      }
    ]
  }
];

pageRouter.get('/', async (req, res, next) => {
  try {
    sendJSON(res, 'Server Home');
  } catch (err) {
    next();
  }
});

pageRouter.get('/content', async (req, res, next) => {
  try {
    sendJSON(res, content);
  } catch (err) {
    next();
  }
});
export default pageRouter;
