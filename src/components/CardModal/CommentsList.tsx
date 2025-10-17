export type CommentItem = {
    author: string;
    id: number;
    text: string;
}

type Props = {
    comments?: CommentItem[];
}

const CommentsList = ({comments}: Props) => {
    if (!comments || comments.length === 0) {
        return <div className="text-gray-500">Комментариев пока нет</div>
    }
    return (
        <ul className="space-y-3">
            {comments.map((c) => (
                <li key={c.id} className="border rounded p-2">
                    <div className="text-sm text-gray-600">{c.author}</div>
                    <div className="text-gray-800">{c.text}</div>
                </li>
            ))}
        </ul>
    );
}

export default CommentsList;


