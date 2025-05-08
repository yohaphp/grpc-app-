<?php

require 'vendor/autoload.php';

use Spiral\GRPC\Server;
use Spiral\GRPC\Context;
use App\Grpc\EchoService;

$server = new Server();
$server->registerService(EchoService::class, new EchoService());

use Spiral\RoadRunner\Worker;
use Spiral\RoadRunner\Environment\Environment;

$worker = Worker::create(new Environment($_ENV));
$server->serve($worker);
