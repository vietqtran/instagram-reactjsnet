import { User } from "@type/User";

export interface CommentResponse {
    id: string;
    content: string;
    userId: string;
    postId: string;
    modifiedAt: string | null;
    isReply: boolean | null;
    replyId: string | null;
    user: User;
    likeComments: string[]
}