<?php
// src/PingService.php
namespace Ping;

use Spiral\GRPC;
use Ping\PingServiceInterface;
use Ping\PingRequest;
use Ping\PingResponse;

class PingService implements PingServiceInterface {
    public function Ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse {
        $response = new PingResponse();
        $response->setMessage($in->getMessage());
        return $response;
    }
}

