import CSS from 'csstype';

export const Footer = () => {
    const style: CSS.Properties = {
        width: '100%',
        height: '100%',
        flex: '1 1 0',
        textAlign: 'center'
    }
    return (
        <footer style={style}>
            <p>© 2021 Pollaroid All rights reserved</p>
        </footer>
    )
}