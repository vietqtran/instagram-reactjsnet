import { UserVM } from "@type/UserVM";
import { Visibility } from "@type/enum/Visibility";

export interface PostResponse {
	id: string;
	userId: string;
	title: string;
	createdAt: string;
	visibility: Visibility;
	isPinned: boolean;
	postImages: string[];
	user: UserVM
}