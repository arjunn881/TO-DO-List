$(function () {
  $(".addBtn").click(function () {
    var input = $("#myInput").val();

    var divTask = document.createElement("ul");
    divTask.classList = "list";
    var ptask = document.createElement("li");
    ptask.classList = "ptsk";

    ptask.innerHTML = input;

    var icon = document.createElement("button");

    icon.classList = "btn";

    icon.innerHTML = "delete";

    divTask.append(ptask);
    divTask.append(icon);

    if (input != "") {
      $(".todo-ui").append(divTask);

      
    }

    $(input).remove();

    $(icon).click(function(){
        $(divTask).remove();
    });




  });

    

});
