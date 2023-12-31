import { Visibility } from "@type/enum/Visibility";

export interface Post {
	id: string;
	userId: string;
	title: string;
	createdAt: string;
	visibility: Visibility;
	isPinned: boolean;
}