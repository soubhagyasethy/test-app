import GitHub from "../Images/GitHub Icon.png"
import Instagram from "../Images/Instagram Icon.png"
import Facebook from "../Images/Facebook Icon.png"
import Twitter from "../Images/Twitter Icon.png"
export default function Footer() {
    return(
        <nav className="footer">
            <li className="github"><a href="https://github.com/soubhagyasethy"><img src={GitHub} alt="social media links"/></a></li>
            <li className="instagram"><a href="/"><img src={Instagram} alt="social media links"/></a></li>
            <li className="facebook"><a href="/"><img src={Facebook} alt="social media links"/></a></li>
            <li className="twitter"><a href="/"><img src={Twitter} alt="social media links"/></a></li>
        </nav>
    )
}