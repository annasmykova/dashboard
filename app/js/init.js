$( function() {

    //date-picker
    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }

    //modal init
    var modalBtn = $('[data-modal]');

    modalBtn.on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).bPopup({
            closeClass: 'close'
        });

    })

    //formstyler
    $('select').styler();

    //scroll-bar
    $('.scrollbar-inner').scrollbar();

    //chart init
    var chartBlock = document.getElementById('myChart');
    if( chartBlock){
        var myChart = new Chart(chartBlock, {
            type: 'bar',
            data: {
                labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
                datasets: [
                    {
                        label: 'Signups',
                        data: [150 ,200 ,220, 150, 260, 250, 300, 540, 300],
                        backgroundColor: 'rgba(128, 191, 202, 1)'
                    },
                    {
                        label: 'FTD',
                        data: [200 ,200 ,520, 200, 260, 450, 600, 440, 150],
                        backgroundColor: 'rgba(255, 154, 56, 1)'
                    },
                    {
                        label: 'FTD',
                        data: [200 ,200 ,520, 200, 260, 450, 600, 440, 150],
                        backgroundColor: '#59b66d'
                    }

                ]
            },
            options: {
            responsive: true,
                scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                    }]
                }
            }
        })

    }

} );