export interface CommentRequest {
	content: string;
	userId: string;
	postId: string;
	isReply: boolean | null;
	replyId: string | null;
}