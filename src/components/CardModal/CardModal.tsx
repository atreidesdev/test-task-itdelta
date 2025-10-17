import {useEffect, useState} from "react";
import {getImageById} from "../../api/images/getImageById.ts";
import {postComment} from "../../api/comments/postComment.ts";
import CommentsList from "./CommentsList.tsx";
import CommentForm from "./CommentForm.tsx";

type Props = {
    id: number;
    isOpened: boolean;
    onClose: () => void;
}

type ImageData = {
    comments: {
        author: string;
        id: number;
        text: string;
    }[],
    id: number;
    image: string;
    largeImage: string;
}

const CardModal = (props: Props) => {
    const [data, setData] = useState<ImageData>()
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() =>{
        if (!props.isOpened) return
        setIsLoading(true)
        const fetchData = async () => {
            const result = await getImageById(props.id);
            setData(result)
            setIsLoading(false)
        }
        fetchData()
    },[props.id, props.isOpened])

    useEffect(() => {
        if (!props.isOpened) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                props.onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [props.isOpened])

    if (!props.isOpened) return null

    const handleBackdropClick = () => props.onClose()
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation()

    const handleSubmit = async (text: string) => {
        if (!text || isSubmitting) return false
        setIsSubmitting(true)
        try {
            const status = await postComment(props.id, text)
            if (status >= 200 && status < 300) {
                setData(prev => {
                    if (!prev) return prev
                    const newComment = { id: Date.now(), author: 'Вы', text }
                    return { ...prev, comments: [...prev.comments, newComment] }
                })
                return true
            }
            return false
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={handleBackdropClick}>
            <div className="bg-white rounded-lg shadow-xl max-w-5xl w-[90%] max-h-[85vh] overflow-hidden" onClick={stopPropagation}>
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <h2 className="text-lg">id: {props.id}</h2>
                    <button aria-label="Закрыть" onClick={props.onClose}>×</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="p-4 flex items-center justify-center bg-gray-50">
                        {isLoading && (
                            <div>Загрузка...</div>
                        )}
                        {!isLoading && data && (
                            <img src={data.largeImage || data.image} alt={'image with id: ' + data.id} className="max-h-[70vh] w-auto object-contain"/>
                        )}
                    </div>
                    <div className="p-4 overflow-y-auto max-h-[75vh]">
                        <h3 className="font-semibold mb-2">Комментарии</h3>
                        <CommentsList comments={data?.comments} />
                        <CommentForm disabled={isSubmitting} onSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardModal;