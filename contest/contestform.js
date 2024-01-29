function previewImage (event){
    var input = event.target;
    var image = document.getElementById('preview');
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            image.src = e.target.result;
            image.style.width = "158px";
            image.style.height ="150px";


        }
        reader.readAsDataURL(input.files[0]);
    }
}