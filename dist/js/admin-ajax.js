$(document).ready(function() {

    $('#crear-admin').on('submit', function(e) {
        e.preventDefault();
        console.log("click!!");

        var datos = $(this).serializeArray();


        $.ajax({
            url: $(this).attr('action'),
            data: datos,
            type: $(this).attr('method'),
            dataType: 'json',
            complete: function(data) {

                var resultado = data;
                Swal.fire(
                    'Correcto',
                    'El usuario se creo!',
                    'success'
                )

            },

        });


    });

    $('#login-admin').on('submit', function(e) {
        e.preventDefault();
        console.log("click!!");

        var datos = $(this).serializeArray();


        $.ajax({
            url: $(this).attr('action'),
            data: datos,
            type: $(this).attr('method'),
            dataType: 'json',
            complete: function(data) {
                console.log(data);


            },

        });


    });
});