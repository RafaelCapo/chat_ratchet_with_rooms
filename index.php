<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
    <aside>
        <img src="assets/imgs/Icon ionic-ios-chatboxes.png" alt="Chat" title="Chat"/>

        <form id="form1">
    		<select id="room" name="room" onchange="connect()">
    			<option value="sala1">Sala 1</option>
    			<option value="sala2">Sala 2</option>
    		</select>

    		<input type="text" id="name">
			<input type="text" id="message">

    		<button id="btn1">Enviar Mensagem</button>
    	</form>
    </aside>

    <section id="content">
        
    </section>


    <script src="assets/js/bib/autobahn.js"></script>
    <script src='assets/js/script.js'></script>
</body>
</html>