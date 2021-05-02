const article = {
    title: 'Article',
    name: 'article',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'tittel',
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
            title: 'Kategori',
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}],
        }
    ]
}

export default article;