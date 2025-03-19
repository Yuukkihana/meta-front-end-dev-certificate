function Footer() {

    const footerStyle = { //adding inline css style
        background: "blue"
    }

    return (
        <div style={footerStyle} className="copyright">
            <p>Made with love by Myself</p>
        </div>
    );
};

export default Footer;