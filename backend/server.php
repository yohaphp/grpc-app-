<?php

require 'vendor/autoload.php';

use Spiral\GRPC\Server;
use App\Grpc\EchoService;
use Spiral\RoadRunner\Worker;
use Ping\PingServiceInterface;
use App\Grpc\EchoServiceInterface;
use Ping\PingService;

$server = new Server();
$server->registerService(PingServiceInterface::class, new PingService());

$worker = Worker::create();
$server->serve($worker);
