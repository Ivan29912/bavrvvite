import sectionJSON from "./json/bodySectionsData.json"

const Bodyappsection3 = () => {
    return (
        <section className='section-eficiencia'>
            <picture>
                {sectionJSON.map(sec => sec.section === "3" ? <img className='img' src={sec.img} alt='papa'/> : "") }
            </picture>
            <div className='div-eficiencia'>
                <h5> Departamento de servicios </h5>
                <h2>Estamos para ayudarte</h2>
                <p>Brindamos servicios de soporte técnico<br />a personal especializado y usuarios finales</p>
                <div className='ul-list'>
                    <div className='ul-list-a'>
                        <ul>
                            <li>
                                <h5>
                                    Servicios generales.
                                </h5>
                                <h5>
                                    Repuestos.
                                </h5>
                                <h5>
                                    Garantía oficial.
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div className='ul-list-b'>
                        <ul>
                            <li>
                                <h5>
                                    Servicios de mantenimiento.
                                </h5>
                            </li>
                            <h5>
                                Errores decódigo.
                            </h5>
                            <li>
                                <h5>
                                    Preguntas frecuentes.
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bodyappsection3;