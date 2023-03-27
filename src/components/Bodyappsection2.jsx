import sectionJSON from "./json/bodySectionsData.json"


const Bodyappsection2 = () => {

    return (
        <section className='section-vrv'>
            <div className='div-vrv'>
                <h5> Menor consumo garantizado </h5>
                <h2>Sistemas VRV <br />para el hogar y la oficina</h2>
                <p>Somos creadores de la tecnología VRV,<br />la más eficiente del mercado. <br />Contamos con un modelo ideal para cada aplicación:</p>
                <div className='ul-list'>
                    <ul className='ul-list-a'>
                        <li>
                            <h3>VRVH</h3>
                            <p>Heat pump: Sistema frío <br /> calor por bomba (8-60HP).</p>
                        </li>
                        <li>
                            <h3>VRVQ</h3>
                            <p>Heat pump: Sistema frío <br /> calor por bomba para <br /> reemplazo de R-22 / R-407 (8-48HP).</p>
                        </li>
                        <li>
                            <h3>VRV Invisible</h3>
                            <p>Heat pump: Sistema frío <br /> calor. Unidad exterior <br /> dividida para instalación <br /> interior (8HP).</p>
                        </li>
                        <li>
                            <h3>Hidrobox</h3>
                            <p>Heat pump: Sistema frío <br /> calor. Unidad exterior <br /> dividida para instalación <br /> interior (8HP).</p>
                        </li>
                    </ul>
                    <ul className='ul-list-b'>
                        <li>
                            <h3>VRVR</h3>
                            <p>Heat recovery: Sistema <br /> frío calor simultaneo (8- <br /> 60HP).</p>
                        </li>
                        <li>
                            <h3>VRV Small</h3>
                            <p>Heat pump: Sistema frío <br /> calor por bomba (4-9HP).</p>
                        </li>
                        <li>
                            <h3>Altherma</h3>
                            <p>Heat pump: Sistema frío <br /> calor por bomba (8-60hp).</p>
                        </li>
                        <li>
                            <h3>Unidad de tratamiento</h3>
                            <p>Manejadoras de aire DX <br /> (UTA) (8-54HP).</p>
                        </li>
                    </ul>
                </div>
            </div>
            <picture>
                {sectionJSON.map(sec => sec.section === "2" ? <img className='img' src={sec.img} alt='papa'/> : "") }
            </picture>
        </section>
    )
}

export default Bodyappsection2;