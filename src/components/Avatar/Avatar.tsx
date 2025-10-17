
export type Props = {
    avatarUrl: string;
    className?: string;
}
export const Avatar = (props: Props) => {
    return (
         <img src={props.avatarUrl} className={'h-[128px] w-[128px] rounded-[64px] border-4 border-white '+ props.className} alt={'avatar'} />
    );
};

