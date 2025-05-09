<?php

namespace App\Grpc;


use Spiral\GRPC\Context;
use App\Protos\PingRequest;
use App\Protos\PingResponse;
use App\Grpc\EchoServiceInterface;

class EchoService implements EchoServiceInterface
{
    public function Ping(Context $ctx, PingRequest $in): PingResponse
    {
        $out = new PingResponse();
        $out->setMessage($in->getMessage());
        return $out;
    }
}
