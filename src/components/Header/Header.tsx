import Button from "../Button/Button.tsx";
import mailIcon from '../../assets/mail.png'
import callIcon from '../../assets/call.png'
import {Avatar} from "../Avatar/Avatar.tsx";

export const Header = () => {
    return (
        <div className="w-[100%] flex flex-col items-center">
            <img src={'https://avatars.mds.yandex.net/i?id=074161c04d015525a39ff032c6fa9fdd_l-7055114-images-thumbs&n=13'}
                 alt={'Banner'} className='w-full h-[192px] -mb-[50px] object-fill'/>
            <div className="flex flex-row gap-[20px] items-end w-[100%] max-w-[1024px] justify-center justify-self-center">
                <Avatar avatarUrl={'https://i.pinimg.com/originals/f8/66/8e/f8668e5328cfb4938903406948383cf6.png'}/>
                <div className='flex flex-row items-center w-[100%] max-w-[812px] justify-between flex-wrap'>
                    <h1>
                        Ricardo Copper
                    </h1>
                    <div className='flex flex-row flex-wrap gap-[16px]'>
                        <Button name={'Message'} icon={mailIcon}/>
                        <Button name={'Call'} icon={callIcon}/>
                    </div>
                </div>
        </div>
        </div>

    );
};

