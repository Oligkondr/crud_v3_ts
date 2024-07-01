interface TitleProps {
    title: string
}

export default function Title({title}: TitleProps) {
    return (
        <h1 style={{fontSize: '2rem'}}>{title}</h1>
    );
}
