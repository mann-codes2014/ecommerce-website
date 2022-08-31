export default {
    name: 'discount',
    title: 'Discount',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'productImage',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'productDesc',
            title: 'Product Desc',
            type: 'string',
        },
        {
            name: 'productQualities',
            title: 'Product Qualities',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
    ],
};