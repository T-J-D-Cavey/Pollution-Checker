export function CardComponent() {
    return (
        <div className="cardContainer">
            <a href='https://en.wikipedia.org/wiki/Air_quality_index' target='_blank'>
                <div>Air Quality Index wiki</div>
            </a>
            <a href='https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health' target='_blank'>
                <div>World Health Organisation: air pollution</div>
            </a>
            <a href='https://waqi.info/' target='_blank'>
                <div>Where did we source our information?</div>
            </a>
            <a href='https://www.actionforcleanair.org.uk/' target='_blank'>
                <div>What is 'Action for clean air'?</div>
            </a>
        </div>
    )
}