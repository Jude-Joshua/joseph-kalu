import PageDivider from "../components/PageDivider.tsx";
import Lists from "../components/Lists.tsx";
import {ScrollingText} from "../components/ScrollingText.tsx";

const Portfolio: React.FC = () => {
    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-start justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-center"}>
                        <h2 className={"h2 text-center"}>
                            Selected <span id={"highlight"}>Work</span>
                        </h2>
                        <ScrollingText txt={'Because Design is a dish best served hot'} size={'small'} emoji={'🔥'}/>
                    </div>
                </div>
            </header>
            <section className={'flex flex-col items-start justify-start'}>
                <PageDivider/>

                <Lists type={'talks'}/>

                <PageDivider/>

                <Lists type={'articles'}/>

                <PageDivider/>
            </section>
        </>
    )
}

export default Portfolio