import "./styles.css"

const Apps = () => {
    return(
        <section className="appWrapper">
            <div className="appItem selected">
                <img src="https://cdn-icons-png.flaticon.com/512/2930/2930617.png" alt="" />
            </div>

            <div className="appItem">
                <img src="https://cdn-icons-png.flaticon.com/512/780/780456.png" alt="" />
            </div>

            <div className="appItem">
                <img src="https://cdn-icons-png.flaticon.com/512/3298/3298995.png" alt="" />
            </div>
        </section>
    )
}

export default Apps;