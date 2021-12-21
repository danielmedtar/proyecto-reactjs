const Footer = ({data:{copyright,autor}}) => {
    return (
        <footer>
            <p>{copyright} | <a href="https://danielmedtar.github.io/" target="_blank" rel="noreferrer">{autor}</a></p>
        </footer>
    )
}

export default Footer
