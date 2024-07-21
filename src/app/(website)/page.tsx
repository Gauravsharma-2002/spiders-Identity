import Hero from "./components/Hero"
import AboutMe from "./components/about-me"
import Clients from "./components/clients"
import Experience from "./components/experience"
import History from "./components/history"
import ThingsIDo from "./components/things-i-do"
export default function Home(){
    return(
        <main>
            <Hero/>
            <AboutMe/>
            <ThingsIDo/>
            <Experience/>
            <History/>
            <Clients/>
        </main>
    )
}