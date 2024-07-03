interface TitleProps {
    title: string
}

export default function Title({title}: TitleProps) {
    return (
        <h2 style={{fontSize: '2rem'}}>{title}</h2>
    );
}
