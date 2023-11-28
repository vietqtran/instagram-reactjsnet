import { Visibility } from "@type/enum/Visibility";

export interface Post {
	id: number;
	userId: string;
	title: string;
	createdAt: string;
	visibility: Visibility;
	isPinned: boolean;
}