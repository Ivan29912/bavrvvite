import sectionJSON from "./json/bodySectionsData.json"


const Bodyappsection1 = () => {
    return (
        <section className='section-inverter'>
            <picture>
                {sectionJSON.map(sec => sec.section === "1" ? <img className='img' src={sec.img} alt='papa'/> : "") }
            </picture>
            <div className='div-inverter'>
                <h5> {sectionJSON} </h5>
                <h2>Una nueva generación <br /> de equipos de aire</h2>
                <p>Somos expetos en aire acondicionado.<br /> Por eso, desarrollamos una opción ideal<br /> para cada tipo de aplicación.</p>
                <div className='ul-list'>
                    <div className='ul-list-a'>
                        <ul>
                            <li>
                                Mini y Multi Split.
                            </li>
                            <li>
                                Cassette.
                            </li>
                            <li>
                                Baja silueta.
                            </li>
                            <li>
                                Rooftop.
                            </li>
                            <li>
                                Enfriadoras (chillers).
                            </li>
                            <li>
                                Manejadoras de aire.
                            </li>
                        </ul>
                    </div>
                    <div className='ul-list-b'>
                        <ul>
                            <li>
                                Sistemas VRV.
                            </li>
                            <li>
                                Piso / Techo.
                            </li>
                            <li>
                                Calefactor.
                            </li>
                            <li>
                                Sistemas de control.
                            </li>
                            <li>
                                Sistemas aplicados.
                            </li>
                            <li>
                                Fan coils.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bodyappsection1;