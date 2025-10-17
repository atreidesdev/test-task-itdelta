import {useState} from "react";

type Props = {
    disabled?: boolean;
    onSubmit: (text: string) => Promise<boolean> | boolean;
}

const CommentForm = ({disabled, onSubmit}: Props) => {
    const [text, setText] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const value = text.trim()
        if (!value || isSubmitting) return
        setIsSubmitting(true)
        setError("")
        try {
            const ok = await onSubmit(value)
            if (ok) {
                setText("")
            } else {
                setError("Не удалось отправить комментарий. Попробуйте ещё раз.")
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form className="mt-4 flex items-stretch gap-2" onSubmit={handleSubmit}>
            {error && (
                <div className="w-full mb-2 rounded border border-red-300 bg-red-50 text-red-700 px-3 py-2">
                    {error}
                </div>
            )}
            <input
                type="text"
                placeholder="Напишите комментарий..."
                className="flex-1 border rounded px-3 py-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={disabled || isSubmitting}
            />
            <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
                disabled={disabled || isSubmitting || !text.trim()}
            >{isSubmitting ? 'Отправка...' : 'Отправить'}</button>
        </form>
    );
}

export default CommentForm;


