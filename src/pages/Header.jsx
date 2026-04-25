import "../css/Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-bg-glow"></div>
            <div className="header-content">
                <div className="header-badge">AS</div>
                <div className="header-text">
                    <h1 className="name">Anshul Sharma</h1>
                    <p className="header-subtitle">Full-Stack Developer & QA Engineer</p>
                </div>
            </div>
        </header>
    );
}
