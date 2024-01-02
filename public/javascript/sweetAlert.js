window.addEventListener('load', () => {

    
    
    document.querySelector('#formula').addEventListener('click', event => {
                event.preventDefault();
                Swal.fire({
                customClass: {
                   
                },
                 imageUrl:"/images/ATOMIC.jpg" ,
                title: "Envianos tu número y un asesor se contactará contigo info@atomic.lat",
                color: 'white',
                background: "black",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

            }).then((result) => {

                    

                })
        }),
        document.querySelector('#formula2').addEventListener('click', event => {
            event.preventDefault();
            Swal.fire({
            customClass: {
               
            },

            imageUrl:"/images/ATOMIC.jpg" ,
                title: "Envianos tu número y un asesor se contactará contigo info@atomic.lat",
            color: 'white',
            background: "black",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },

        }).then((result) => {

                

            })
    })}
    
)