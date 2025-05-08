<?php

namespace App\Grpc;

use Echo\EchoServiceInterface;
use Echo\PingRequest;
use Echo\PingResponse;
use Spiral\GRPC\Context;
use Spiral\GRPC\Exception\GRPCException;

class EchoService implements EchoServiceInterface
{
    public function Ping(Context $ctx, PingRequest $in): PingResponse
    {
        $out = new PingResponse();
        $out->setMessage($in->getMessage());
        return $out;
    }
}
