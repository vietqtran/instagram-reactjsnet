import { Visibility } from "@type/enum/Visibility";

export interface PostRequest {
    userId: string;
    title: string;
    visibility: Visibility;
    postImages: string[]
}