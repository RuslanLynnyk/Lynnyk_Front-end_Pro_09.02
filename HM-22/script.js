$("#createElementBtn").click(function() {
    const inputValue = $("#inputValue").val();

    // Створення нового елементу
    const newElement = $("<div>");
    newElement.text(inputValue);

    // Додавання нового елементу до контейнера
    $("#outputContainer").append(newElement);

    // Видалення елементу при кліку на нього
    newElement.click(function() {
        $(this).remove();
    });
});
  