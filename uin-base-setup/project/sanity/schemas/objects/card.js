const card = {
    name: 'card',
    title: 'Card',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Ledetekst',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Bilde',
            type: 'image'
        },
        {
            name: 'Link',
            title: 'Linker',
            type: 'array',
            of: [{type:'link'}]
        }
            
    ],
};

export default card;