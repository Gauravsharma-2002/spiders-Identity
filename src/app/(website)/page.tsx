import Hero from "./components/hero"
import AboutMe from "./components/about-me"
import ThingsIDo from "./components/things-i-do"
export default function Home(){
    return(
        <main>
            <Hero/>
            <AboutMe/>
            <ThingsIDo/>
        </main>
    )
}