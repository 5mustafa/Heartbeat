        var endpoint = 'https://apilink/';
        var divToWrite = document.getElementById('response');
        
        function checkConnection () {
          var xhr = new XMLHttpRequest();
        
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
              var response = (xhr.responseText);
              divToWrite.innerHTML =  response;
            }
          };
        
          xhr.open('GET', endpoint);
          xhr.send();
        }
        
        checkConnection();
        setInterval(checkConnection, 5000); // Her 5 saniyede bir tekrarla