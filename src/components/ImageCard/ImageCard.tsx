export type ImageProps = {
    id: number
    image: string
}
type ImageCardProps = ImageProps & { onClick?: (id: number) => void }
export const ImageCard = (props: ImageCardProps) => {
    const handleClick = () => {
        props.onClick?.(props.id)
    }
    return (
        <section className="w-[31%] flex-col gap-[8px] cursor-pointer" onClick={handleClick}>
            <img src={props.image} alt={'image with id: '+ props.id} className='object-fill max-h-[244px] w-[100%]'/>
            <h3>id: {props.id}</h3>
        </section>
    );
};

export type ImageListProps = {
    images: ImageProps[];
    onCardClick?: (id: number) => void;
}
export const ImageCardList = ({images, onCardClick}: ImageListProps) => {
    return (
        <div className="flex flex-row gap-[32px] flex-wrap w-[99%] justify-around">
            {images.map((image) => (
                <ImageCard key={image.id} image={image.image} id={image.id} onClick={onCardClick}/>
                ))}
        </div>
    );}