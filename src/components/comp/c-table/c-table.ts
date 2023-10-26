export function table() {
    // Agregar una nueva fila
    $(document).on("click", ".plus", function() {
        var newRow = $(this).closest(".form-group").clone();
        newRow.find("input[type='text']").val("");
        $(this).closest(".form-group").after(newRow);
    });

    // Eliminar una fila
    $(document).on("click", ".minus", function() {
        $(this).closest(".form-group").remove();
    });
    
}