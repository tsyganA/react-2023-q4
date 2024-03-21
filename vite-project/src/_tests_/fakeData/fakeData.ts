export const fakeData = {
  data: {
    attributes: {
      category: 'Jinx',
      creator: 'Harry Potter',
      effect: 'Repels intruders',
      hand: 'Slashing movement',
      image:
        'https://static.wikia.nocookie.net/harrypotter/images/b/be/Dumbledore_and_Harry_performing_Apparition.gif',
      incantation: 'Aqua Eructo(A-kwa ee-RUCK-toh)',
      light: 'Ice-blue',
      name: 'Aqua Eructo',
      slug: 'aqua-eructo',
      wiki: 'https://harrypotter.fandom.com/wiki/Aqua_Eructo',
    },
    id: '463c97fc-09b2-4b07-9494-39c83f592a40',
    links: {
      self: '/v1/spells/f10af5f6-c6d3-48b9-b229-fee496e3ae41',
    },
    type: 'spell',
  },
  links: {
    self: 'https://api.potterdb.com/v1/spells/f10af5f6-c6d3-48b9-b229-fee496e3ae41',
  },
  meta: {
    copyright: 'Copyright © Potter DB 2023',
    generated_at: '2023-11-12T14:42:14.031+00:00',
  },
};


export const transformCards = {
  data: {
    spells: [
      {
        attributes: {
          category: 'Jinx',
          creator: 'Harry Potter',
          effect: 'Repels intruders',
          hand: 'Slashing movement',
          image:
            'https://static.wikia.nocookie.net/harrypotter/images/b/be/Dumbledore_and_Harry_performing_Apparition.gif',
          incantation: 'Aqua Eructo(A-kwa ee-RUCK-toh)',
          light: 'Ice-blue',
          name: 'Aqua Eructo',
          slug: 'aqua-eructo',
          wiki: 'https://harrypotter.fandom.com/wiki/Aqua_Eructo',
        },
        id: 'f10af5f6-c6d3-48b9-b229-fee496e3ae41',
        links: {
          self: '/v1/spells/f10af5f6-c6d3-48b9-b229-fee496e3ae41',
        },
        type: 'spell',
      },
      {
        attributes: {
          category: 'Conjuration',
          creator: 'Harry Potter',
          effect: "Conjures a shooting arrow from the caster's wand",
          hand: 'Slashing movement',
          image:
            'https://static.wikia.nocookie.net/harrypotter/images/8/82/ArrowShootingSpellHM.png',
          incantation: 'Aqua Eructo(A-kwa ee-RUCK-toh)',
          light: 'Ice-blue',
          name: 'Arrow Shooting Spell',
          slug: 'arrow-shooting-spell',
          wiki: 'https://harrypotter.fandom.com/wiki/Arrow_Shooting_Spell',
        },
        id: '463c97fc-09b2-4b07-9494-39c83f592a40',
        links: {
          self: '/v1/spells/f10af5f6-c6d3-48b9-b229-fee496e3ae41',
        },
        type: 'spell',
      },
    ],
    isNextPage: true,
  },
  refetch: vi.fn(),
};
export const transformCard = {
  data: {
    response: {
      category: 'Jinx',
      creator: 'Harry Potter',
      effect: 'Repels intruders',
      hand: 'Slashing movement',
      image:
        'https://static.wikia.nocookie.net/harrypotter/images/b/be/Dumbledore_and_Harry_performing_Apparition.gif',
      incantation: 'Aqua Eructo(A-kwa ee-RUCK-toh)',
      light: 'Ice-blue',
      name: 'Aqua Eructo',
      slug: 'aqua-eructo',
      wiki: 'https://harrypotter.fandom.com/wiki/Aqua_Eructo',
    },
  },
  refetch: vi.fn(),
};

export const transformCardLoading = {
  data: {
    response: {
      category: 'Jinx',
      creator: 'Harry Potter',
      effect: 'Repels intruders',
      hand: 'Slashing movement',
      image:
        'https://static.wikia.nocookie.net/harrypotter/images/b/be/Dumbledore_and_Harry_performing_Apparition.gif',
      incantation: 'Aqua Eructo(A-kwa ee-RUCK-toh)',
      light: 'Ice-blue',
      name: 'Aqua Eructo',
      slug: 'aqua-eructo',
      wiki: 'https://harrypotter.fandom.com/wiki/Aqua_Eructo',
    },
  },
  isLoading: true,
  refetch: vi.fn(),
};