import './App.css'
import {useEffect, useState} from "react";
import {getImages} from "./api/images/getImages.ts";
import {ImageCardList, type ImageProps} from "./components/ImageCard/ImageCard.tsx";
import {Header} from "./components/Header/Header.tsx";
import CardModal from "./components/CardModal/CardModal.tsx";

function App() {
    const [images, setImages] = useState<ImageProps[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)

    useEffect(() =>{
        const fetchData = async () => {
            const data = await getImages()
            setImages(data)
        }
        fetchData()
    },[])

    const handleCardClick = (id: number) => {
        setSelectedId(id)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

  return (
    <div className="bg-gray-100 w-full max-w-screen min-h-screen flex flex-col gap-[25px]">
        <Header/>
        <ImageCardList images={images} onCardClick={handleCardClick}/>
        {isModalOpen && selectedId !== null && (
            <CardModal id={selectedId} isOpened={isModalOpen} onClose={handleCloseModal} />
        )}
    </div>
  )
}

export default App
