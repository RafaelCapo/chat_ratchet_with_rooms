<?php
    require_once 'vendor/autoload.php';

    $loop   = React\EventLoop\Factory::create();
        $pusher = new Rafa\WebSocket\Pusher;

        $webSock = new React\Socket\Server('0.0.0.0:8082', $loop); 
        $webServer = new Ratchet\Server\IoServer(
            new Ratchet\Http\HttpServer(
                new Ratchet\WebSocket\WsServer(
                    new Ratchet\Wamp\WampServer(
                        $pusher
                    )
                )
            ),
            $webSock
        );

    $loop->run();