export interface PostType {
  id: number;
  title: string;
  content: string;
  writer: string;
  password: string;
  created_at: string;
  updated_at?: string;
}

export interface CommentType {
  id: number;
  postId: number;
  parent?: number;
  content: string;
  writer: string;
  password: string;
  created_at: string;
  updated_at?: string;
}

export interface PostProps {
  id: number;
  count: number;
  title: string;
  content: string;
  date: string;
}

export interface CommentListProps {
  id: number;
  commentList: CommentType[];
}

export interface CommentProps {
  comment: CommentType;
}

export interface Text {
  text: string;
}

export interface DateProps {
  date: string;
}
