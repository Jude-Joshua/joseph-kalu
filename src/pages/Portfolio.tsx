import PageDivider from "../components/PageDivider.tsx";
import Lists from "../components/Lists.tsx";

const Portfolio: React.FC = () => {
    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-start justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-center"}>
                        <h2 className={"h2 text-center"}>
                            Selected <span id={"highlight"}>Work</span>
                        </h2>
                        <p className={'p1 text-center'}>
                            Because Design is a dish best served hot 🔥
                        </p>
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