// blog model
export type TBlog = {
    title: string;
    description: string;
    content: string;
    pictures?: string[];
    isDeleted?: boolean;
    readTime?: string;
};


// blog with id and timestamps
export type TBlogWithId = TBlog & {
    _id: string;
    createdAt: string;
    updatedAt: string;
};


// blog card props
export type TBlogCardProps = {
    blog: TBlogWithId;
};


// blogs grid props
export type TBlogsGridProps = {
    blogs: TBlogWithId[];
};


// blog page props
export type TBlogPageProps = {
    params: Promise<{
        blogId: string;
    }>;
};


// route params
export type TRouteParams = {
    blogId: string;
}


// blog or null
export type TBlogOrNull = TBlogWithId | null;