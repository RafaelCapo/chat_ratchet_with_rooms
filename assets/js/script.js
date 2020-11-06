    var form1 = document.getElementById('form1');
    var content = document.getElementById('content');
    var conn;
    var conn_status = false;

    window.onload = connect;

    form1.addEventListener('submit', function(e){
        e.preventDefault();

        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;
        var room = document.getElementById('room').value;

        if (name && message) {
            var data = {'name': name, 'message': message};

            conn.publish(room, data);
        }
    });
    
    
    function connect() {
        if (conn_status) {
            conn.close();
            conn_status = false;
            content.innerHTML = '';
        }

        var room = document.getElementById('room').value;

        conn = new ab.Session('ws://localhost:8082',
            function() {
                conn_status = true;

                conn.subscribe(room, function(topic, data) {
                    console.log(data);
                    if (typeof data === 'string') {
                        data = JSON.parse(data);

                        for (var i = 0; i < data.length; i++) {
                            showMessages(data[i]);
                        }
                    } else {
                        showMessages(data);
                    }
                });
            },
            function() {
                console.warn('WebSocket connection closed');
            },
            {'skipSubprotocolCheck': true}
        );
    }
    
    //Printar Mensagens na Tela
    function showMessages(data) {
        if (data.name == 'rafa') {
            var img_src = "assets/imgs/Icon awesome-rocketchat.png";
        } else if (data.name == 'bruno') {
            var img_src = "assets/imgs/Icon awesome-rocketchat-1.png";
        }

        var div = document.createElement('div');
        div.setAttribute('class', 'me');

        var img = document.createElement('img');
        img.setAttribute('src', img_src);

        var div_txt = document.createElement('div');
        div_txt.setAttribute('class', 'text');

        var h5 = document.createElement('h5');
        h5.textContent = data.name;

        var p = document.createElement('p');
        p.textContent = data.message;

        div_txt.appendChild(h5);
        div_txt.appendChild(p);

        div.appendChild(img);
        div.appendChild(div_txt);

        content.appendChild(div);
    }