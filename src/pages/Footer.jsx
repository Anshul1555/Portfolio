import "../css/Footer.css"; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <div className="left-info">
                    <p className="email">anshulsharma9366@gmail.com</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/anshul1555/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Anshul1555" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                    </a>
                </div>
                <p className="number">+1 (437) 982 2044</p>
            </div>
        </footer>
    );
}
