const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <div className="footer__icon-wrapper bg-w" title="GitHub">
                    <a href="https://github.com/parkseoeun5322" target="_blank"><img src={import.meta.env.VITE_IMAGE_URL_FRONT + 'footer/logo_github.png' + import.meta.env.VITE_IMAGE_URL_BACK} alt=""/></a>
                </div>
                <div className="footer__icon-wrapper" title="Tistory">
                    <a href="https://mystudyblog-it.tistory.com" target="_blank"></a><img src={import.meta.env.VITE_IMAGE_URL_FRONT + 'footer/logo_tistory.png' + import.meta.env.VITE_IMAGE_URL_BACK} alt="" />
                </div>
            </div>
            <div className="footer__copyright">© 2023. Park Seo Eun. All rights reserved.</div>
        </footer>
    )
}

export default Footer