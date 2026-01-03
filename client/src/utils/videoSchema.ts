export const generateVideoSchema = (
    videoName: string,
    description: string,
    thumbnailUrl: string,
    uploadDate: string, // ISO format
    contentUrl: string,
    embedUrl?: string
) => {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": videoName,
        "description": description,
        "thumbnailUrl": [thumbnailUrl],
        "uploadDate": uploadDate,
        "contentUrl": contentUrl,
        "embedUrl": embedUrl || contentUrl
    });
};
