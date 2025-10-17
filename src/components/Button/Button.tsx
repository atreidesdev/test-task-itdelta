
type Props = {
    name: string;
    icon: string
}

const Button = (props: Props) => {
    return (
        <button className='borderRadius-6 bg-white rounded-md border border-gray-300 py-[9px] pl-[13px] pr-[17px] flex flex-row items-cenetr gap-[8px] text-gray-600'>
            <img src={props.icon} alt={''} className='w-[20px] h-[20px] '/>
            {props.name}
        </button>
    );
};

export default Button;