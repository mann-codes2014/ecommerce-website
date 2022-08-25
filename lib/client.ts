import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'b0au4zzn',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
export const urLFor = (source: string) => builder.image(source)
