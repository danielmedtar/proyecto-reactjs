const Footer = ({data:{copyright,autor}}) => {
    return (
        <footer className="mt-5">
            <p>{copyright} | <a href="https://danielmedtar.github.io/" target="_blank" rel="noreferrer">{autor}</a></p>
        </footer>
    )
}

export default Footer
