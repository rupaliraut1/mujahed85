function postToGoogle() {
    // var field1 = $("input[type='text'][name='name']").val();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdjOTKRb7YiWi8OGPq6M6CRL0TpuAsUKacKp2XgruMbIp4wzg/formResponse",
      data: {
        "entry.924752166": name,
        "entry.997497831": email,

      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function() {
          //Success message
        },
        200: function() {
          //Success Message
        }
      }
    });
  }
 
 /* 
 $(document).ready(function() {
    $('#form').submit(function() {
      postToGoogle();
      return false;
    });
    
 });
 */