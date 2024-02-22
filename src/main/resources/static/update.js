function btnUpdate(boardId) {
    let updateBoard = {
        title: $("#title").val(),
        content: $("#content").val(),
    };

    $.ajax({
        url: "/api/boards/"+boardId,
        type: "PUT",
        data: JSON.stringify(updateBoard),
        contentType: "application/json; charset=utf-8"
    }).done((res) => {
        location.href = "/"; //여기에서 페이지 이동이 일어난다.
    }).fail((res) => {
        alert(res.responseJSON.msg);
    });
}