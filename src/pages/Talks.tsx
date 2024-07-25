import PageDivider from "../components/PageDivider.tsx";
import Lists from "../components/Lists.tsx";

const Talks: React.FC = () => {
    return (
        <>
            <header className={'header flex flex-col justify-center items-center'}>
                <div className={"header-content flex flex-row items-start justify-center"}>
                    <div className={"header-content-hero-text flex flex-col items-center"}>
                        <h2 className={"h2 text-center"}>
                            Inspiring <span id={"highlight"}>Ideas</span>, Driving <span id={"highlight"}>Change</span>
                        </h2>
                        <p className={'p1 text-center'}>
                            Here you will find my talks, moderated sessions and panels.
                        </p>
                    </div>
                </div>
            </header>
            <section className={'flex flex-col items-start justify-start'}>
                <PageDivider/>

                <Lists  type={'talks'}/>

                <PageDivider/>

                <Lists  type={'articles'}/>

                <PageDivider/>
            </section>
        </>
    )
}

export default Talks