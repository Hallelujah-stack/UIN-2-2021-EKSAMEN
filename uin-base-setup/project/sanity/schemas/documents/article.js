const article = {
    title: 'Article',
    name: 'article',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'string',
            description: 'This is what had happened',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'This is the slug',
        },
        {
            name: 'body',
            type: 'content',
            title: 'innhold'
        },
        {
            title: 'Kategori',
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}],
        },
        {
            name:'lead',
            title: 'Ledetekst',
            type: 'text'
        },
        {
            name: 'cards',
            title: 'Cards',
            type: 'cards'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
        },
    }
    ]
}

export default article;