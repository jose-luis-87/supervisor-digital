import React, { useState, useContext, useEffect } from "react";


const data = [
    {
         id: 1,
         name: 'Gerardo López',
         puntoventa: 'PLUTARCO',
         promedio: 98,
         img: {imgUser},
         bgcolor: "#00C853"
         
    },
    {
         id: 2,
         name: 'Eduardo Ruiz',
         puntoventa: 'CENTENARIO',
         promedio: 78,
         img: '../img/user.jpg',
         bgcolor: "#0061B2"
    },
    {
         id: 3,
         name: 'Ana Madrid',
         puntoventa: 'GRANJAS',
         promedio: 68,
         img: '../img/user.jpg',
         bgcolor: "#0061B2"
    },
    {
         id: 4,
         name: 'Álan Castro',
         puntoventa: 'NORTE 25',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    },
    {
         id: 5,
         name: 'Brenda Cloud',
         puntoventa: 'ATLANTA',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    },
    {
         id: 6,
         name: 'Álan Castro',
         puntoventa: 'NORTE 25',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    },
    {
         id: 7,
         name: 'Brenda Cloud',
         puntoventa: 'ATLANTA',
         promedio: 45,
         img: '../img/user.jpg',
         bgcolor: "#FF8A01"
    }
]

function CustomSelect({data,onSelect}) {

    const [open, toggleOpen] = useState(false);

    const [stateData,setData] = useState({
        cat: []
    });

    const [selected,SetSelected]= useState({
        sel: item.label
    })

    function selectItem(item) {
        onSelect(item.value);
        SetSelected({sel:item.label})
        toggleOpen(false);
      }



    useEffect(() => {
        let _cat = [];
        for (let i = 0; i < data.length; i++) {
            
            _cat.push(<div key={i} className={styles.option} onClick={() => {selectItem(data[i])}}>
                    <input type="radio" className={styles.radio} id={catalogo[i].value}  name="category" />
                    <label htmlFor={data[i].value}>{data[i].label}</label>
                </div>)
            
        }
        
        setData({
            cat: _cat
        })

      }, [])


    return (
        <div className={styles.container}>
            <div className={styles.select_box}>
                <div className={`${styles.options_container} ${open ? styles.active :''}`}>
                    <div key={0} className={styles.option} onClick={() => {selectItem('Selecciona una opción')}}>
                        <input type="radio" className={styles.radio} id={'default'}  name="category" />
                        <label htmlFor={'default'}>Selecciona una opción</label>
                    </div>
                    {stateData.cat}
                </div>
                <div className={styles.selected} onClick={() => toggleOpen(!open)}>
                    {selected.sel}
                </div>
            </div>
        </div>
    );
}

export default CustomSelect;