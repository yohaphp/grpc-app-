<?php

require 'vendor/autoload.php';

use Spiral\GRPC\Server;
use Spiral\RoadRunner\Worker;
use Spiral\Goridge\StreamRelay;
use Ping\PingService;
use Ping\PingServiceInterface;

// Create the relay from STDIN/STDOUT
$relay = new StreamRelay(STDIN, STDOUT);

// Pass the relay to the Worker
$worker = new Worker($relay);

// Start the GRPC server
$server = new Server();
$server->registerService(PingServiceInterface::class, new PingService());
$server->serve($worker);
