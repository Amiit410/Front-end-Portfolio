$(function () {

    function Convert() {
        var selectfrom = $("#selectfrom").val();
        var selectto = $("#selectto").val();
        var valfrom = $("#frominput").val();
        var conversion = 0;

        if (selectfrom === "Celcius" && selectto === "Farenheit") {
            conversion = (valfrom * 9 / 5) + 32;
        }
        else if (selectfrom === "Farenheit" && selectto === "Celcius") {
            conversion = (valfrom - 32) * 5 / 9;
        }
        if (isNaN(conversion)) {
            conversion = 0;
        }
        return conversion;
    }



    $("#frominput").on("keyup", function () {
        var conversion = Convert();
        $("#toinput").val(conversion);
    })

    $("#toinput").on("keyup", function () {
        var selectfrom = $("#selectfrom").val();
        var selectto = $("#selectto ").val();
        
        var valto = $("#toinput").val();
        var conversion = 0;
        if (selectfrom === "Celcius" && selectto === "Farenheit") {
            conversion = (valto - 32) * 5 / 9;

        }
        else if (selectfrom === "Farenheit" && selectto === "Celcius") {
            conversion = (valto * 9 / 5) + 32;

        }
        else {
            conversion = valto;
        }
        if (isNaN(conversion)) {
            conversion = 0;
        }
        $("#frominput").val(conversion);
    })

    $("#selectfrom").on("change", function () {
        if($("#selectto").val()=== "Celcius")
        {
            $("#selectto").val("Farenheit");
        }
        else
        {
            $("#selectto").val("Celcius");
        }

        var conversion = Convert()
        $("#toinput").val(conversion);

    })
    
    $("#selectto").on("change", function () {
        if($("#selectfrom").val()=== "Celcius")
        {
            $("#selectfrom").val("Farenheit");
        }
        else
        {
            $("#selectfrom").val("Celcius");
        }
        var conversion = Convert();
        $("#toinput").val(conversion);
    })
})

